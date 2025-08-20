<template>
    <section class="bg-neutral-700 text-white py-16 md:py-24">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-tight drop-shadow">
                  Мы экспортируем свою <br> продукцию в 17 стран,
                  обеспечивая<br> высокий уровень партнёрства.
                </h1>
        <div class="grid lg:grid-cols-12 gap-10 items-center min-h-[100vh]">
            
          <!-- KATTA GLOBUS -->
          <div class="lg:col-span-8">
            <div
              class="relative mx-auto aspect-square w-full max-w-[540px] xl:max-w-[900px]  overflow-hidden"
            >
              <canvas ref="canvas" class="w-full h-full block"></canvas>
  
              <!-- gradient biroz o‘qilishi uchun -->
              <div class="pointer-events-none absolute inset-0 bg-gradient-to-br from-neutral-700 to-transparent"></div>
  
              <!-- KATTA MATN: GLOBUS USTIDA -->
              <div class="absolute left-0 top-0 p-6 sm:p-8 md:p-10 max-w-[70%]">
                <p class="text-emerald-400 uppercase tracking-wide mb-3 opacity-90">География экспорта</p>
               
              </div>
  
              <!-- Aktiv mamlakat label + strelka -->
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
  
          <!-- RO‘YXAT (o‘ngda) -->
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
            <!-- <div class="mt-4 text-xs text-white/50">* Globusni drag qilib aylantirish mumkin.</div> -->
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
  