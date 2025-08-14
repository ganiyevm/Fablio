<template>
  <section class="relative min-h-screen flex items-center overflow-hidden">
    <!-- Fon -->
    <div
      class="absolute inset-0 bg-cover bg-center bg-no-repeat animate-kenburns transition-all duration-[2000ms]"
      :style="{ backgroundImage: `url(${currentImage})` }"
    >
      <div class="absolute inset-0 bg-black/40"></div>
    </div>

    <!-- Kontent -->
    <div class="relative z-10 container mx-auto px-4">
      <div class="grid lg:grid-cols-12 gap-8 items-center">
        <!-- Chap -->
        <div data-obsid="left"
             :class="leftIn ? 'animate-fade-up' : 'opacity-0 translate-y-4'"
             class="lg:col-span-7 text-white">
          <p class="text-lg mb-4 opacity-90">The intelligent way to plan</p>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
            Our Reputation Is<br />
            Built On Solid Ground
          </h1>
          <button class="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-md inline-flex items-center gap-2">
            All Cases
            <ArrowRight class="w-5 h-5" />
          </button>
        </div>

        <!-- O‘ng -->
        <div data-obsid="right"
             :class="rightIn ? 'animate-slide-in-right' : 'opacity-0 translate-x-6'"
             class="lg:col-span-5">
          <div class="bg-green-500 p-6 rounded-lg">
            <h3 class="text-white text-xl font-semibold mb-4">
              The intelligent way to plan.
            </h3>
            <h2 class="text-white text-2xl font-bold mb-6">
              Our Reputation Is<br />
              Built On Solid Ground
            </h2>
            <form @submit.prevent="submitForm" class="space-y-4">
              <input v-model="form.name" placeholder="Your Name"
                     class="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/70 px-3 py-2 rounded-md" />
              <input v-model="form.email" type="email" placeholder="Email Address"
                     class="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/70 px-3 py-2 rounded-md" />
              <input v-model="form.phone" type="tel" placeholder="Phone Number"
                     class="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/70 px-3 py-2 rounded-md" />
              <textarea v-model="form.message" placeholder="Message" rows="3"
                        class="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/70 px-3 py-2 rounded-md"></textarea>
              <button type="submit"
                      class="w-full bg-white text-green-500 hover:bg-gray-100 px-4 py-3 rounded-md inline-flex items-center justify-center gap-2">
                <Plus class="w-5 h-5" />
                Submit Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'
import { ArrowRight, Plus } from 'lucide-vue-next'

// Fon rasmlari (public/images ichida)
const images = [
  '/images/hero1.jpg',
  '/images/hero2.jpg',
  // '/images/hero3.jpg'
]
const currentImage = ref(images[0])

// Har 8 sekundda almashadi
let index = 0
onMounted(() => {
  setInterval(() => {
    index = (index + 1) % images.length
    currentImage.value = images[index]
  }, 12000)
})

// Animatsiya uchun scroll observer
const leftIn = ref(false)
const rightIn = ref(false)
onMounted(() => {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      const id = (e.target as HTMLElement).dataset.obsid
      if (e.isIntersecting) {
        if (id === 'left')  leftIn.value  = true
        if (id === 'right') rightIn.value = true
      }
    })
  }, { threshold: 0.2 })
  document.querySelectorAll('[data-obsid]').forEach(el => io.observe(el))
})

// Forma
interface ContactForm {
  name: string
  email: string
  phone: string
  message: string
}
const form = reactive<ContactForm>({
  name: '',
  email: '',
  phone: '',
  message: ''
})
const submitForm = () => {
  console.log('Form submitted:', form)
}
</script>
