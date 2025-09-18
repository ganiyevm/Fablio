<template>
  <div class="min-h-screen bg-white">
    <!-- Carousel Section -->
    <section class="relative w-full h-screen">
      <div
        v-for="(item, index) in items"
        :key="item.id"
        class="absolute inset-0 transition-opacity duration-1000"
        :class="{ 'opacity-100': currentIndex === index, 'opacity-0': currentIndex !== index }"
      >
        <img
          :src="item.image"
          :alt="item.title"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black/30 flex items-center justify-center">
         
        </div>
      </div>
      <!-- Carousel Indicators -->
      <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <button
          v-for="(item, index) in items"
          :key="item.id"
          class="w-3 h-3 md:w-4 md:h-4 rounded-full"
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
    image: 'images/P1.webp',
  },
  {
    id: 2,
    image: 'images/P2.webp',
  },
  {
    id: 3,
    image: 'images/P3.webp',
  },
  {
    id: 4,
    image: 'images/HK1.webp',
  },
  {
    id: 5,
    image: 'images/P5.webp',
  },
  {
    id: 6,
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