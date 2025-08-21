<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section
      class="relative h-75 bg-cover bg-center bg-no-repeat"
      :style="bgStyle"
    >
      <div class="absolute inset-0 bg-black/50"></div>
      <div class="relative container mx-auto px-4 h-full flex items-center justify-center">
        <div class="text-center text-white">
          <h1 class="text-5xl font-bold mb-4">Производство</h1>
          <nav class="text-sm">
  <router-link
    to="/"
    class="hover:text-amber-600 transition-colors underline-offset-4 hover:underline"
  >
  Главная
  </router-link>
  <span class="mx-2">•</span>
  <span class="text-amber-600">Производство</span>
</nav>
        </div>
      </div>
    </section>
    <section class="bg-white py-12 md:py-20">
    <div class="container mx-auto px-4">
      <!-- Grid -->
      <div class="grid gap-8 md:gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <!-- Card -->
        <article
          v-for="p in items"
          :key="p.id"
          class="group rounded-xl overflow-hidden bg-white ring-1 ring-black/5 shadow-sm hover:shadow-lg transition-shadow"
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
              class="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300"
            />
            <div
              class="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <div class="pointer-events-auto flex gap-3">
                <!-- zoom / preview -->
                <button
                  @click.prevent="openViewer(p.image, p.title)"
                  class="rounded-md bg-amber-500 p-3 shadow-md ring-1 ring-black/10 hover:bg-emerald-950"
                  aria-label="Preview image"
                >
                  <!-- magnifier icon -->
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M21 21l-4.35-4.35M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z" />
                  </svg>
                </button>

                <!-- link to details (optional) -->
                <RouterLink
  :to=" { name: 'ProductionInformation' }"
  @click.stop
  class="rounded-md bg-amber-500 p-3 shadow-md ring-1 ring-black/10 hover:bg-emerald-950"
  aria-label="Open details"
>
  <!-- link icon -->
  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.06 7.06a5.5 5.5 0 0 1 7.78 7.78l-2.12 2.12a5.5 5.5 0 0 1-7.78 0 1 1 0 1 1 1.42-1.42 3.5 3.5 0 0 0 4.95 0l2.12-2.12a3.5 3.5 0 1 0-4.95-4.95 1 1 0 0 1-1.42-1.41z"/>
    <path d="M10.94 16.94a5.5 5.5 0 0 1-7.78-7.78l2.12-2.12a5.5 5.5 0 0 1 7.78 0 1 1 0 1 1-1.42 1.42 3.5 3.5 0 0 0-4.95 0L4.57 10.6a3.5 3.5 0 1 0 4.95 4.95 1 1 0 1 1 1.42 1.41z"/>
  </svg>
</RouterLink>
              </div>
            </div>
          </div>

          <!-- Text -->
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900">
              {{ p.title }}
            </h3>
            <p class="mt-2 text-gray-600">
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
        class="fixed inset-0 z-50 bg-black/70 backdrop-blur-[1px] flex items-center justify-center p-4"
        @keydown.esc.window="closeViewer"
        @click.self="closeViewer"
      >
        <figure class="relative max-w-5xl w-full">
          <img :src="viewer.src" :alt="viewer.alt" class="w-full h-auto rounded-lg shadow-2xl" />
          <button
            @click="closeViewer"
            class="absolute -top-3 -right-3 rounded-full bg-white p-2 shadow ring-1 ring-black/10"
            aria-label="Close preview"
            title="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.225 4.811 4.811 6.225 10.586 12l-5.775 5.775 1.414 1.414L12 13.414l5.775 5.775 1.414-1.414L13.414 12l5.775-5.775-1.414-1.414L12 10.586z"/>
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
    title: 'Silk Fabric',
    excerpt: 'A scelerisque purus semper eget. Placerat in egestas erat imperdiet.',
    image: 'https://themetechmount.com/wordpress/fablio/demo4/wp-content/uploads/sites/15/2021/03/1.jpg'
  },
  {
    id: 2,
    title: 'Cotton Fabric',
    excerpt: 'Molestie a iaculis at erat. Varius vel pharetra vel turpis.',
    image: 'https://themetechmount.com/wordpress/fablio/demo4/wp-content/uploads/sites/15/2021/03/3.jpg'
  },
  {
    id: 3,
    title: 'Linen Fabric',
    excerpt: 'Varius sit amet mattis vulputate enim nulla.',
    image: 'https://themetechmount.com/wordpress/fablio/demo4/wp-content/uploads/sites/15/2021/02/9.jpg'
  },
  {
    id: 4,
    title: 'Wool Fabric',
    excerpt: 'Neque convallis a cras semper auctor neque tempus.',
    image: 'https://themetechmount.com/wordpress/fablio/demo4/wp-content/uploads/sites/15/2021/02/5.jpg'
  },
  {
    id: 5,
    title: 'Leather Material',
    excerpt: 'Augue eget arcu dictum varius duis at consectetur.',
    image: 'https://themetechmount.com/wordpress/fablio/demo4/wp-content/uploads/sites/15/2021/02/img-04.jpg'
  },
  {
    id: 6,
    title: 'Georgette Fabric',
    excerpt: 'Viverra maecenas accumsan lacus vel facilisis.',
    image: 'https://themetechmount.com/wordpress/fablio/demo4/wp-content/uploads/sites/15/2021/02/10.jpg'
  }
]

const viewer = reactive<{ open: boolean; src: string; alt: string }>({
  open: false,
  src: '',
  alt: ''
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
    BASE_URL: string;
  }
}

const heroBackgroundImage = `https://themetechmount.com/wordpress/fablio/demo4/wp-content/uploads/sites/15/2022/05/page-titlebar.jpg`
const footer1BackgroundImage = `footer/footer1.jpg`

const bgStyle = computed(() => ({ backgroundImage: `url('${heroBackgroundImage}')` }))
const footer1 = computed(() => ({ backgroundImage: `url('${footer1BackgroundImage}')` }))




</script>

<style scoped>
.container { max-width: 1200px; }
* { transition: all 0.3s ease; }
input:focus, textarea:focus { outline: none; }
.hover-lift:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
</style>
