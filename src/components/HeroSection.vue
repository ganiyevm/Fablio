<template>
  <section class="relative flex min-h-screen items-center overflow-hidden">
    <!-- Fon -->
    <div
      class="animate-kenburns absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-[2000ms]"
      :style="{ backgroundImage: `url(${currentImage})` }"
    >
      <div class="absolute inset-0 bg-black/40"></div>
    </div>

    <!-- Kontent -->
    <div class="relative z-10 container mx-auto px-4">
      <div class="grid items-center gap-8 lg:grid-cols-12">
        <!-- Chap -->
        <div
          data-obsid="left"
          :class="leftIn ? 'animate-fade-up' : 'translate-y-4 opacity-0'"
          class="text-white lg:col-span-7"
        >
          <p class="mb-4 text-lg opacity-90">The intelligent way to plan</p>
          <h1 class="mb-8 text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
            Our Reputation Is<br />
            Built On Solid Ground
          </h1>
          <button
            class="inline-flex items-center gap-2 rounded-md bg-green-500 px-8 py-3 text-white hover:bg-green-600"
          >
            All Cases
            <ArrowRight class="h-5 w-5" />
          </button>
        </div>

        <!-- O‘ng -->
        <div
          data-obsid="right"
          :class="rightIn ? 'animate-slide-in-right' : 'translate-x-6 opacity-0'"
          class="lg:col-span-5"
        >
          <div class="rounded-lg bg-green-500 p-6">
            <h3 class="mb-4 text-xl font-semibold text-white">The intelligent way to plan.</h3>
            <h2 class="mb-6 text-2xl font-bold text-white">
              Our Reputation Is<br />
              Built On Solid Ground
            </h2>
            <form @submit.prevent="submitForm" class="space-y-4">
              <input
                v-model="form.name"
                placeholder="Your Name"
                class="w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-white/70"
              />
              <input
                v-model="form.email"
                type="email"
                placeholder="Email Address"
                class="w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-white/70"
              />
              <input
                v-model="form.phone"
                type="tel"
                placeholder="Phone Number"
                class="w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-white/70"
              />
              <textarea
                v-model="form.message"
                placeholder="Message"
                rows="3"
                class="w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-white/70"
              ></textarea>
              <button
                type="submit"
                class="inline-flex w-full items-center justify-center gap-2 rounded-md bg-white px-4 py-3 text-green-500 hover:bg-gray-100"
              >
                <Plus class="h-5 w-5" />
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
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        const id = (e.target as HTMLElement).dataset.obsid
        if (e.isIntersecting) {
          if (id === 'left') leftIn.value = true
          if (id === 'right') rightIn.value = true
        }
      })
    },
    { threshold: 0.2 }
  )
  document.querySelectorAll('[data-obsid]').forEach((el) => io.observe(el))
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
  message: '',
})
const submitForm = () => {
  console.log('Form submitted:', form)
}
</script>
