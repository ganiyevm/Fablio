<template>
  <section class="bg-neutral-900 py-16 text-white md:py-2">
    <div class="container mx-auto px-4 pt-20">
      <h1 class="text-4xl leading-tight font-extrabold drop-shadow sm:text-5xl xl:text-6xl"
      v-html="$t('exportSection.title')">
</h1>

      <div class="grid min-h-[90vh] items-center gap-30 lg:grid-cols-14">
        <!-- 3D GLOBUS (SAL KICHIKROQ + RESPONSIVE) -->
        <div class="lg:col-span-8">
          <div
            class="relative mx-auto aspect-square min-h-[220px] w-full max-w-[260px] overflow-hidden rounded-full sm:max-w-[340px] md:max-w-[420px] lg:max-w-[520px] xl:max-w-[640px]"
          >
            <!-- 3D renderer -->
            <div ref="globeEl" class="h-full w-full"></div>

            <!-- LABEL/ARROW OVERLAY (tepada tursin) -->
            <canvas ref="labelCv" class="pointer-events-none absolute inset-0 z-30"></canvas>

            <!-- radial highlight (canvasdan pastda) -->
            <div
              class="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.18),transparent_65%)]"
            ></div>

            <!-- kichik caption -->
            <!-- <div class="absolute left-0 top-0 p-4 sm:p-6 md:p-8 max-w-[75%]">
                <p class="text-emerald-400 uppercase tracking-wide mb-3 opacity-90">
                  География экспорта
                </p>
              </div> -->
          </div>
        </div>

        <!-- RO'YXAT / LEGEND (MATN KATTAROQ) -->
        <div class="lg:col-span-4">
          <ul class="grid grid-cols-2 gap-x-30 gap-y-3 md:grid-cols-3 md:gap-y-5">
            <li
              v-for="c in exportCountries"
              :key="c.id"
              class="flex cursor-pointer items-center gap-2 rounded-lg p-2 transition hover:bg-white/5"
              @mouseenter="focusCountry(c.id)"
              @click="focusCountry(c.id)"
            >
              <!-- DOT: o'lcham va rang to'g'ridan-to'g'ri style bilan -->
              <span
                class="block shrink-0 rounded-full border border-white/30"
                style="width: 14px; height: 14px"
                :style="{ backgroundColor: c.color }"
              ></span>

              <span
                class="text-[15px] text-white/80 sm:text-base md:text-lg xl:text-xl"
                :class="{ 'font-semibold text-white': activeId === c.id }"
              >
                {{ c.name }}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, shallowRef, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import * as THREE from 'three'
import ThreeGlobe from 'three-globe'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { geoCentroid } from 'd3-geo'
import * as topojson from 'topojson-client'

type Feature = GeoJSON.Feature<GeoJSON.MultiPolygon | GeoJSON.Polygon, any>
type FeatureCollection = GeoJSON.FeatureCollection<GeoJSON.Geometry, any>
type Country = { id: number; name: string; color: string }

const { t, tm } = useI18n()

const exportCountries = computed(() => tm('exportCountries'))  // JSON dan massiv

// Oʻzbekiston markaziy davlat sifatida (i18n bilan)
const UZBEKISTAN = computed(() => ({ 
  id: 860, 
  name: t('uzbekistan'), 
  color: '#073814' 
}))

const globeEl = ref<HTMLDivElement | null>(null)
const labelCv = ref<HTMLCanvasElement | null>(null)

let renderer: THREE.WebGLRenderer | null = null
let scene: THREE.Scene | null = null
let camera: THREE.PerspectiveCamera | null = null
let controls: OrbitControls | null = null
let globe: any = null
let rafId: number | null = null
let flyRafId: number | null = null

const worldFeatures = shallowRef<Feature[]>([])
const activeId = ref<number | null>(null)
const activeLonLat = ref<[number, number] | null>(null) // [lon, lat]

// GEO yuklash
async function loadCountries() {
  const res = await fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
  const topo = await res.json()
  const fc = topojson.feature(topo, topo.objects.countries) as unknown as FeatureCollection
  worldFeatures.value = fc.features.map((f: any) => ({ ...f, id: Number(f.id) }))
}

// Oʻzbekistondan eksport davlatlarga strelkalar uchun ma'lumot
function getArcsData() {
  const uzbekistanFeature = worldFeatures.value.find((f) => Number(f.id) === 860)
  if (!uzbekistanFeature) return []

  const [uzLon, uzLat] = geoCentroid(uzbekistanFeature) as [number, number]

  return exportCountries.value.map((country) => {
    const countryFeature = worldFeatures.value.find((f) => Number(f.id) === country.id)
    if (!countryFeature) return null

    const [countryLon, countryLat] = geoCentroid(countryFeature) as [number, number]

    return {
      startLat: uzLat,
      startLng: uzLon,
      endLat: countryLat,
      endLng: countryLon,
      color: country.color,
    }
  }).filter(Boolean)
}

// 3D
function init3D() {
  const container = globeEl.value!
  const { clientWidth: w, clientHeight: h } = container

  scene = new THREE.Scene()

  camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 1200)
  camera.position.set(0, 0, 300)

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
  renderer.setSize(w, h)
  renderer.outputColorSpace = THREE.SRGBColorSpace
  renderer.domElement.style.cursor = 'grab'
  container.appendChild(renderer.domElement)

  fitLabelCanvas()

  scene.add(new THREE.AmbientLight(0xffffff, 0.95))
  const dir = new THREE.DirectionalLight(0xffffff, 0.85)
  dir.position.set(-90, 120, 260)
  scene.add(dir)

  globe = new ThreeGlobe()
    .globeImageUrl('') // oq sfera
    .polygonsData(worldFeatures.value)
    .polygonSideColor(() => 'rgba(0,0,0,0.15)')
    .polygonStrokeColor(() => ('#319AC4'))
    .polygonsTransitionDuration(300)
    .showAtmosphere(true)
    .atmosphereColor('#319AC4') // Binafsha atmosfera
    .atmosphereAltitude(0.25)
    // Oʻzbekistondan boshqa davlatlarga strelkalar
    .arcsData(getArcsData())
    .arcColor(() => 'rgba(255,255,255,0.8)') // Oq rangdagi strelkalar
    .arcDashLength(0.3)
    .arcDashGap(0.1)
    .arcDashAnimateTime(8000)
    .arcsTransitionDuration(1000)
    .arcStroke(0.4)
    .arcAltitude(0.3)

  const mat = globe.globeMaterial()
  mat.map = null
  mat.color.set('#096C94') // Binafsha rang
  mat.emissive.set('#6366f1')
  mat.emissiveIntensity = 0.1
  mat.shininess = 8

  updatePolygonStyles()
  scene.add(globe)

  // Strelkalarni qayta yuklash funktsiyasi
  const updateArcs = () => {
    if (worldFeatures.value.length > 0) {
      globe.arcsData(getArcsData())
    }
  }

  // 1 soniyadan keyin strelkalarni qoʻshish
  setTimeout(updateArcs, 1000)

  globe.onPolygonHover?.((poly: any) => {
    if (!renderer) return
    renderer.domElement.style.cursor = poly ? 'pointer' : 'grab'
  })
  globe.onPolygonClick?.((poly: any) => {
    if (!poly) return
    focusCountry(Number(poly.id))
  })

  controls = new OrbitControls(camera!, renderer.domElement)
  controls.enableDamping = true
  controls.dampingFactor = 0.06
  controls.enablePan = false // Harakatlantirishni o'chirish
  controls.enableZoom = false // Zoom qilishni o'chirish
  controls.minDistance = 160
  controls.maxDistance = 520
  controls.autoRotate = false // Avtomatik aylanishni yoqish
  controls.autoRotateSpeed = 0 // Aylanis tezligi

  controls.mouseButtons = {
    LEFT: null, // Sichqoncha bilan harakatlantirishni o'chirish
    MIDDLE: null,
    RIGHT: null,
  }
  controls.touches = {
    ONE: null,
    TWO: null,
  }
  controls.enableZoom = false

  renderer.domElement.addEventListener(
    'pointerdown',
    () => controls && (controls.autoRotate = false)
  )
  renderer.domElement.addEventListener('pointerup', () =>
    setTimeout(() => controls && (controls.autoRotate = true), 600)
  )

  const tick = () => {
    controls!.update()
    renderer!.render(scene!, camera!)
    drawLabelOverlay()
    rafId = requestAnimationFrame(tick)
  }
  tick()

  window.addEventListener('resize', onResize)
}

function onResize() {
  if (!globeEl.value || !renderer || !camera) return
  const { clientWidth: w, clientHeight: h } = globeEl.value
  renderer.setSize(w, h)
  camera.aspect = w / h
  camera.updateProjectionMatrix()
  fitLabelCanvas()
}

function fitLabelCanvas() {
  const cv = labelCv.value!
  const box = globeEl.value!.getBoundingClientRect()
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  cv.width = Math.floor(box.width * dpr)
  cv.height = Math.floor(box.height * dpr)
  cv.style.width = `${Math.floor(box.width)}px`
  cv.style.height = `${Math.floor(box.height)}px`
  const ctx = cv.getContext('2d')!
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
}

// ranglar
function updatePolygonStyles() {
  // Oʻzbekiston doimo yashil rangda
  globe
    .polygonCapColor((d: any) => {
      const id = Number(d.id)
      if (id === 860) return UZBEKISTAN.value.color // Oʻzbekiston yashil
      if (activeId.value && id === activeId.value) {
        const meta = exportCountries.value.find((c) => c.id === activeId.value)
        return meta?.color || '#2dd4bf'
      }
      // Eksport davlatlari kulrang rangda
      const exportCountry = exportCountries.value.find((c) => c.id === id)
      if (exportCountry) return '#9ca3af' // Kulrang
      return '#e5e7eb' // Default kulrang
    })
    .polygonAltitude((d: any) => {
      const id = Number(d.id)
      if (id === 860) return 0.04 // Oʻzbekiston balandroq
      if (id === activeId.value) return 0.025
      const exportCountry = exportCountries.value.find((c) => c.id === id)
      return exportCountry ? 0.015 : 0.005
    })
}

// FOCUS
const toRad = THREE.MathUtils.degToRad
function eastTangentLocal(lon: number, lat: number) {
  const phi = toRad(90 - lat)
  const theta = toRad(lon)
  const sinφ = Math.sin(phi),
    cosφ = Math.cos(phi)
  const sinθ = Math.sin(theta),
    cosθ = Math.cos(theta)
  // ∂/∂lon (theta) – "sharq" yo'nalishi
  return new THREE.Vector3(sinφ * cosθ, 0, -sinφ * sinθ).normalize()
}

function northTangentLocal(lon: number, lat: number) {
  const phi = toRad(90 - lat)
  const theta = toRad(lon)
  const sinφ = Math.sin(phi),
    cosφ = Math.cos(phi)
  const sinθ = Math.sin(theta),
    cosθ = Math.cos(theta)
  // ∂/∂lat – "shimol" yo'nalishi (to'g'rilangan formula)
  return new THREE.Vector3(-cosφ * sinθ, sinφ, -cosφ * cosθ).normalize()
}

// Tanlangan nuqtani markazga qaratib, so'ng roll bilan "gorizontal" qilamiz.
// (East vektorni +X ga to'g'rilaymiz)
function quaternionToFaceHorizontal(lon: number, lat: number) {
  const qFace = quaternionToFace(lon, lat)

  // qFace qo'llangandan keyingi east vektori qaysi burchakka qarab turibdi?
  const eWorld = eastTangentLocal(lon, lat).applyQuaternion(qFace)
  const angle = Math.atan2(eWorld.y, eWorld.x) // XY tekislikdagi burchak

  // Z o'qi atrofida −angle ga burab, east'ni +X bilan tekislab qo'yamiz
  const qRoll = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), -angle)

  // MUHIM: roll'ni "keyin" qo'llash uchun Q_total = qRoll * qFace
  return qRoll.multiply(qFace)
}

function quaternionToFace(lon: number, lat: number) {
  const phi = toRad(90 - lat)
  const theta = toRad(lon)
  const v = new THREE.Vector3().setFromSpherical(new THREE.Spherical(1, phi, theta)).normalize()
  const zAxis = new THREE.Vector3(0, 0, 1)
  return new THREE.Quaternion().setFromUnitVectors(v, zAxis)
}
function rotateGlobeTo(lon: number, lat: number, duration = 1100, makeHorizontal = false) {
  if (!globe) return
  const qStart = globe.quaternion.clone()
  const qEnd = makeHorizontal ? quaternionToFaceHorizontal(lon, lat) : quaternionToFace(lon, lat)

  const t0 = performance.now()
  if (flyRafId) cancelAnimationFrame(flyRafId)
  const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)

  const step = () => {
    const t = Math.min(1, (performance.now() - t0) / duration)
    const qt = qStart.clone().slerp(qEnd, ease(t))
    globe.quaternion.copy(qt)
    if (t < 1) flyRafId = requestAnimationFrame(step)
    else flyRafId = null
  }
  step()

  if (controls) {
    controls.autoRotate = false
    setTimeout(() => {
      if (controls) controls.autoRotate = true
    }, duration + 500)
  }
}

// ====== LABEL / ARROW overlay (responsive font) ======
function getLabelFontPx() {
  if (!renderer) return 22
  const w = renderer.domElement.clientWidth
  // 3.2% width, 18..34px oralig'ida
  return Math.max(18, Math.min(34, Math.round(w * 0.032)))
}

function lonLatToWorldLocal(lon: number, lat: number, k = 1.008) {
  const R = typeof globe?.getGlobeRadius === 'function' ? globe.getGlobeRadius() : 100
  const phi = toRad(90 - lat)
  const theta = toRad(lon)
  return new THREE.Vector3().setFromSpherical(new THREE.Spherical(R * k, phi, theta))
}
function worldToScreen(vWorld: THREE.Vector3): [number, number] {
  const p = vWorld.clone().project(camera!)
  const w = renderer!.domElement.clientWidth
  const h = renderer!.domElement.clientHeight
  return [(p.x * 0.5 + 0.5) * w, (-p.y * 0.5 + 0.5) * h]
}

function drawLabelOverlay() {
  const cv = labelCv.value!,
    ctx = cv.getContext('2d')!
  ctx.clearRect(0, 0, cv.width, cv.height)
  if (!activeId.value || !activeLonLat.value) return

  const [lon, lat] = activeLonLat.value

  const pLocal = lonLatToWorldLocal(lon, lat, 1.006)
  const pWorld = pLocal.clone()
  globe.localToWorld(pWorld)

  // nuqta kameraning OLD tomonida bo'lsin
  const camPos = new THREE.Vector3()
  const camDir = new THREE.Vector3()
  camera!.getWorldPosition(camPos)
  camera!.getWorldDirection(camDir)
  const vToPoint = pWorld.clone().sub(camPos).normalize()
  if (vToPoint.dot(camDir) <= 0) return

  const [px, py] = worldToScreen(pWorld)

  // label joylashuvi
  const cx = renderer!.domElement.clientWidth / 2
  const cy = renderer!.domElement.clientHeight / 2
  const vx = px - cx,
    vy = py - cy
  const L = Math.hypot(vx, vy) || 1

  const fontPx = getLabelFontPx()
  const offset = Math.max(48, fontPx * 2) // labeldan nuqtaga masofa

  let lx = px + (vx / L) * offset
  let ly = py + (vy / L) * offset

  const pad = 10
  const maxX = renderer!.domElement.clientWidth
  const maxY = renderer!.domElement.clientHeight
  lx = Math.min(Math.max(pad, lx), maxX - pad)
  ly = Math.min(Math.max(pad, ly), maxY - pad)

  const meta = exportCountries.value.find((c) => c.id === activeId.value)!
  ctx.save()
  ctx.font = `800 ${fontPx}px ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial`
  ctx.textBaseline = 'top'

  // qora kontur + oq to'ldirish
  ctx.lineWidth = Math.max(4, Math.round(fontPx * 0.22))
  ctx.strokeStyle = 'rgba(17,24,39,0.85)'
  ctx.fillStyle = '#ffffff'
  ctx.strokeText(meta.name, lx, ly)
  ctx.fillText(meta.name, lx, ly)

  const textW = ctx.measureText(meta.name).width
  const underlineY = ly + fontPx + 2
  const startX = lx + 2
  const endX = lx + textW + 2

  // tagiga chiziq
  ctx.lineWidth = 2
  ctx.strokeStyle = 'rgba(17,24,39,0.85)'
  ctx.beginPath()
  ctx.moveTo(startX, underlineY)
  ctx.lineTo(endX, underlineY)
  ctx.stroke()

  // strelka
  ctx.lineWidth = 1.4
  ctx.beginPath()
  ctx.moveTo(startX, underlineY)
  ctx.lineTo(px, py)
  ctx.stroke()
  const ang = Math.atan2(py - underlineY, px - startX)
  const ah = Math.max(8, Math.round(fontPx * 0.35))
  ctx.beginPath()
  ctx.moveTo(px, py)
  ctx.lineTo(px - Math.cos(ang - Math.PI / 6) * ah, py - Math.sin(ang - Math.PI / 6) * ah)
  ctx.lineTo(px - Math.cos(ang + Math.PI / 6) * ah, py - Math.sin(ang + Math.PI / 6) * ah)
  ctx.closePath()
  ctx.fillStyle = 'rgba(17,24,39,0.85)'
  ctx.fill()
  ctx.restore()
}

// API
function focusCountry(id: number) {
  const feat = worldFeatures.value.find((f) => Number(f.id) === id)
  const meta = exportCountries.value.find((c) => c.id === id)
  if (!feat || !meta) return

  activeId.value = id
  updatePolygonStyles()

  const [lon, lat] = geoCentroid(feat) as [number, number]
  activeLonLat.value = [lon, lat]

  // faqat bitta strelka (Uzbekistan -> tanlangan country)
  const uz = worldFeatures.value.find((f) => Number(f.id) === 860)
  if (uz) {
    const [uzLon, uzLat] = geoCentroid(uz) as [number, number]
    globe.arcsData([
      {
        startLat: uzLat,
        startLng: uzLon,
        endLat: lat,
        endLng: lon,
        color: meta.color,
      },
    ])
  }

  const makeHorizontal = id === 643 || id === 398 || id === 860 // Rossiya, Qozogʻiston, Oʻzbekiston
  rotateGlobeTo(lon, lat, 1100, makeHorizontal)
}


onMounted(async () => {
  await loadCountries()
  init3D()
  // Oʻzbekiston markazda, lekin activeId yoʻq
  const uzbekistanFeature = worldFeatures.value.find((f) => Number(f.id) === 860)
  if (uzbekistanFeature) {
    const [lon, lat] = geoCentroid(uzbekistanFeature) as [number, number]
    setTimeout(() => {
      rotateGlobeTo(lon, lat, 1100, true)
    }, 500)
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize)
  if (rafId) cancelAnimationFrame(rafId)
  if (flyRafId) cancelAnimationFrame(flyRafId)
  controls?.dispose()
  renderer?.dispose()
  if (renderer?.domElement?.parentElement) {
    renderer.domElement.parentElement.removeChild(renderer.domElement)
  }
  scene = null
  camera = null
  renderer = null
})
</script>

<style scoped>
.container {
  max-width: 1280px;
}
</style>