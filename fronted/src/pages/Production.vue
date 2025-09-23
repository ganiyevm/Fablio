<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section
      class="relative h-60 bg-cover bg-center bg-no-repeat sm:h-64 md:h-72 lg:h-75"
      :style="{ backgroundImage: `url(${'images/HK1.webp'})` }"
    >
      <div class="absolute inset-0 bg-black/50"></div>
      <div class="relative container mx-auto flex h-full items-center justify-center px-3 sm:px-4">
        <div class="text-center text-white">
          <h1 class="mb-3 text-2xl font-bold sm:text-3xl sm:mb-4 md:text-4xl lg:text-5xl">Производство</h1>
          <nav class="text-xs sm:text-sm">
            <router-link
              to="/"
              class="underline-offset-4 transition-colors hover:text-amber-600 hover:underline"
            >
              Главная
            </router-link>
            <span class="mx-1 sm:mx-2">•</span>
            <span class="text-amber-600">Производство</span>
          </nav>
        </div>
      </div>
    </section>
    
    <section class="bg-white py-8 sm:py-10 md:py-12 lg:py-20">
      <div class="container mx-auto px-3 sm:px-4">
        <!-- Grid -->
        <div class="grid gap-6 sm:grid-cols-2 sm:gap-7 md:gap-8 lg:grid-cols-3 lg:gap-10">
          <!-- Card -->
          <article
            v-for="p in items"
            :key="p.id"
            class="group overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-lg sm:rounded-xl"
          >
            <!-- Image with hover overlay -->
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
                <div class="pointer-events-auto flex gap-2 sm:gap-3">
                  <!-- zoom / preview -->
                  <button
                    @click.prevent="openViewer(p.image, p.title)"
                    class="rounded bg-amber-500 p-2 shadow-md ring-1 ring-black/10 hover:bg-emerald-950 sm:rounded-md sm:p-3"
                    aria-label="Preview image"
                  >
                    <!-- magnifier icon -->
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4 sm:h-5 sm:w-5"
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

                  <!-- link to details (optional) -->
                  <RouterLink
                    :to="{ name: 'ProductionInformation', params: { id: p.id } }"
                    @click.stop
                    class="rounded bg-amber-500 p-2 shadow-md ring-1 ring-black/10 hover:bg-emerald-950 sm:rounded-md sm:p-3"
                    aria-label="Open details"
                  >
                    <!-- link icon -->
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4 sm:h-5 sm:w-5"
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

            <!-- Text -->
            <div class="p-4 sm:p-5 md:p-6">
              <h3 class="text-lg font-semibold text-gray-900 sm:text-xl">
                {{ p.title }}
              </h3>
              <p class="mt-1 text-sm text-gray-600 sm:mt-2 sm:text-base">
                {{ p.excerpt }}
              </p>
            </div>
          </article>
        </div>
      </div>

      <!-- Very small image viewer -->
      <Transition name="fade">
        <div
          v-if="viewer.open"
          class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-3 backdrop-blur-[1px] sm:p-4"
          @keydown.esc.window="closeViewer"
          @click.self="closeViewer"
        >
          <figure class="relative w-full max-w-xs sm:max-w-lg md:max-w-3xl lg:max-w-5xl">
            <img :src="viewer.src" :alt="viewer.alt" class="h-auto w-full rounded-md shadow-2xl sm:rounded-lg" />
            <button
              @click="closeViewer"
              class="absolute -top-2 -right-2 rounded-full bg-white p-1.5 shadow ring-1 ring-black/10 sm:-top-3 sm:-right-3 sm:p-2"
              aria-label="Close preview"
              title="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 sm:h-5 sm:w-5"
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
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue'
import { RouterLink } from 'vue-router'

type Project = {
  id: number
  title: string
  excerpt: string
  image: string
  href?: string
}

/** Demo ma'lumotlar (rasmlarni o'zingiznikiga almashtiring) */
const items: Project[] = [
  {
    id: 1,
    title: 'Перемотка',
    excerpt: 'Точная подготовка пряжи к безупречному окрашиванию.',
    image: 'images/P1.webp',
  },
  {
    id: 2,
    title: 'Крашение',
    excerpt: 'Глубокие и стойкие цвета, рождающиеся в наших красильных цехах.',
    image: 'images/P2.webp',
  },
  {
    id: 3,
    title: 'Сушка',
    excerpt: 'Мягкость и прочность сохраняются при бережной сушке.',
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

interface ImportMeta {
  env: {
    BASE_URL: string
  }
}

const heroBackgroundImage = `https://themetechmount.com/wordpress/fablio/demo4/wp-content/uploads/sites/15/2022/05/page-titlebar.jpg`
const footer1BackgroundImage = `footer/footer1.jpg`

const bgStyle = computed(() => ({ backgroundImage: `url('${heroBackgroundImage}')` }))
const footer1 = computed(() => ({ backgroundImage: `url('${footer1BackgroundImage}')` }))
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