
<template>
  <section class="bg-amber-500 py-3 sm:py-4 md:py-6">
    <div class="mx-auto max-w-7xl px-3 sm:px-4">
      <div class="flex flex-col items-center justify-between gap-3 sm:gap-4 md:flex-row">
        <div class="flex flex-col items-center text-white sm:flex-row sm:items-center md:items-center">
          <div class="mb-2 rounded-lg bg-gray-900/80 p-2 sm:mb-0 sm:mr-3 sm:p-3">
            <svg
              class="h-5 w-5 text-white sm:h-6 sm:w-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
              />
            </svg>
          </div>
          <span class="text-center text-sm font-semibold sm:text-left sm:text-base md:text-lg lg:text-xl">
            Хотите узнать подробнее о пряжи? Позвоните нам!
          </span>
        </div>

        <a
          href="tel:+998555087440"
          class="inline-flex items-center gap-1 text-base font-bold text-white hover:opacity-90 sm:gap-2 sm:text-lg md:text-xl"
        >
          <span class="sr-only">Позвонить:</span>
          <span class="hidden sm:inline">Телефон&nbsp;</span>
          +998 55 508-74-40
        </a>
      </div>
    </div>
  </section>
  
  <footer class="bg-emerald-950 pt-8 pb-6 text-white sm:pt-10 sm:pb-7 md:pt-12 md:pb-8">
    <div class="mx-auto max-w-7xl px-3 sm:px-4">
      <!-- Grid layout -->
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 md:grid-cols-4 md:gap-8">
        <!-- 1. Company info -->
        <div class="sm:col-span-2 md:col-span-1">
          <div class="mb-3 flex items-center justify-center gap-3 sm:justify-start sm:mb-4">
            <img src="../public/logo/logo.png" alt="Rainbow-Teks" class="h-10 w-auto sm:h-12 md:h-14" />
          </div>

          <p class="mb-4 text-center text-sm text-gray-400 sm:text-left sm:text-base sm:mb-5">
            Свяжитесь с нами для консультации, подбора пряжи или оформления заказа. Мы всегда рады
            помочь вам выбрать идеальный цвет и качество!
          </p>

          <div class="flex flex-col items-center gap-2 sm:flex-row sm:items-center sm:gap-3">
            <span class="text-xs font-semibold text-gray-300 sm:text-sm md:text-base">Социальные сети:</span>
            <nav class="flex items-center gap-2 sm:gap-3">
              <a href="#" class="inline-block hover:opacity-90" aria-label="Facebook">
                <img
                  src="../public/socialicons/facebook.png"
                  alt=""
                  class="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7"
                />
              </a>
              <a href="#" class="inline-block hover:opacity-90" aria-label="Twitter/X">
                <img
                  src="../public/socialicons/telegram.png"
                  alt=""
                  class="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7"
                />
              </a>
              <a href="#" class="inline-block hover:opacity-90" aria-label="LinkedIn">
                <img
                  src="../public/socialicons/linkedin.png"
                  alt=""
                  class="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7"
                />
              </a>
              <a href="#" class="inline-block hover:opacity-90" aria-label="Pinterest">
                <img
                  src="../public/socialicons/instagram.png"
                  alt=""
                  class="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7"
                />
              </a>
            </nav>
          </div>
        </div>

        <!-- 2. Menu links -->
        <div class="text-center sm:text-left md:px-24">
          <h3 class="mb-3 font-semibold sm:mb-4">Меню</h3>
          <ul class="space-y-1 text-sm text-gray-400 sm:space-y-2 sm:text-base">
            <li><RouterLink to="/" class="hover:text-white">Главная</RouterLink></li>
            <li><RouterLink to="/about" class="hover:text-white">О нас</RouterLink></li>
            <li><RouterLink to="/products" class="hover:text-white">Продукция</RouterLink></li>
            <li><RouterLink to="/production" class="hover:text-white">Производство</RouterLink></li>
            <li><RouterLink to="/contact" class="hover:text-white">Контакты</RouterLink></li>
          </ul>
        </div>

        <!-- 3. Address -->
        <div class="text-center sm:text-left">
          <div class="mb-3 flex flex-col items-center gap-2 sm:flex-row sm:items-start sm:gap-3 sm:mb-4">
            <div class="rounded-lg bg-amber-500 p-1.5 sm:p-2">
              <svg class="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div>
              <p class="text-sm font-semibold sm:text-base">Адрес: Республика Узбекистан, г. Ташкент</p>
              <p class="text-xs text-gray-400 sm:text-sm">Мирзо-Улугбекский район, ТТЗ Промзона, ТехноПарк</p>
            </div>
          </div>
        </div>

        <!-- 4. Email -->
        <div class="text-center sm:text-left">
          <div class="mb-3 flex flex-col items-center gap-2 sm:flex-row sm:items-start sm:gap-3 sm:mb-4">
            <div class="rounded-lg bg-amber-500 p-1.5 sm:p-2">
              <svg class="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <div>
              <p class="text-sm font-semibold sm:text-base">Напишите нам</p>
              <a href="mailto:souleymanovamir@gmail.com" class="text-xs text-gray-400 hover:text-white sm:text-sm">
                Mail: souleymanovamir@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="mt-6 border-t border-gray-800 pt-4 text-center text-xs text-gray-400 sm:mt-7 sm:pt-5 sm:text-sm md:mt-8 md:pt-6">
        Copyright © 2025 Rainbow-Teks. All rights reserved.
      </div>
    </div>
  </footer>
</template>
