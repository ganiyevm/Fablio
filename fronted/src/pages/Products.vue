<template>
  <div class="min-h-screen bg-white">
    <!-- Carousel Section -->
    <section class="relative h-screen w-full overflow-hidden">
      <div
        v-for="(item, index) in items"
        :key="item.id"
        class="absolute inset-0 transition-opacity duration-1000 ease-in-out"
        :class="{ 'opacity-100': currentIndex === index, 'opacity-0': currentIndex !== index }"
      >
        <img 
          :src="item.image" 
          :alt="`Carousel slide ${index + 1}`" 
          class="h-full w-full object-cover transition-transform duration-700 hover:scale-105" 
        />
        <div class="absolute inset-0 bg-black/20"></div>
      </div>

      <!-- Navigation Arrows -->
      <button
        @click="prevSlide"
        class="absolute left-2 top-1/2 -translate-y-1/2 transform rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 sm:left-4 md:left-6 lg:p-3"
        aria-label="Previous slide"
      >
        <svg class="h-5 w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        @click="nextSlide"
        class="absolute right-2 top-1/2 -translate-y-1/2 transform rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 sm:right-4 md:right-6 lg:p-3"
        aria-label="Next slide"
      >
        <svg class="h-5 w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <!-- Carousel Indicators -->
      <div class="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform space-x-1.5 sm:bottom-6 sm:space-x-2 md:bottom-8">
        <button
          v-for="(item, index) in items"
          :key="item.id"
          class="h-2 w-2 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50 sm:h-2.5 sm:w-2.5 md:h-3 md:w-3 lg:h-4 lg:w-4"
          :class="{ 
            'bg-amber-500 scale-110': currentIndex === index, 
            'bg-white/50 hover:bg-white/70': currentIndex !== index 
          }"
          @click="goToSlide(index)"
          :aria-label="`Go to slide ${index + 1}`"
        ></button>
      </div>

      <!-- Progress Bar -->
      <div class="absolute bottom-0 left-0 h-1 w-full bg-white/20">
        <div 
          class="h-full bg-amber-500 transition-all duration-300"
          :style="{ width: `${((currentIndex + 1) / items.length) * 100}%` }"
        ></div>
      </div>

      <!-- Slide Counter -->
      <div class="absolute top-4 right-4 rounded-full bg-black/30 px-3 py-1 text-sm text-white backdrop-blur-sm sm:top-6 sm:right-6 md:px-4 md:py-2">
        {{ currentIndex + 1 }} / {{ items.length }}
      </div>
    </section>

    <!-- Thumbnail Navigation (Mobile Hidden, Tablet+ Visible) -->
    <section class="hidden bg-gray-100 px-4 py-6 md:block lg:px-8 lg:py-8">
      <div class="mx-auto max-w-6xl">
        <h3 class="mb-4 text-lg font-semibold text-gray-800 lg:text-xl">Gallery</h3>
        <div class="grid grid-cols-4 gap-3 lg:grid-cols-6 lg:gap-4 xl:grid-cols-8">
          <button
            v-for="(item, index) in items"
            :key="`thumb-${item.id}`"
            @click="goToSlide(index)"
            class="group relative aspect-square overflow-hidden rounded-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-500"
            :class="{ 
              'ring-2 ring-amber-500 scale-105': currentIndex === index,
              'hover:ring-1 hover:ring-gray-300': currentIndex !== index 
            }"
          >
            <img 
              :src="item.image" 
              :alt="`Thumbnail ${index + 1}`"
              class="h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-80"
            />
            <div 
              class="absolute inset-0 bg-black/0 transition-all duration-300"
              :class="{ 
                'bg-black/20': currentIndex === index,
                'group-hover:bg-black/10': currentIndex !== index 
              }"
            ></div>
          </button>
        </div>
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
const isAutoPlaying = ref(true)

function goToSlide(index: number) {
  currentIndex.value = index
  resetAutoPlay()
}

function nextSlide() {
  currentIndex.value = (currentIndex.value + 1) % items.length
}

function prevSlide() {
  currentIndex.value = currentIndex.value === 0 ? items.length - 1 : currentIndex.value - 1
  resetAutoPlay()
}

function startAutoPlay() {
  if (carouselInterval) clearInterval(carouselInterval)
  carouselInterval = setInterval(nextSlide, 4000)
  isAutoPlaying.value = true
}

function stopAutoPlay() {
  if (carouselInterval) {
    clearInterval(carouselInterval)
    carouselInterval = null
  }
  isAutoPlaying.value = false
}

function resetAutoPlay() {
  stopAutoPlay()
  setTimeout(() => {
    startAutoPlay()
  }, 1000)
}

// Touch/Swipe Support
let touchStartX = 0
let touchEndX = 0

function handleTouchStart(e: TouchEvent) {
  touchStartX = e.changedTouches[0].screenX
  stopAutoPlay()
}

function handleTouchEnd(e: TouchEvent) {
  touchEndX = e.changedTouches[0].screenX
  const diff = touchStartX - touchEndX
  
  if (Math.abs(diff) > 50) { // Minimum swipe distance
    if (diff > 0) {
      nextSlide()
    } else {
      prevSlide()
    }
  }
  
  resetAutoPlay()
}

// Keyboard Support
function handleKeydown(e: KeyboardEvent) {
  switch (e.key) {
    case 'ArrowLeft':
      e.preventDefault()
      prevSlide()
      break
    case 'ArrowRight':
      e.preventDefault()
      nextSlide()
      break
    case ' ':
      e.preventDefault()
      if (isAutoPlaying.value) {
        stopAutoPlay()
      } else {
        startAutoPlay()
      }
      break
  }
}

onMounted(() => {
  startAutoPlay()
  
  // Add touch listeners
  const carousel = document.querySelector('section')
  if (carousel) {
    carousel.addEventListener('touchstart', handleTouchStart, { passive: true })
    carousel.addEventListener('touchend', handleTouchEnd, { passive: true })
  }
  
  // Add keyboard listeners
  window.addEventListener('keydown', handleKeydown)
  
  // Pause on mouse hover
  const carouselElement = document.querySelector('section')
  if (carouselElement) {
    carouselElement.addEventListener('mouseenter', stopAutoPlay)
    carouselElement.addEventListener('mouseleave', startAutoPlay)
  }
})

onUnmounted(() => {
  if (carouselInterval) {
    clearInterval(carouselInterval)
  }
  
  // Remove listeners
  const carousel = document.querySelector('section')
  if (carousel) {
    carousel.removeEventListener('touchstart', handleTouchStart)
    carousel.removeEventListener('touchend', handleTouchEnd)
  }
  
  window.removeEventListener('keydown', handleKeydown)
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

/* Custom scrollbar for thumbnail section */
::-webkit-scrollbar {
  height: 6px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}

/* Animation for smooth transitions */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.carousel-enter-active,
.carousel-leave-active {
  transition: all 0.8s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.carousel-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.carousel-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

/* Responsive adjustments for very small screens */
@media (max-width: 320px) {
  .absolute.bottom-4 {
    bottom: 0.75rem;
  }
  
  .absolute.top-4 {
    top: 0.75rem;
  }
}
</style>