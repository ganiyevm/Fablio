<script setup lang="ts">
import { ref } from 'vue'
import { Phone, Mail, Menu, X } from 'lucide-vue-next'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'

const isOpen = ref(false)

const menu = [
  { to: '/', key: 'menu.home' },
  { to: '/about', key: 'menu.about' },
  { to: '/products', key: 'menu.products' },
  { to: '/production', key: 'menu.production' },
  // { to: '/blog', key: 'menu.blog' },
  { to: '/contact', key: 'menu.contact' },
]

function closeMenu() { isOpen.value = false }
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 bg-white/70 dark:bg-neutral-900/60 backdrop-blur border-b border-black/10 [--header-h:64px] md:[--header-h:88px]"
  >
    <div class="mx-auto max-w-8xl px-4 sm:px-6 lg:px-15">
      <!-- Top bar -->
      <div class="h-[var(--header-h)] flex items-center justify-between gap-3">
        <!-- Left: logo -->
        <RouterLink to="/" class="shrink-0 flex items-center gap-2" @click="closeMenu">
          <img src="../public/logo/logo.png" alt="Logo" class="h-8 md:h-18 w-auto" />
          <!-- <span class="hidden sm:block text-xl font-bold text-gray-900">Zelal Tekstil</span> -->
        </RouterLink>

        <!-- Center: nav (desktop) -->
        <nav class="hidden md:flex items-center gap-8 text-gray-700">
          <RouterLink
            v-for="item in menu"
            :key="item.to"
            :to="item.to"
            class="hover:text-yellow-600 font-medium transition-colors"
            active-class="text-yellow-600 font-semibold"
          >
            {{ $t(item.key) }}
          </RouterLink>
        </nav>

        <!-- Right: language + contacts -->
        <div class="flex items-center gap-3 md:gap-6" data-langroot>
          <!-- Language -->
          <LanguageSwitcher class="hidden sm:block" />

          <!-- Contacts (desktop: to'liq; mobile: ikon) -->
          <div
            class="hidden md:flex items-center divide-x divide-gray-300 border border-gray-200 rounded-md overflow-hidden shrink-0 bg-white/80 dark:bg-neutral-900/40"
          >
            <a href="tel:+998908090550" class="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition">
              <Phone class="w-6 h-6 md:w-7 md:h-7 text-yellow-600" />
              <div class="leading-tight">
                <span class="text-xs md:text-sm text-gray-700">{{ $t('contactText') }}</span>
                <strong class="block text-sm md:text-base text-gray-900 hover:text-yellow-600">+998908090550</strong>
              </div>
            </a>
            <a href="mailto:souleymanovamir@gmail.com" class="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition">
              <Mail class="w-6 h-6 md:w-7 md:h-7 text-yellow-600" />
              <div class="leading-tight">
                <span class="text-xs md:text-sm text-gray-700">{{ $t('contactMail') }}</span>
                <strong class="block text-sm md:text-base text-gray-900 hover:text-yellow-600">souleymanovamir@gmail.com</strong>
              </div>
            </a>
          </div>

          <!-- Mobile: language small + contact icons -->
          <div class="flex md:hidden items-center gap-2">
            <LanguageSwitcher />
            <a href="tel:+998908090550" class="p-2 rounded hover:bg-black/5" aria-label="Call">
              <Phone class="w-5 h-5 yellow-600" />
            </a>
            <a href="mailto:souleymanovamir@gmail.com" class="p-2 rounded hover:bg-black/5" aria-label="Mail">
              <Mail class="w-5 h-5 yellow-600" />
            </a>

            <!-- Burger -->
            <button
              class="ml-1 p-2 rounded hover:bg-black/5"
              :aria-expanded="isOpen"
              aria-controls="mobile-menu"
              @click="isOpen = !isOpen"
            >
              <Menu v-if="!isOpen" class="w-6 h-6" />
              <X v-else class="w-6 h-6" />
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
        class="md:hidden bg-white/95 dark:bg-neutral-900/95 backdrop-blur border-t border-black/10"
      >
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <nav class="grid gap-2">
            <RouterLink
              v-for="item in menu"
              :key="item.to"
              :to="item.to"
              class="px-2 py-3 rounded-lg text-base font-medium text-gray-800 hover:bg-black/5 active:bg-black/10"
              active-class="text-green-600 font-semibold bg-black/5"
              @click="closeMenu"
            >
              {{ $t(item.key) }}
            </RouterLink>
          </nav>

          <!-- Mobile contact block -->
          <div class="mt-4 grid gap-2">
            <a href="tel:+998908090550" class="flex items-center gap-3 px-2 py-2 rounded hover:bg-black/5">
              <Phone class="w-5 h-5 text-yellow-600" />
              <span class="text-sm">+998908090550</span>
            </a>
            <a href="mailto:souleymanovamir@gmail.com" class="flex items-center gap-3 px-2 py-2 rounded hover:bg-black/5">
              <Mail class="w-5 h-5 text-yellow-600" />
              <span class="text-sm">souleymanovamir@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>
