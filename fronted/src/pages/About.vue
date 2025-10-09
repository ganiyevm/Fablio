<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section
      class="relative h-64 sm:h-75 bg-cover bg-center bg-no-repeat"
      :style="{ backgroundImage: `url(${'images/onas.webp'})` }"
    >
      <div class="absolute inset-0 bg-black/50"></div>
      <div class="relative container mx-auto flex h-full items-center justify-center px-4">
        <div class="text-center text-white">
          <h1 class="mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold">{{ $t('menu.about') }}</h1>
          <nav class="text-sm">
            <router-link
              to="/"
              class="underline-offset-4 transition-colors hover:text-amber-600 hover:underline"
            >
              {{$t ('menu.home')}}
            </router-link>
            <span class="mx-2">•</span>
            <span class="text-amber-600">{{ $t('menu.about') }}</span>
          </nav>
        </div>
      </div>
    </section>

    <!-- First Content Section -->
    <section class="bg-white py-12 sm:py-16 lg:py-20">
      <div class="container mx-auto grid items-start gap-8 lg:gap-20 lg:grid-cols-2 px-4">
        <!-- Left Image -->
        <div class="aspect-[5/6] overflow-hidden px-2 sm:px-6 order-2 lg:order-1">
          <img src="/images/prq.webp" alt="Textile Machine" class="h-full w-full object-cover" />
        </div>

        <!-- Right Content -->
        <div class="order-1 lg:order-2">
          <h2
            class="mb-4 sm:mb-6 text-2xl sm:text-3xl lg:text-[45px] leading-tight lg:leading-[55px] font-bold text-[#1b1a1a]"
            style="font-family: Sarabun, Arial, Helvetica, sans-serif"
          >
            {{ $t('about.text') }}
          </h2>
          <p class="text-base lg:text-lg leading-relaxed text-[#7f8284] mb-6">
            {{ $t('about.text1') }}
          </p>
          <h3
            class="mb-4 sm:mb-6 text-xl sm:text-2xl lg:text-[35px] leading-tight lg:leading-[55px] font-bold text-[#1b1a1a]"
            style="font-family: Sarabun, Arial, Helvetica, sans-serif"
          >
            {{ $t('about.text2') }}
          </h3>
          <p class="text-base lg:text-lg leading-relaxed text-[#7f8284]">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="inline-block mr-2 h-2.5 w-2.5 text-[#7f8284]"
    viewBox="0 0 12 12"
    fill="currentColor"
  >
    <circle cx="6" cy="6" r="4" />
  </svg> {{ $t('about.text3') }}
 <br>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="inline-block mr-2 h-2.5 w-2.5 text-[#7f8284]"
    viewBox="0 0 12 12"
    fill="currentColor"
  >
    <circle cx="6" cy="6" r="4" />
  </svg> {{ $t('about.text4') }}
 <br>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="inline-block mr-2 h-2.5 w-2.5 text-[#7f8284]"
    viewBox="0 0 12 12"
    fill="currentColor"
  >
    <circle cx="6" cy="6" r="4" />
  </svg> {{ $t('about.text5') }}<br>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="inline-block mr-2 h-2.5 w-2.5 text-[#7f8284]"
    viewBox="0 0 12 12"
    fill="currentColor"
  >
    <circle cx="6" cy="6" r="4" />
  </svg> {{ $t('about.text6') }} <br>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="inline-block mr-2 h-2.5 w-2.5 text-[#7f8284]"
    viewBox="0 0 12 12"
    fill="currentColor"
  >
    <circle cx="6" cy="6" r="4" />
  </svg> {{ $t('about.text7') }} <br>
  <!-- Индивидуальный подход, ответственность за результат и стремление к совершенству делают нас надёжным партнёром для вашего бизнеса. -->
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="inline-block mr-2 h-2.5 w-2.5 text-[#7f8284]"
    viewBox="0 0 12 12"
    fill="currentColor"
  >
    <circle cx="6" cy="6" r="4" />
  </svg> {{ $t('about.text8') }}
 <br>
</p>
        </div>
      </div>

      <!-- Three Step Cards -->
      <div class="container mx-auto mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-24 px-4 md:px-18">
        <div
          v-for="(card, i) in stepCards"
          :key="i"
          class="relative rounded-xl bg-white p-6 shadow-md"
        >
          <!-- Number badge -->
          <div
            class="absolute top-8 sm:top-14 -left-6 sm:-left-12 bg-[#65B530] px-4 sm:px-6 py-2 sm:py-4 text-lg sm:text-2xl font-bold text-white"
          >
            {{ i + 1 }}
          </div>
          <h3 class="mt-4 text-lg sm:text-xl font-semibold text-gray-900">
            {{ card.title }}
          </h3>
          <p class="mt-2 text-sm sm:text-base text-gray-600">{{ card.text }}</p>
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
        {{ $t('about.text9') }}
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
        <div class="mx-auto max-w-3xl translate-x-80 p-30">
          <Transition name="fade" mode="out-in">
            <div
              v-if="reviews[current]"
              :key="current"
              class="relative flex items-center rounded-lg bg-[#65B530] p-20 text-white"
            >
              <div class="h-60">
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
          <h2 class="text-4xl font-bold">{{ $t('about.text10') }}</h2>
          <p class="mt-2 pb-10 text-[16px] text-gray-500 md:w-2/3">
            {{ $t('about.text11') }}
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
import { useI18n } from 'vue-i18n'

const { tm,t } = useI18n()

const reviews = computed(() => tm('reviewss')) 


const current = ref(0)
let interval: ReturnType<typeof setInterval> | null = null


onMounted(() => {
  interval = setInterval(() => {
    if (reviews.value.length > 0) { 
      current.value = (current.value + 1) % reviews.value.length
    }
  }, 5000)
})

onBeforeUnmount(() => {
  if (interval) {
    clearInterval(interval)
    interval = null
  }
})

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

const stepCards = computed(() => tm('stepCards'))

const items = computed(() => tm('projects') as Project[])

const viewer = reactive<{ open: boolean; src: string; alt: string }>({
  open: false,
  src: '',
  alt: '',
})

const itemss = ref<Product[]>([
  { id: 1, image: 'images/pr1.png' },
  { id: 2, image: 'images/pr2.webp' },
  { id: 3, image: 'images/pr3.png' },
  { id: 4, image: 'images/pr4.png' },
  { id: 5, image: 'images/pr5.png' },
  { id: 6, image: 'images/pr6.png' },
  { id: 7, image: 'images/pr7.webp' },
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

/* Responsive breakpoint adjustments */
@media (max-width: 1024px) {
  /* Hero Section */
  .h-64.sm\:h-75 {
    height: 16rem !important;
  }
  h1.text-3xl.sm\:text-4xl.lg\:text-5xl {
    font-size: 2rem !important;
  }
  nav.text-sm {
    font-size: 0.875rem !important;
  }

  /* First Content Section */
  .lg\:grid-cols-2 {
    grid-template-columns: 1fr;
  }
  .aspect-\[4\/4\] {
    aspect-ratio: 16/9 !important;
  }
  h2.text-2xl.sm\:text-3xl.lg\:text-\[45px\] {
    font-size: 1.75rem !important;
    line-height: 2.25rem !important;
  }
  h3.text-xl.sm\:text-2xl.lg\:text-\[35px\] {
    font-size: 1.5rem !important;
    line-height: 2rem !important;
  }
  p.text-base.lg\:text-lg {
    font-size: 0.9375rem !important;
  }
  .px-2.sm\:px-6 {
    padding-left: 1rem !important;
    padding-right: 1rem !important;
  }

  /* Three Step Cards */
  .md\:grid-cols-3 {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
  .md\:px-18 {
    padding-left: 1.5rem !important;
    padding-right: 1.5rem !important;
  }
  .top-8.sm\:top-14 {
    top: 2rem !important;
  }
  .-left-6.sm\:-left-12 {
    left: -1.5rem !important;
  }
  .px-4.sm\:px-6 {
    padding-left: 1rem !important;
    padding-right: 1rem !important;
  }
  .py-2.sm\:py-4 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }
  .text-lg.sm\:text-2xl {
    font-size: 1.125rem !important;
  }

  /* Image Gallery Section */
  h2[style*="font-size: 45px"] {
    font-size: 2.25rem !important;
    line-height: 2.75rem !important;
  }
  .flex.gap-6.overflow-x-auto {
    flex-direction: column;
    align-items: center;
  }
  article.w-106 {
    width: 100% !important;
    max-width: 500px;
  }
  .max-w-3xl.translate-x-80 {
    transform: translateX(0) !important;
    padding: 1rem !important;
    max-width: 90% !important;
  }
  .bg-\[\#65B530\] {
    padding: 1.5rem !important;
  }
  .bg-\[\#65B530\] p.text-\[19px\] {
    font-size: 1rem !important;
  }
  .bg-\[\#65B530\] p.text-\[24px\] {
    font-size: 1.25rem !important;
  }
  .bg-\[\#65B530\] p.text-\[22px\] {
    font-size: 1.125rem !important;
  }
  .max-w-7xl {
    padding: 1.5rem !important;
  }
  .grid.md\:grid-cols-3 {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
}

@media (max-width: 768px) {
  /* Hero Section */
  .h-64.sm\:h-75 {
    height: 14rem !important;
  }
  h1.text-3xl.sm\:text-4xl.lg\:text-5xl {
    font-size: 1.75rem !important;
  }
  nav.text-sm {
    font-size: 0.75rem !important;
  }

  /* First Content Section */
  .py-12.sm\:py-16.lg\:py-20 {
    padding-top: 2rem !important;
    padding-bottom: 2rem !important;
  }
  h2.text-2xl.sm\:text-3xl.lg\:text-\[45px\] {
    font-size: 1.5rem !important;
    line-height: 2rem !important;
  }
  h3.text-xl.sm\:text-2xl.lg\:text-\[35px\] {
    font-size: 1.25rem !important;
    line-height: 1.75rem !important;
  }
  p.text-base.lg\:text-lg {
    font-size: 0.875rem !important;
  }

  /* Three Step Cards */
  .mt-12.sm\:mt-16 {
    margin-top: 2rem !important;
  }
  .md\:grid-cols-3 {
    grid-template-columns: 1fr;
  }
  .p-6 {
    padding: 1rem !important;
  }
  h3.text-lg.sm\:text-xl {
    font-size: 1rem !important;
  }
  p.text-sm.sm\:text-base {
    font-size: 0.875rem !important;
  }

  /* Image Gallery Section */
  h2[style*="font-size: 45px"] {
    font-size: 1.75rem !important;
    line-height: 2.25rem !important;
  }
  .container.py-20 {
    padding-top: 2rem !important;
    padding-bottom: 2rem !important;
  }
  article.w-106 {
    width: 100% !important;
    max-width: 100% !important;
  }
  .fixed.inset-0 .max-w-5xl {
    max-width: 95% !important;
  }
  .h-120 {
    height: auto !important;
    padding-bottom: 2rem !important;
  }
  .bg-\[\#65B530\] {
    padding: 1rem !important;
  }
  .bg-\[\#65B530\] .h-60 {
    height: auto !important;
  }
  .bg-\[\#65B530\] p.text-\[19px\] {
    font-size: 0.875rem !important;
  }
  .bg-\[\#65B530\] p.text-\[24px\] {
    font-size: 1.125rem !important;
  }
  .bg-\[\#65B530\] p.text-\[22px\] {
    font-size: 1rem !important;
  }
  .text-4xl {
    font-size: 1.5rem !important;
  }
  .text-\[16px\] {
    font-size: 0.875rem !important;
  }
  .grid.md\:grid-cols-3 {
    grid-template-columns: 1fr;
  }
  .pt-40 {
    padding-top: 2rem !important;
  }
}

@media (max-width: 480px) {
  /* Hero Section */
  .h-64.sm\:h-75 {
    height: 12rem !important;
  }
  h1.text-3xl.sm\:text-4xl.lg\:text-5xl {
    font-size: 1.5rem !important;
  }
  nav.text-sm {
    font-size: 0.6875rem !important;
  }

  /* First Content Section */
  h2.text-2xl.sm\:text-3xl.lg\:text-\[45px\] {
    font-size: 1.25rem !important;
    line-height: 1.75rem !important;
  }
  h3.text-xl.sm\:text-2xl.lg\:text-\[35px\] {
    font-size: 1.125rem !important;
    line-height: 1.5rem !important;
  }
  p.text-base.lg\:text-lg {
    font-size: 0.8125rem !important;
  }
  .px-4 {
    padding-left: 0.75rem !important;
    padding-right: 0.75rem !important;
  }

  /* Three Step Cards */
  .top-8.sm\:top-14 {
    top: 1.5rem !important;
  }
  .-left-6.sm\:-left-12 {
    left: -1rem !important;
  }
  .px-4.sm\:px-6 {
    padding-left: 0.75rem !important;
    padding-right: 0.75rem !important;
  }
  .py-2.sm\:py-4 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }
  .text-lg.sm\:text-2xl {
    font-size: 1rem !important;
  }

  /* Image Gallery Section */
  h2[style*="font-size: 45px"] {
    font-size: 1.5rem !important;
    line-height: 2rem !important;
  }
  .aspect-\[16\/10\] {
    aspect-ratio: 4/3 !important;
  }
  .bg-\[\#65B530\] {
    padding: 0.75rem !important;
  }
  .bg-\[\#65B530\] p.text-\[19px\] {
    font-size: 0.75rem !important;
  }
  .bg-\[\#65B530\] p.text-\[24px\] {
    font-size: 1rem !important;
  }
  .bg-\[\#65B530\] p.text-\[22px\] {
    font-size: 0.875rem !important;
  }
  .p-4 {
    padding: 0.75rem !important;
  }
}
</style>