<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section
      class="relative h-75 bg-cover bg-center bg-no-repeat"
      :style="{ backgroundImage: `url(${'images/HK1.webp'})` }"
    >
      <div class="absolute inset-0 bg-black/50"></div>
      <div class="relative container mx-auto flex h-full items-center justify-center px-4">
        <div class="text-center text-white">
          <h1 class="mb-4 text-5xl font-bold">О компании</h1>
          <nav class="text-sm">
            <router-link
              to="/"
              class="underline-offset-4 transition-colors hover:text-amber-600 hover:underline"
            >
              Главная
            </router-link>
            <span class="mx-2">•</span>
            <span class="text-amber-600">О компании</span>
          </nav>
        </div>
      </div>
    </section>

    <!-- First Content Section -->
    <section class="bg-white py-20">
      <div class="container mx-auto grid items-start gap-20 lg:grid-cols-2">
        <!-- Left Image -->
        <div class="aspect-[4/4] overflow-hidden px-6">
          <img src="/images/prq.webp" alt="Textile Machine" class="h-full w-full object-cover" />
        </div>

        <!-- Right Content -->
        <div>
          <h2
            class="mb-6 text-[45px] leading-[55px] font-bold text-[#1b1a1a]"
            style="font-family: Sarabun, Arial, Helvetica, sans-serif"
          >
            Яркие решения для текстиля
          </h2>
          <p class="text-lg leading-relaxed text-[#7f8284]">
            ООО «RAINBOW-TEKS» более 3 лет успешно работает как на внутреннем рынке, так и за его
            пределами. Мы предлагаем окрашенную пряжу из 100% хлопка, вискозы, акрила и поли-коттона
            любых номеров, сочетая стабильное качество с современным подходом.
          </p>
        </div>
      </div>

      <!-- Three Step Cards -->
      <div class="container mx-auto mt-16 grid grid-cols-1 gap-24 px-18 md:grid-cols-3">
        <div
          v-for="(card, i) in stepCards"
          :key="i"
          class="relative rounded-xl bg-white p-6 shadow-md"
        >
          <!-- Number badge -->
          <div
            class="absolute top-14 -left-12 bg-[#65B530] px-6 py-4 text-2xl font-bold text-white"
          >
            {{ i + 1 }}
          </div>
          <h3 class="mt-4 text-xl font-semibold text-gray-900">
            {{ card.title }}
          </h3>
          <p class="mt-2 text-gray-600">{{ card.text }}</p>
        </div>
      </div>
    </section>

    <!-- Image Gallery Section -->
    <section class="bg-gray-100 py-12 md:py-20">
      <h2
        style="
          font-family: 'Sarabun', Arial, Helvetica, sans-serif;
          font-weight: 800;
          font-size: 45px;
          line-height: 55px;
          color: #1b1a1a;
          text-align: center;
        "
      >
        Наши производственные цеха
      </h2>
      <div class="container mx-auto px-4 py-20">
        <div class="flex gap-6 overflow-x-auto pb-4 lg:grid-cols-3">
          <article
            v-for="p in items"
            :key="p.id"
            class="group w-106 flex-none overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-lg"
          >
            <div class="relative aspect-[16/10] overflow-hidden">
              <img
                class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                :src="p.image"
                :alt="p.title"
                loading="lazy"
                decoding="async"
              />
              <div
                class="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/50"
              />
              <div
                class="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              >
                <div class="pointer-events-auto flex gap-3">
                  <button
                    @click.prevent="openViewer(p.image, p.title)"
                    class="rounded-md bg-amber-500 p-3 shadow-md ring-1 ring-black/10 hover:bg-emerald-950"
                    aria-label="Preview image"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-4.35-4.35M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"
                      />
                    </svg>
                  </button>
                  <RouterLink
                    :to="{ name: 'ProductionInformation', params: { id: p.id } }"
                    @click.stop
                    class="rounded-md bg-amber-500 p-3 shadow-md ring-1 ring-black/10 hover:bg-emerald-950"
                    aria-label="Open details"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path
                        d="M13.06 7.06a5.5 5.5 0 0 1 7.78 7.78l-2.12 2.12a5.5 5.5 0 0 1-7.78 0 1 1 0 1 1 1.42-1.42 3.5 3.5 0 0 0 4.95 0l2.12-2.12a3.5 3.5 0 1 0-4.95-4.95 1 1 0 0 1-1.42-1.41z"
                      />
                      <path
                        d="M10.94 16.94a5.5 5.5 0 0 1-7.78-7.78l2.12-2.12a5.5 5.5 0 0 1 7.78 0 1 1 0 1 1-1.42 1.42 3.5 3.5 0 0 0-4.95 0L4.57 10.6a3.5 3.5 0 1 0 4.95 4.95 1 1 0 1 1 1.42 1.41z"
                      />
                    </svg>
                  </RouterLink>
                </div>
              </div>
            </div>
            <RouterLink :to="{ name: 'ProductionInformation', params: { id: p.id } }">
              <div class="p-6">
                <div class="flex items-center justify-between">
                  <h3 class="text-xl font-semibold text-gray-900">
                    {{ p.title }}
                  </h3>
                  <div
                    class="inline-flex h-5 w-5 text-amber-500 transition-transform group-hover:translate-x-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M7 17L17 7M7 7h10v10" />
                    </svg>
                  </div>
                </div>
                <p class="mt-2 text-gray-600">{{ p.excerpt }}</p>
              </div>
            </RouterLink>
          </article>
        </div>
      </div>

      <!-- Image Viewer -->
      <Transition name="fade">
        <div
          v-if="viewer.open"
          class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-[1px]"
          @keydown.esc.window="closeViewer"
          @click.self="closeViewer"
        >
          <figure class="relative w-full max-w-5xl">
            <img :src="viewer.src" :alt="viewer.alt" class="h-auto w-full rounded-lg shadow-2xl" />
            <button
              @click="closeViewer"
              class="absolute -top-3 -right-3 rounded-full bg-white p-2 shadow ring-1 ring-black/10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M6.225 4.811 4.811 6.225 10.586 12l-5.775 5.775 1.414 1.414L12 13.414l5.775 5.775 1.414-1.414L13.414 12l5.775-5.775-1.414-1.414L12 10.586z"
                />
              </svg>
            </button>
          </figure>
        </div>
      </Transition>

      <div
    class="relative h-120 bg-cover bg-center bg-no-repeat"
    :style="{ backgroundImage: `url(${'images/DSC09302.webp'})` }"
  >
    <div class="mx-auto max-w-4xl translate-x-80 p-20">
      <Transition name="fade" mode="out-in">
        <div
          v-if="reviews[current]"
          :key="current"
          class="relative flex items-center rounded-lg bg-green-500 p-20 text-white"
        >
          <div class="h-80">
            <p class="text-[19px] italic">“{{ reviews[current].text }}”</p>
            <p class="mt-12 text-[24px] font-semibold">{{ reviews[current].name }}</p>
            <p class="text-[22px]">{{ reviews[current].city }}</p>
            <div class="flex text-yellow-300">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>☆</span>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </div>

      <!-- News and Articles Section -->
      <div class="mx-auto max-w-7xl p-6 pt-40">
        <div class="mb-6 flex flex-col justify-between md:flex-row">
          <h2 class="text-4xl font-bold">Продукция, которая говорит сама за себя</h2>
          <p class="mt-2 pb-10 text-[16px] text-gray-500 md:w-2/3">
            Мы специализируемся на окрашивании пряжи из натурального 100% хлопка. Каждая нить
            сохраняет прочность и мягкость, а цвет — насыщенность и стойкость.
          </p>
        </div>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div class="rounded-lg bg-white p-4 shadow-md">
            <div class="relative h-full overflow-hidden rounded-md">
              <img
                :src="currentImage(0)"
                alt="Textile Machine"
                class="h-full w-full object-cover transition-opacity duration-500"
              />
            </div>
          </div>
          <div class="rounded-lg bg-white p-4 shadow-md">
            <div class="relative h-full overflow-hidden rounded-md">
              <img
                :src="currentImage(1)"
                alt="Textile Machine"
                class="h-full w-full object-cover transition-opacity duration-500"
              />
            </div>
          </div>
          <div class="rounded-lg bg-white p-4 shadow-md">
            <div class="relative h-full overflow-hidden rounded-md">
              <img
                :src="currentImage(2)"
                alt="Textile Machine"
                class="h-full w-full object-cover transition-opacity duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref, onMounted, onUnmounted, onBeforeUnmount } from 'vue'

import { RouterLink } from 'vue-router'
const reviews = [
  {
    name: "Анна",
    city:"Москва",
    text: "Работаем с RAINBOW-TEKS уже второй год — всегда получаем стабильное качество и быструю поставку.",
  },
  {
    name: "Ойбек",
    city:"Ташкент",
    text: "Очень нравится широкий выбор пряжи и внимательное отношение к клиентам. Заказы приходят вовремя.",
  },
  {
    name: "Мария",
    city:"Киев",
    text: "Цветовая палитра действительно впечатляет! Легко подбирать нужные оттенки для коллекций.",
  },
  {
    name: "Давид",
    city:"Стамбул",
    text: "Компания зарекомендовала себя как надежный партнёр: чёткие сроки, качественный продукт и открытость в общении.",
  },
];

const current = ref(0);
let interval: ReturnType<typeof setInterval> | null = null;



onMounted(() => {
  interval = setInterval(() => {
    current.value = (current.value + 1) % reviews.length;
  }, 5000); // 3 sekundda o‘zgaradi
});

onBeforeUnmount(() => {
  clearInterval(interval!);
});

type Project = {
  id: number
  title: string
  excerpt: string
  image: string
  href?: string
}

type Product = {
  id: number
  image: string
  href?: string
}

/** Demo ma'lumotlar (rasmlarni o'zingiznikiga almashtiring) */
const stepCards = [
  {
    title: 'Надёжное качество',
    text: 'Мы контролируем каждый этап производства, чтобы гарантировать стабильный результат.',
  },
  {
    title: 'Широкий ассортимент',
    text: 'Предлагаем пряжу любых номеров из хлопка, вискозы, акрила и поли-коттона.',
  },
  {
    title: 'Для рынка и экспорта',
    text: 'Работаем более 3 лет, поставляя продукцию как внутри страны, так и за её пределами.',
  },
]

const items: Project[] = [
  {
    id: 1,
    title: 'Надёжное качество',
    excerpt: 'Мы контролируем каждый этап производства, чтобы гарантировать стабильный результат.',
    image: 'images/P1.webp',
  },
  {
    id: 2,
    title: 'Широкий ассортимент',
    excerpt: 'Предлагаем пряжу любых номеров из хлопка, вискозы, акрила и поли-коттона.',
    image: 'images/P2.webp',
  },
  {
    id: 3,
    title: 'Для рынка и экспорта',
    excerpt: 'Работаем более 3 лет, поставляя продукцию как внутри страны, так и за её пределами.',
    image: 'images/P3.webp',
  },
  {
    id: 4,
    title: 'Перемотка на картонные конусы',
    excerpt: 'Удобный формат для вашего производства.',
    image: 'images/HK1.webp',
  },
  {
    id: 5,
    title: 'Лаборатория',
    excerpt: 'Гарантия идеального оттенка и качества каждой партии.',
    image: 'images/P5.webp',
  },
  {
    id: 6,
    title: 'Упаковка',
    excerpt: 'Надежная защита пряжи при хранении и транспортировке.',
    image: 'images/P6.jpg',
  },
]

const viewer = reactive<{ open: boolean; src: string; alt: string }>({
  open: false,
  src: '',
  alt: '',
})

const itemss = ref<Product[]>([
  { id: 1, image: 'images/pr1.png' },
  { id: 2, image: 'images/pr2.png' },
  { id: 3, image: 'images/pr3.png' },
  { id: 4, image: 'images/pr4.png' },
  { id: 5, image: 'images/pr5.png' },
  { id: 6, image: 'images/pr6.png' },
  { id: 7, image: 'images/pr7.png' },
  // { id: 8, image: 'images/pr8.png' },
])

const currentIndices = ref([0, 1, 2])
let intervalId: ReturnType<typeof setInterval> | null = null;


onMounted(() => {
  intervalId = setInterval(() => {
    currentIndices.value = currentIndices.value.map((index, i) => (index + 1) % itemss.value.length)
  }, 3000)
})

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
})

const currentImage = (index: number) => {
  return itemss.value[currentIndices.value[index]].image
}

const heroBackgroundImage = `https://themetechmount.com/wordpress/fablio/demo4/wp-content/uploads/sites/15/2022/05/page-titlebar.jpg`
const footer1BackgroundImage = `footer/footer1.jpg`

const bgStyle = computed(() => ({ backgroundImage: `url(${heroBackgroundImage})` }))
const footer1Style = computed(() => ({ backgroundImage: `url(${footer1BackgroundImage})` }))

function openViewer(src: string, alt: string) {
  viewer.open = true
  viewer.src = src
  viewer.alt = alt
}

function closeViewer() {
  viewer.open = false
  viewer.src = ''
  viewer.alt = ''
}
</script>

<style scoped>
.container {
  max-width: 1200px;
}
* {
  transition: all 0.3s ease;
}
input:focus,
textarea:focus {
  outline: none;
}
.hover-lift:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
</style>
