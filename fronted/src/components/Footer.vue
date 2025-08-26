<template>
  <!-- Top CTA strip -->
  <section class="bg-amber-500 py-4 sm:py-6">
    <div class="mx-auto max-w-7xl px-4">
      <div class="flex flex-col items-center justify-between gap-4 md:flex-row">
        <div class="flex items-center text-white">
          <div class="mr-3 rounded-lg bg-gray-900/80 p-3">
            <svg
              class="h-6 w-6 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
              />
            </svg>
          </div>
          <span class="text-base font-semibold sm:text-lg md:text-xl">
            Хотите узнать подробнее о пряжи? Позвоните нам!
          </span>
        </div>

        <a
          href="tel:+998908090550"
          class="inline-flex items-center gap-2 text-lg font-bold text-white hover:opacity-90 md:text-xl"
        >
          <span class="sr-only">Позвонить:</span>
          Телефон&nbsp; +998 90 809-05-50
        </a>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-emerald-950 pt-12 pb-8 text-white">
    <div class="mx-auto max-w-7xl px-4">
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
        <!-- Company Info -->
        <div>
          <div class="mb-4 flex items-center gap-3">
            <!-- Vite public/ -> foydalanishda / bilan boshlang -->
            <img src="../public/logo/logo.png" alt="Rainbow-Teks" class="h-14 w-auto" />
          </div>

          <p class="mb-5 text-gray-400">
            Свяжитесь с нами для консультации, подбора пряжи или оформления заказа. Мы всегда рады
            помочь вам выбрать идеальный цвет и качество!
          </p>

          <div class="flex items-center gap-3">
            <span class="text-sm font-semibold text-gray-300 sm:text-base">Социальные сети:</span>
            <nav class="flex items-center gap-3">
              <a href="#" class="inline-block hover:opacity-90" aria-label="Facebook">
                <img
                  src="../public/socialicons/facebook.png"
                  alt=""
                  class="h-6 w-6 md:h-7 md:w-7"
                />
              </a>
              <a href="#" class="inline-block hover:opacity-90" aria-label="Twitter/X">
                <img src="../public/socialicons/twitter.png" alt="" class="h-6 w-6 md:h-7 md:w-7" />
              </a>
              <a href="#" class="inline-block hover:opacity-90" aria-label="LinkedIn">
                <img
                  src="../public/socialicons/linkedin.png"
                  alt=""
                  class="h-6 w-6 md:h-7 md:w-7"
                />
              </a>
              <a href="#" class="inline-block hover:opacity-90" aria-label="Pinterest">
                <img
                  src="../public/socialicons/pinterest.png"
                  alt=""
                  class="h-6 w-6 md:h-7 md:w-7"
                />
              </a>
            </nav>
          </div>
        </div>

        <!-- Address -->
        <div>
          <div class="mb-4 flex items-start gap-3">
            <div class="rounded-lg bg-amber-500 p-2">
              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div>
              <p class="font-semibold">Адрес: Республика Узбекистан, г. Ташкент</p>
              <p class="text-gray-400">Мирзо-Улугбекский район, ТТЗ Промзона, ТехноПарк</p>
            </div>
          </div>
        </div>

        <!-- Email -->
        <div>
          <div class="mb-4 flex items-start gap-3">
            <div class="rounded-lg bg-amber-500 p-2">
              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <div>
              <p class="font-semibold">Напишите нам</p>
              <a href="mailto:souleymanovamir@gmail.com" class="text-gray-400 hover:text-white">
                Mail: souleymanovamir@gmail.com
              </a>
            </div>
          </div>
        </div>

        <!-- Gallery -->
        <div>
          <div class="grid grid-cols-3 gap-2 sm:gap-3">
            <div
              v-for="(g, i) in gallery"
              :key="i"
              class="group h-24 w-24 overflow-hidden rounded ring-1 ring-white/10 sm:h-24 sm:w-24"
              :style="styleFor(g)"
            >
              <span class="sr-only">Gallery {{ i + 1 }}</span>
              <div
                class="h-full w-full transition-transform duration-300 group-hover:scale-105"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer Links -->
      <div
        class="mt-8 grid grid-cols-2 gap-3 border-t border-gray-800 pt-8 text-sm sm:gap-4 md:grid-cols-5"
      >
        <RouterLink to="/" class="text-gray-400 hover:text-white">Главная</RouterLink>
        <RouterLink to="/about" class="text-gray-400 hover:text-white">О нас</RouterLink>
        <RouterLink to="/production" class="text-gray-400 hover:text-white"
          >Производство</RouterLink
        >
        <RouterLink to="/products" class="text-gray-400 hover:text-white">Продукция</RouterLink>
        <RouterLink to="/contact" class="text-gray-400 hover:text-white">Контакты</RouterLink>
      </div>

      <!-- Copyright -->
      <div
        class="mt-8 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 md:flex-row"
      >
        <p class="text-center text-xs text-gray-400 sm:text-sm md:text-left">
          Copyright © 2025 Rainbow-Teks. All rights reserved.
        </p>
        <div class="flex items-center gap-2">
          <span class="flex h-6 w-10 items-center justify-center rounded bg-blue-600 text-[10px]"
            >VISA</span
          >
          <span class="flex h-6 w-10 items-center justify-center rounded bg-red-600 text-[10px]"
            >MC</span
          >
          <span class="flex h-6 w-10 items-center justify-center rounded bg-blue-500 text-[10px]"
            >DISC</span
          >
          <span class="flex h-6 w-10 items-center justify-center rounded bg-blue-700 text-[10px]"
            >AMEX</span
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Route } from 'lucide-vue-next'
import { computed } from 'vue'

/** Public/ dagi fayllar uchun BASE_URL mos yo'l */
const asset = (p: string) =>
  `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`

/** Galereya rasmlari (public/footer/ ichida) */
const gallery = [
  'footer/footer1.jpg',
  'footer/footer2.jpg',
  'footer/footer3.jpg',
  'footer/footer4.jpg',
  'footer/footer5.jpg',
  'footer/footer6.jpg',
]

/** Inline style generator: cover + center */
const styleFor = (path: string) =>
  ({
    backgroundImage: `url('${asset(path)}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }) as const
</script>
