<script setup lang="ts">
import { ref } from 'vue'
import { Phone, Mail, Menu, X } from 'lucide-vue-next'
import LanguageSwitcher from '../components/LanguageSwitcher.vue'

const isOpen = ref(false)

const menu = [
  { to: '/', key: 'menu.home' },
  { to: '/about', key: 'menu.about' },
  { to: '/products', key: 'menu.products' },
  { to: '/production', key: 'menu.production' },
  // { to: '/blog', key: 'menu.blog' },
  { to: '/contact', key: 'menu.contact' },
]

function closeMenu() {
  isOpen.value = false
}
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-emerald-950 backdrop-blur [--header-h:56px] sm:[--header-h:64px] md:[--header-h:72px] lg:[--header-h:88px] dark:bg-neutral-900/60"
  >
    <div class="mx-auto max-w-8xl px-3 sm:px-4 md:px-6 lg:px-15">
      <!-- Top bar -->
      <div class="flex h-[var(--header-h)] items-center justify-between gap-2 sm:gap-3">
        <!-- Left: logo -->
        <RouterLink to="/" class="flex shrink-0 items-center gap-2" @click="closeMenu">
          <img src="../public/logo/logo.png" alt="Logo" class="h-6 w-auto sm:h-8 md:h-18" />
          <!-- <span class="hidden sm:block text-xl font-bold text-gray-900">Zelal Tekstil</span> -->
        </RouterLink>

        <!-- Center: nav (desktop) -->
        <nav class="hidden items-center gap-4 text-zinc-300 md:gap-6 lg:gap-8 lg:flex">
          <RouterLink
            v-for="item in menu"
            :key="item.to"
            :to="item.to"
            class="text-sm font-medium transition-colors hover:text-yellow-600 md:text-sm lg:text-base"
            active-class="text-yellow-600 font-semibold"
          >
            {{ $t(item.key) }}
          </RouterLink>
        </nav>

        <!-- Right: language + contacts -->
        <div class="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6" data-langroot>
          <!-- Language -->
          <LanguageSwitcher class="hidden sm:block" />

          <!-- Contacts (desktop: to'liq; mobile: ikon) -->
          <div
            class="hidden shrink-0 items-center divide-x divide-gray-300 overflow-hidden rounded-md border border-gray-200 bg-white/80 lg:flex dark:bg-neutral-900/40"
          >
            <a
              href="tel:+998555087440"
              class="flex items-center gap-2 px-2 py-1.5 transition hover:bg-gray-50 lg:gap-3 lg:px-4 lg:py-2"
            >
              <Phone class="h-4 w-4 text-yellow-600 lg:h-6 lg:w-6 xl:h-7 xl:w-7" />
              <div class="leading-tight">
                <span class="text-xs text-gray-700 lg:text-sm">{{ $t('contactPage.formTitle') }}</span>
                <strong class="block text-xs text-gray-900 hover:text-yellow-600 lg:text-sm xl:text-base"
                  >+998555087440</strong
                >
              </div>
            </a>
            <a
              href="mailto:souleymanovamir@gmail.com"
              class="flex items-center gap-2 px-2 py-1.5 transition hover:bg-gray-50 lg:gap-3 lg:px-4 lg:py-2"
            >
              <Mail class="h-4 w-4 text-yellow-600 lg:h-6 lg:w-6 xl:h-7 xl:w-7" />
              <div class="leading-tight">
                <span class="text-xs text-gray-700 lg:text-sm">{{ $t('contactPage.formEmail') }}</span>
                <strong class="block text-xs text-gray-900 hover:text-yellow-600 lg:text-sm xl:text-base"
                  >souleymanovamir@gmail.com</strong
                >
              </div>
            </a>
          </div>

          <!-- Mobile + Tablet: language small + contact icons -->
          <div class="flex items-center gap-1 sm:gap-2 lg:hidden">
            <LanguageSwitcher class="sm:hidden" />
            <a href="tel:+998555087440" class="rounded p-1.5 hover:bg-black/5 sm:p-2" aria-label="Call">
              <Phone class="h-4 w-4 text-yellow-600 sm:h-5 sm:w-5" />
            </a>
            <a
              href="mailto:souleymanovamir@gmail.com"
              class="rounded p-1.5 hover:bg-black/5 sm:p-2"
              aria-label="Mail"
            >
              <Mail class="h-4 w-4 text-yellow-600 sm:h-5 sm:w-5" />
            </a>

            <!-- Burger -->
            <button
              class="ml-0.5 rounded p-1.5 hover:bg-black/5 sm:ml-1 sm:p-2"
              :aria-expanded="isOpen"
              aria-controls="mobile-menu"
              @click="isOpen = !isOpen"
            >
              <Menu v-if="!isOpen" class="h-5 w-5 sm:h-6 sm:w-6" />
              <X v-else class="h-5 w-5 sm:h-6 sm:w-6" />
              <span class="sr-only">Menu</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile panel -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-show="isOpen"
        id="mobile-menu"
        class="border-t border-black/10 bg-white/95 backdrop-blur lg:hidden dark:bg-neutral-900/95"
      >
        <div class="mx-auto max-w-7xl px-3 py-3 sm:px-4 sm:py-4 lg:px-8">
          <nav class="grid gap-1 sm:gap-2">
            <RouterLink
              v-for="item in menu"
              :key="item.to"
              :to="item.to"
              class="rounded-lg px-2 py-2 text-sm font-medium text-gray-800 hover:bg-black/5 active:bg-black/10 sm:py-3 sm:text-base"
              active-class="text-green-600 font-semibold bg-black/5"
              @click="closeMenu"
            >
              {{ $t(item.key) }}
            </RouterLink>
          </nav>

          <!-- Mobile contact block -->
          <div class="mt-3 grid gap-1 sm:mt-4 sm:gap-2">
            <a
              href="tel:+998555087440"
              class="flex items-center gap-2 rounded px-2 py-1.5 hover:bg-black/5 sm:gap-3 sm:py-2"
            >
              <Phone class="h-4 w-4 text-yellow-600 sm:h-5 sm:w-5" />
              <span class="text-xs sm:text-sm">+998555087440</span>
            </a>
            <a
              href="mailto:souleymanovamir@gmail.com"
              class="flex items-center gap-2 rounded px-2 py-1.5 hover:bg-black/5 sm:gap-3 sm:py-2"
            >
              <Mail class="h-4 w-4 text-yellow-600 sm:h-5 sm:w-5" />
              <span class="text-xs sm:text-sm">souleymanovamir@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>