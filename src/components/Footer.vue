<template>
  <!-- Top CTA strip -->
  <section class="bg-amber-500 py-4 sm:py-6">
    <div class="mx-auto max-w-7xl px-4">
      <div class="flex flex-col md:flex-row items-center justify-between gap-4">
        <div class="flex items-center text-white">
          <div class="bg-gray-900/80 p-3 rounded-lg mr-3">
            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
            </svg>
          </div>
          <span class="text-base sm:text-lg md:text-xl font-semibold">
            Хотите узнать подробнее о пряжи? Позвоните нам!
          </span>
        </div>

        <a href="tel:+998908090550"
           class="inline-flex items-center gap-2 text-white text-lg md:text-xl font-bold hover:opacity-90">
          <span class="sr-only">Позвонить:</span>
          Телефон&nbsp; +998 90 809-05-50
        </a>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-gray-900 text-white pt-12 pb-8">
    <div class="mx-auto max-w-7xl px-4">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <!-- Company Info -->
        <div>
          <div class="flex items-center gap-3 mb-4">
            <!-- Vite public/ -> foydalanishda / bilan boshlang -->
            <img src="../public/logo/logo.png" alt="Rainbow-Teks" class="h-14 w-auto" />
            
          </div>

          <p class="text-gray-400 mb-5">
            Свяжитесь с нами для консультации, подбора пряжи или оформления заказа.
            Мы всегда рады помочь вам выбрать идеальный цвет и качество!
          </p>

          <div class="flex items-center gap-3">
            <span class="text-sm sm:text-base font-semibold text-gray-300">Социальные сети:</span>
            <nav class="flex items-center gap-3">
              <a href="#" class="inline-block hover:opacity-90" aria-label="Facebook">
                <img src="../public/socialicons/facebook.png" alt="" class="h-6 w-6 md:h-7 md:w-7" />
              </a>
              <a href="#" class="inline-block hover:opacity-90" aria-label="Twitter/X">
                <img src="../public/socialicons/twitter.png" alt="" class="h-6 w-6 md:h-7 md:w-7" />
              </a>
              <a href="#" class="inline-block hover:opacity-90" aria-label="LinkedIn">
                <img src="../public/socialicons/linkedin.png" alt="" class="h-6 w-6 md:h-7 md:w-7" />
              </a>
              <a href="#" class="inline-block hover:opacity-90" aria-label="Pinterest">
                <img src="../public/socialicons/pinterest.png" alt="" class="h-6 w-6 md:h-7 md:w-7" />
              </a>
            </nav>
          </div>
        </div>

        <!-- Address -->
        <div>
          <div class="flex items-start gap-3 mb-4">
            <div class="bg-amber-500 p-2 rounded-lg">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
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
          <div class="flex items-start gap-3 mb-4">
            <div class="bg-amber-500 p-2 rounded-lg">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
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
              class="w-24 h-24 sm:w-24 sm:h-24 rounded overflow-hidden ring-1 ring-white/10 group"
              :style="styleFor(g)"
            >
              <span class="sr-only">Gallery {{ i + 1 }}</span>
              <div class="w-full h-full transition-transform duration-300 group-hover:scale-105"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer Links -->
      <div class="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4 mt-8 pt-8 border-t border-gray-800 text-sm">
        <a href="#" class="text-gray-400 hover:text-white">Главная</a>
        <a href="#" class="text-gray-400 hover:text-white">О нас</a>
        <a href="#" class="text-gray-400 hover:text-white">Производство</a>
        <a href="#" class="text-gray-400 hover:text-white">Продукция</a>
        <a href="#" class="text-gray-400 hover:text-white">Контакты</a>
      </div>

      <!-- Copyright -->
      <div class="flex flex-col md:flex-row justify-between items-center gap-4 mt-8 pt-8 border-t border-gray-800">
        <p class="text-gray-400 text-xs sm:text-sm text-center md:text-left">
          Copyright © 2025 Rainbow-Teks. All rights reserved.
        </p>
        <div class="flex items-center gap-2">
          <span class="w-10 h-6 bg-blue-600 rounded text-[10px] flex items-center justify-center">VISA</span>
          <span class="w-10 h-6 bg-red-600 rounded text-[10px] flex items-center justify-center">MC</span>
          <span class="w-10 h-6 bg-blue-500 rounded text-[10px] flex items-center justify-center">DISC</span>
          <span class="w-10 h-6 bg-blue-700 rounded text-[10px] flex items-center justify-center">AMEX</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
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
  } as const)
</script>
