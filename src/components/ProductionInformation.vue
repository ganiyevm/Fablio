<template>
  <section class="py-12 md:py-16">
    <div class="container mx-auto px-4">
      <!-- TOP: image + right info panel -->
      <div class="grid gap-8 lg:grid-cols-12">
        <!-- Left big image -->
        <div class="lg:col-span-8">
          <div class="overflow-hidden rounded-xl shadow-sm">
            <img
              :src="mainImage"
              alt="Project image"
              class="h-[320px] w-full object-cover sm:h-[420px] lg:h-[500px]"
            />
          </div>
        </div>

        <!-- Right project info -->
        <aside class="lg:col-span-4">
          <div class="overflow-hidden rounded-xl border border-gray-200 bg-gray-100">
            <div class="bg-green-600 py-4 text-center text-xl font-semibold text-white">
              Project Information
            </div>

            <div class="p-6 text-gray-600">
              <p>{{ intro }}</p>
            </div>

            <div class="px-6 pb-6">
              <dl class="divide-y divide-gray-200 rounded-lg border border-gray-200 bg-white">
                <div
                  v-for="row in infoRows"
                  :key="row.key"
                  class="grid grid-cols-3 gap-4 p-4 sm:grid-cols-4"
                >
                  <dt class="col-span-1 font-semibold text-gray-700">{{ row.label }} :</dt>
                  <dd class="col-span-2 text-gray-700 sm:col-span-3">{{ row.value }}</dd>
                </div>
              </dl>
            </div>
          </div>
        </aside>
      </div>

      <!-- Working Together -->
      <div class="mt-12">
        <h2 class="text-3xl font-extrabold text-gray-900">Working Together For Your Better Life</h2>
        <p class="mt-4 max-w-4xl text-gray-600">
          {{ about }}
        </p>
      </div>

      <!-- Results + 4 features line -->
      <div class="mt-10">
        <h3 class="text-2xl font-extrabold text-gray-900">Results Our Client's Report</h3>
        <p class="mt-3 max-w-5xl text-gray-600">{{ results }}</p>

        <div class="relative mt-10">
          <!-- horizontal line behind numbers -->
          <div class="absolute top-4 right-0 left-0 h-px bg-gray-200"></div>

          <div class="grid gap-8 md:grid-cols-4">
            <div v-for="(f, i) in features" :key="f.title" class="relative">
              <!-- number badge -->
              <div
                class="absolute -top-3 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-gray-900 text-sm font-bold text-white"
              >
                {{ (i + 1).toString().padStart(2, '0') }}
              </div>

              <div class="flex items-center gap-4">
                <div class="flex h-14 w-14 items-center justify-center rounded-md bg-green-600">
                  <component :is="f.icon" class="h-7 w-7 text-white" />
                </div>
                <h4 class="text-xl font-semibold text-gray-900">{{ f.title }}</h4>
              </div>
              <p class="mt-3 text-gray-600">{{ f.desc }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Related Work -->
      <div class="mt-14">
        <h3 class="text-2xl font-extrabold text-gray-900">Related Work</h3>
        <div class="mt-6 grid gap-8 md:grid-cols-3">
          <div
            v-for="card in related"
            :key="card.title"
            class="group overflow-hidden rounded-xl border border-gray-200 bg-white"
          >
            <div class="relative">
              <img :src="card.image" :alt="card.title" class="h-56 w-full object-cover" />
              <div
                class="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/25"
              ></div>
              <div
                class="absolute bottom-4 left-4 flex gap-2 opacity-0 transition-opacity group-hover:opacity-100"
              >
                <button class="rounded-md bg-green-600 px-3 py-2 text-sm text-white">View</button>
                <button class="rounded-md bg-green-700 px-3 py-2 text-sm text-white">
                  Details
                </button>
              </div>
            </div>
            <div class="p-5">
              <div class="text-lg font-semibold text-gray-900">{{ card.title }}</div>
              <p class="mt-2 line-clamp-2 text-gray-600">{{ card.excerpt }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

/* ======= Props (xohlasangiz tashqaridan uzatasiz) ======= */
const img = (p) => {
  if (!p) return ''
  if (p.startsWith('http://') || p.startsWith('https://') || p.startsWith('/')) return p
  // p masalan: 'silk.jpg' yoki 'portfolio/silk.jpg'
  return new URL(`../assets/${p}`, import.meta.url).href
}

/* Props */
const props = defineProps({
  // Agar public/images dan ishlatmoqchi bo‘lsangiz: default: '/images/silk.jpg'
  // Agar assets dan ishlatmoqchi bo‘lsangiz: default: 'silk.jpg'  (va faylni src/assets ga qo‘ying)
  mainImage: { type: String, default: 'silc.jpg' },

  intro: {
    type: String,
    default:
      'A scelerisque purus semper eget. Placerat in egestas erat imperdiet. Sit facilisis magna.',
  },
  project: { type: String, default: 'Silk Clothes' },
  category: { type: String, default: 'Silks, Linen' },
  clients: { type: String, default: 'Alex Sam Martin' },
  date: { type: String, default: 'Apr 17 2021' },
  status: { type: String, default: 'Completed' },
  about: {
    type: String,
    default:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  results: {
    type: String,
    default:
      'Wecusandae debitis facere quidem animi placeat maxime cuuntur at voluptati uod numuam pariatur libero laborum laudantium non...',
  },
  related: {
    type: Array,
    default: () => [
      {
        title: 'Silk Fabric',
        image: 'silc.jpg',
        excerpt:
          'A scelerisque purus semper eget. Placerat in egestas erat imperdiet. Sit facilisis magna.',
      },
      {
        title: 'Linen Fabric',
        image: 'related2.jpg',
        excerpt: 'Varius amet mattis vulputate enim nulla. Viverra maecenas accumsan facilisis.',
      },
      {
        title: 'Georgette Fabric',
        image: 'related3.jpg',
        excerpt: 'Varius sit amet mattis vulputate enim nulla. Viverra maecenas lacus vel...',
      },
    ],
  },
})

/* ======= Info rows (o‘ng panel) ======= */
const infoRows = computed(() => [
  { key: 'project', label: 'Project', value: props.project },
  { key: 'category', label: 'Category', value: props.category },
  { key: 'clients', label: 'Clients', value: props.clients },
  { key: 'date', label: 'Date', value: props.date },
  { key: 'status', label: 'Status', value: props.status },
])

/* ======= Oddiy inline ikonlar ======= */
const IconSpool = {
  name: 'IconSpool',
  template:
    '<svg viewBox="0 0 24 24" fill="none" class="w-full h-full"><rect x="5" y="3" width="14" height="4" rx="2" fill="currentColor"/><rect x="5" y="17" width="14" height="4" rx="2" fill="currentColor"/><rect x="7" y="7" width="10" height="10" rx="2" stroke="currentColor" stroke-width="2"/></svg>',
}
const IconPattern = {
  name: 'IconPattern',
  template:
    '<svg viewBox="0 0 24 24" fill="none" class="w-full h-full"><path d="M4 4h16v16H4z" stroke="currentColor" stroke-width="2"/><path d="M4 9h16M9 4v16" stroke="currentColor" stroke-width="2" stroke-dasharray="2 3"/></svg>',
}
const IconWeave = {
  name: 'IconWeave',
  template:
    '<svg viewBox="0 0 24 24" fill="none" class="w-full h-full"><path d="M3 8h18M3 12h18M3 16h18" stroke="currentColor" stroke-width="2"/><path d="M8 3v18M12 3v18M16 3v18" stroke="currentColor" stroke-width="2"/></svg>',
}
const IconDye = {
  name: 'IconDye',
  template:
    '<svg viewBox="0 0 24 24" fill="none" class="w-full h-full"><path d="M12 3c4 5 6 7 6 10a6 6 0 11-12 0c0-3 2-5 6-10z" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="15" r="2" fill="currentColor"/></svg>',
}

const features = [
  {
    title: 'Fabric Treatment',
    desc: 'We do execute stabilization including reweaving & stitch repair.',
    icon: IconSpool,
  },
  {
    title: 'Artistic Direction',
    desc: 'Assist collection strategies, storage, application and pest.',
    icon: IconPattern,
  },
  {
    title: 'Satin Weaving',
    desc: 'Continuous weft yarn, with as few interruptions of warp as possible.',
    icon: IconWeave,
  },
  {
    title: 'Fabric Dyeing',
    desc: 'Transfer dyes from aqueous solution onto the fiber surface.',
    icon: IconDye,
  },
]
</script>

<style scoped>
/* Agar line-clamp plugin yo‘q bo‘lsa */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
