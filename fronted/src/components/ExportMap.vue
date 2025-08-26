<!-- <template>
    <section class="bg-neutral-700 text-white py-16 md:py-24">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-tight drop-shadow">
                  Мы экспортируем свою <br> продукцию в 17 стран,
                  обеспечивая<br> высокий уровень партнёрства.
                </h1>
        <div class="grid lg:grid-cols-12 gap-10 items-center min-h-[100vh]">
            
          
          <div class="lg:col-span-8">
            <div
              class="relative mx-auto aspect-square w-full max-w-[540px] xl:max-w-[900px]  overflow-hidden"
            >
              <canvas ref="canvas" class="w-full h-full block"></canvas>
  

              <div class="pointer-events-none absolute inset-0 bg-gradient-to-br from-neutral-700 to-transparent"></div>
  

              <div class="absolute left-0 top-0 p-6 sm:p-8 md:p-10 max-w-[70%]">
                <p class="text-emerald-400 uppercase tracking-wide mb-3 opacity-90">География экспорта</p>
               
              </div>
  

              <div
                v-if="active?.name && labelPos"
                class="pointer-events-none absolute z-20"
                :style="{
                  left: labelPos[0] + 'px',
                  top:  labelPos[1] + 'px',
                  transform: 'translateX(' + labelAlignShift + 'px) translateY(-12px)'
                }"
              >
                <span
                  ref="labelEl"
                  class="text-[22px] leading-none font-semibold tracking-wide drop-shadow"
                  style="color:#474b51"
                >{{ active.name }}</span>
              </div>
            </div>
          </div>
  
          
          <div class="lg:col-span-4">
            <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <li
                v-for="c in COUNTRIES"
                :key="c.id"
                class="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 cursor-pointer transition"
                @mouseenter="focusCountry(c.id)"
              >
                <span class="inline-flex w-3.5 h-3.5 rounded-full ring-2 ring-white/20" :style="{ background: c.color }"></span>
                <span class="text-white/90">{{ c.name }}</span>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { onMounted, onBeforeUnmount, ref, shallowRef } from 'vue'
  import { geoOrthographic, geoPath, geoGraticule10, geoCentroid, type GeoProjection } from 'd3-geo'
  import { timer, type Timer } from 'd3-timer'
  import * as topojson from 'topojson-client'
  
  type Feature = GeoJSON.Feature<GeoJSON.MultiPolygon | GeoJSON.Polygon, {}>
  type FeatureCollection = GeoJSON.FeatureCollection<GeoJSON.Geometry, {}>
  type Country = { id: number; name: string; color: string }
  
  const COUNTRIES: Country[] = [
    { id: 410, name: 'Республика Корея', color: '#22c55e' },
    { id: 818, name: 'Египет',            color: '#14b8a6' },
    { id: 504, name: 'Марокко',           color: '#f59e0b' },
    { id: 380, name: 'Италия',            color: '#f97316' },
    { id: 643, name: 'Россия',            color: '#ef4444' },
    { id: 398, name: 'Казахстан',         color: '#c084fc' },
    { id: 417, name: 'Киргизстан',        color: '#22d3ee' },
    { id: 364, name: 'Иран',              color: '#84cc16' },
    { id: 724, name: 'Испания',           color: '#a78bfa' },
    { id: 620, name: 'Португалия',        color: '#06b6d4' },
    { id: 56,  name: 'Бельгия',           color: '#2563eb' },
    { id: 276, name: 'Германия',          color: '#0ea5e9' },
    { id: 616, name: 'Польша',            color: '#10b981' },
    { id: 804, name: 'Украина',           color: '#f43f5e' },
    { id: 112, name: 'Белоруссия',        color: '#3b82f6' },
    { id: 792, name: 'Турция',            color: '#eab308' },
    { id: 100, name: 'Болгария',          color: '#8b5cf6' },
  ]
  
  const canvas = ref<HTMLCanvasElement | null>(null)
  const labelEl = ref<HTMLSpanElement | null>(null)
  const ctx = shallowRef<CanvasRenderingContext2D | null>(null)
  let projection: GeoProjection
  let path: any
  
  let worldCountries: Feature[] = []
  let graticule = geoGraticule10()
  
  const active   = ref<{ id: number; name: string; color: string } | null>(null)
  const labelPos = ref<[number, number] | null>(null)
  const labelAlignShift = ref(0)
  
  let spinTimer: Timer | null = null
  let tweenTimer: Timer | null = null
  
  const LABEL_FONT = '600 22px ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial'
  
  async function loadData() {
    const res = await fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
    const topo = await res.json()
    const countries = topojson.feature(topo, topo.objects.countries) as FeatureCollection
    worldCountries = countries.features as Feature[]
  }
  
  function fitCanvas() {
    const el = canvas.value!
    const rect = el.getBoundingClientRect()
    // KATTA o‘lcham: kvadrat konteynerning ENiga teng
    const size = Math.floor(Math.min(rect.width, rect.height))
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    el.width = size * dpr
    el.height = size * dpr
    el.style.width = size + 'px'
    el.style.height = size + 'px'
  
    const c = el.getContext('2d')!
    c.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.value = c
  
    projection = geoOrthographic()
  .translate([size / 2, size / 2])
  .scale(size * 0.35)   // oldin 0.47 edi — globus biroz kichikroq ko'rinadi
  .precision(0.1)
  
    path = geoPath(projection, c)
  }
  
  function drawArrow(from: [number, number], to: [number, number], color = '#111827CC') {
    const c = ctx.value!
    c.beginPath(); c.moveTo(from[0], from[1]); c.lineTo(to[0], to[1])
    c.lineWidth = 1.4; c.strokeStyle = color; c.stroke()
    const angle = Math.atan2(to[1] - from[1], to[0] - from[0])
    const ah = 9
    c.beginPath()
    c.moveTo(to[0], to[1])
    c.lineTo(to[0] - Math.cos(angle - Math.PI / 6) * ah, to[1] - Math.sin(angle - Math.PI / 6) * ah)
    c.lineTo(to[0] - Math.cos(angle + Math.PI / 6) * ah, to[1] - Math.sin(angle + Math.PI / 6) * ah)
    c.closePath(); c.fillStyle = color; c.fill()
  }
  function drawUnderline(x1: number, x2: number, y: number, color = '#111827CC') {
    const c = ctx.value!
    c.beginPath(); c.moveTo(x1, y); c.lineTo(x2, y)
    c.lineWidth = 2; c.strokeStyle = color; c.stroke()
  }
  
  function draw() {
    const c = ctx.value!, el = canvas.value!
    c.clearRect(0, 0, el.width, el.height)
  
    c.beginPath(); path({ type: 'Sphere' } as any); c.fillStyle = '#ffffff'; c.fill()
    c.beginPath(); path(graticule as any); c.lineWidth = 0.5; c.strokeStyle = 'rgba(0,0,0,0.08)'; c.stroke()
  
    c.lineWidth = 0.6
    for (const f of worldCountries) { c.beginPath(); path(f); c.fillStyle = '#e5e7eb'; c.fill(); c.strokeStyle = '#d1d5db'; c.stroke() }
  
    labelPos.value = null
    if (active.value) {
      const f = worldCountries.find((d: any) => Number(d.id) === active.value!.id)
      if (f) {
        c.beginPath(); path(f); c.fillStyle = active.value.color; c.fill()
        const [lon, lat] = geoCentroid(f) as [number, number]
        const P = projection([lon, lat]) as [number, number] | null
        if (P) {
          const [cx, cy] = projection.translate() as [number, number]
          const vx = P[0] - cx, vy = P[1] - cy, L = Math.hypot(vx, vy) || 1
          const offset = 56
          let lx = P[0] + (vx / L) * offset
          let ly = P[1] + (vy / L) * offset
  
          const pad = 10
          const maxX = Number((canvas.value!.style.width || '0').replace('px','')) || (cx * 2)
          const maxY = Number((canvas.value!.style.height || '0').replace('px','')) || (cy * 2)
          lx = Math.min(Math.max(pad, lx), maxX - pad)
          ly = Math.min(Math.max(pad, ly), maxY - pad)
  
          labelPos.value = [lx, ly]
          labelAlignShift.value = (vx >= 0 ? 0 : -8)
  
          c.save(); c.font = LABEL_FONT; const textW = c.measureText(active.value.name).width; c.restore()
          const underlineY = ly + 18, underlineStartX = lx + 2, underlineEndX = lx + textW + 2
          drawArrow([underlineStartX, underlineY], P, '#111827CC')
          drawUnderline(underlineStartX, underlineEndX, underlineY, '#111827CC')
        }
      }
    }
  
    c.beginPath(); path({ type: 'Sphere' } as any); c.lineWidth = 1.2; c.strokeStyle = '#9ca3af'; c.stroke()
  }
  
  function easeCubic(t: number) { return t < 0.5 ? 4*t*t*t : 1 - Math.pow(-2*t + 2, 3)/2 }
  function animateTo(lon: number, lat: number, duration = 1100) {
    tweenTimer?.stop()
    const r0 = projection.rotate() as [number, number, number]
    const r1: [number, number, number] = [-lon, -lat, 0]
    tweenTimer = timer((elapsed) => {
      const t = Math.min(1, elapsed / duration), e = easeCubic(t)
      projection.rotate([ r0[0] + (r1[0]-r0[0]) * e, r0[1] + (r1[1]-r0[1]) * e, 0 ])
      draw(); if (t >= 1) tweenTimer!.stop()
    })
  }
  function focusCountry(id: number) {
    const meta = COUNTRIES.find((c) => c.id === id)!; active.value = meta
    const f = worldCountries.find((d: any) => Number(d.id) === id); if (!f) return
    const [lon, lat] = geoCentroid(f) as [number, number]; animateTo(lon, lat, 1100)
  }
  function startSpin() {
    spinTimer?.stop()
    spinTimer = timer(() => {
      if (tweenTimer) return
      const r = projection.rotate() as [number, number, number]
      projection.rotate([r[0] + 0.015, r[1], 0]); draw()
    })
  }
  function stopSpin() { spinTimer?.stop() }
  function enableDrag() {
    let dragging = false, prev: [number, number] | null = null
    canvas.value!.addEventListener('mousedown', (e) => { dragging = true; stopSpin(); prev = [e.clientX, e.clientY] })
    window.addEventListener('mouseup', () => { dragging = false; startSpin() })
    window.addEventListener('mousemove', (e) => {
      if (!dragging || !prev) return
      const [px, py] = prev, dx = e.clientX - px, dy = e.clientY - py
      const r = projection.rotate() as [number, number, number]
      projection.rotate([r[0] + dx * 0.2, r[1] - dy * 0.2, 0]); prev = [e.clientX, e.clientY]; draw()
    })
  }
  
  onMounted(async () => {
    await loadData(); fitCanvas(); draw(); startSpin(); enableDrag()
    window.addEventListener('resize', () => { fitCanvas(); draw() })
    focusCountry(380) // start: Италия
  })
  onBeforeUnmount(() => { spinTimer?.stop(); tweenTimer?.stop() })
  </script>
  
  <style scoped>
  .container { max-width: 1280px; } /* sectionni kengaytirdim */
  </style>
   -->
<template>
  <section class="bg-neutral-900 py-16 text-white md:py-2">
    <div class="container mx-auto px-4">
      <h1 class="text-4xl leading-tight font-extrabold drop-shadow sm:text-5xl xl:text-6xl">
        Мы экспортируем свою <br />
        продукцию в 17 стран, обеспечивая<br />
        высокий уровень партнёрства.
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

        <!-- RO‘YXAT / LEGEND (MATN KATTAROQ) -->
        <div class="lg:col-span-4">
          <ul class="grid grid-cols-2 gap-x-30 gap-y-3 md:grid-cols-3 md:gap-y-5">
            <li
              v-for="c in COUNTRIES"
              :key="c.id"
              class="flex cursor-pointer items-center gap-2 rounded-lg p-2 transition hover:bg-white/5"
              @mouseenter="focusCountry(c.id)"
              @click="focusCountry(c.id)"
            >
              <!-- DOT: o‘lcham va rang to‘g‘ridan-to‘g‘ri style bilan -->
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
import { onMounted, onBeforeUnmount, ref, shallowRef } from 'vue'
import * as THREE from 'three'
import ThreeGlobe from 'three-globe'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { geoCentroid } from 'd3-geo'
import * as topojson from 'topojson-client'

type Feature = GeoJSON.Feature<GeoJSON.MultiPolygon | GeoJSON.Polygon, any>
type FeatureCollection = GeoJSON.FeatureCollection<GeoJSON.Geometry, any>
type Country = { id: number; name: string; color: string }

// 17 ta davlat
const COUNTRIES: Country[] = [
  { id: 410, name: 'Республика Корея', color: '#22c55e' },
  { id: 818, name: 'Египет', color: '#14b8a6' },
  { id: 504, name: 'Марокко', color: '#f59e0b' },
  { id: 380, name: 'Италия', color: '#f97316' },
  { id: 643, name: 'Россия', color: '#ef4444' },
  { id: 398, name: 'Казахстан', color: '#c084fc' },
  { id: 417, name: 'Киргизстан', color: '#22d3ee' },
  { id: 364, name: 'Иран', color: '#84cc16' },
  { id: 724, name: 'Испания', color: '#a78bfa' },
  { id: 620, name: 'Португалия', color: '#06b6d4' },
  { id: 56, name: 'Бельгия', color: '#2563eb' },
  { id: 276, name: 'Германия', color: '#0ea5e9' },
  { id: 616, name: 'Польша', color: '#10b981' },
  { id: 804, name: 'Украина', color: '#f43f5e' },
  { id: 112, name: 'Белоруссия', color: '#3b82f6' },
  { id: 792, name: 'Турция', color: '#eab308' },
  { id: 100, name: 'Болгария', color: '#8b5cf6' },
]

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
  const fc = topojson.feature(topo, topo.objects.countries) as FeatureCollection
  worldFeatures.value = fc.features.map((f: any) => ({ ...f, id: Number(f.id) }))
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
    .polygonSideColor(() => 'rgba(0,0,0,0.08)')
    .polygonStrokeColor(() => 'rgba(0,0,0,0.25)')
    .polygonsTransitionDuration(300)
    .showAtmosphere(true)
    .atmosphereColor('#b7d7ff')
    .atmosphereAltitude(0.22)

  const mat = globe.globeMaterial()
  mat.map = null
  mat.color.set('#f3f4f6')
  mat.emissive.set('#ffffff')
  mat.emissiveIntensity = 0.06
  mat.shininess = 6

  updatePolygonStyles()
  scene.add(globe)

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
  controls.enablePan = false
  controls.minDistance = 160
  controls.maxDistance = 520
  controls.autoRotate = true
  controls.autoRotateSpeed = 0.12

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
  const meta = activeId.value ? COUNTRIES.find((c) => c.id === activeId.value) : null
  globe
    .polygonCapColor((d: any) =>
      activeId.value && Number(d.id) === activeId.value ? meta?.color || '#2dd4bf' : '#e5e7eb'
    )
    .polygonAltitude((d: any) => (Number(d.id) === activeId.value ? 0.022 : 0.005))
}

// FOCUS
const toRad = THREE.MathUtils.degToRad
function quaternionToFace(lon: number, lat: number) {
  const phi = toRad(90 - lat)
  const theta = toRad(lon)
  const v = new THREE.Vector3().setFromSpherical(new THREE.Spherical(1, phi, theta)).normalize()
  const zAxis = new THREE.Vector3(0, 0, 1)
  return new THREE.Quaternion().setFromUnitVectors(v, zAxis)
}
function rotateGlobeTo(lon: number, lat: number, duration = 1100) {
  if (!globe) return
  const qStart = globe.quaternion.clone()
  const qEnd = quaternionToFace(lon, lat)
  const t0 = performance.now()
  if (flyRafId) cancelAnimationFrame(flyRafId)
  const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)
  const step = () => {
    const t = Math.min(1, (performance.now() - t0) / duration)
    const qt = qStart.clone().slerp(qEnd, ease(t))
    globe.quaternion.copy(qt)
    if (t < 1) {
      flyRafId = requestAnimationFrame(step)
    } else {
      flyRafId = null
    }
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
  // 3.2% width, 18..34px oralig‘ida
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

  const meta = COUNTRIES.find((c) => c.id === activeId.value)!
  ctx.save()
  ctx.font = `800 ${fontPx}px ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial`
  ctx.textBaseline = 'top'

  // qora kontur + oq to‘ldirish
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
  const meta = COUNTRIES.find((c) => c.id === id)
  if (!feat || !meta) return

  activeId.value = id
  updatePolygonStyles()

  const [lon, lat] = geoCentroid(feat) as [number, number]
  activeLonLat.value = [lon, lat]
  rotateGlobeTo(lon, lat, 1100)
}

onMounted(async () => {
  await loadCountries()
  init3D()
  focusCountry(380) // start
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
