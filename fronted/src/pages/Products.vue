<template>
  <div class="min-h-screen bg-white">
    <!-- Carousel Section -->
    <section class="relative h-screen w-full">
      <div
        v-for="(item, index) in items"
        :key="item.id"
        class="absolute inset-0 transition-opacity duration-1000"
        :class="{ 'opacity-100': currentIndex === index, 'opacity-0': currentIndex !== index }"
      >
        <img :src="item.image" :alt="item" class="h-full w-full object-cover" />
        <div class="absolute inset-0 flex items-center justify-center">
          <!-- bg-black/30 rasmni qoraytirish -->
        </div>
      </div>
      <!-- Carousel Indicators -->
      <div class="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform space-x-2">
        <button
          v-for="(item, index) in items"
          :key="item.id"
          class="h-3 w-3 rounded-full md:h-4 md:w-4"
          :class="{ 'bg-amber-600': currentIndex === index, 'bg-white/50': currentIndex !== index }"
          @click="goToSlide(index)"
        ></button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted, onUnmounted } from 'vue'

type Project = {
  id: number

  image: string
  href?: string
}

/** Demo ma'lumotlar (rasmlarni o'zingiznikiga almashtiring) */
const items: Project[] = [
  {
    id: 1,
    image: 'images/pr1.png',
  },
  {
    id: 2,
    image: 'images/pr2.png',
  },
  {
    id: 3,
    image: 'images/pr3.png',
  },
  {
    id: 4,
    image: 'images/pr4.png',
  },
  {
    id: 5,
    image: 'images/pr5.png',
  },
  {
    id: 6,
    image: 'images/pr6.png',
  },
  {
    id: 7,
    image: 'images/pr7.png',
  },
  {
    id: 8,
    image: 'images/pr8.png',
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

// Carousel logic
const currentIndex = ref(0)
let carouselInterval: number | null = null

function goToSlide(index: number) {
  currentIndex.value = index
}

function nextSlide() {
  currentIndex.value = (currentIndex.value + 1) % items.length
}

onMounted(() => {
  carouselInterval = setInterval(nextSlide, 3000)
})

onUnmounted(() => {
  if (carouselInterval) {
    clearInterval(carouselInterval)
  }
})
</script>

<style scoped>
* {
  transition: all 0.3s ease;
}
input:focus,
textarea:focus {
  outline: none;
}
</style>
