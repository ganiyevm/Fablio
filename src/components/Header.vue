<!-- <template>
    <header class="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div class="max-w-7xl mx-auto flex justify-between items-center py-3 px-4">
        <router-link to="/" class="font-bold text-xl text-blue-800">Zelal Tekstil</router-link>
        <nav class="flex gap-4">
          <router-link v-for="item in menu" :key="item.path" :to="item.path" class="hover:text-blue-700" active-class="text-blue-600 font-semibold">
            {{ $t(item.key) }}
          </router-link>
        </nav>
        <div>
          <button @click="setLocale('ru')" :class="locale=='ru' ? 'font-bold underline' : ''">RU</button> |
          <button @click="setLocale('en')" :class="locale=='en' ? 'font-bold underline' : ''">EN</button>
        </div>
      </div>
    </header>
  </template>
  <script setup>
  import { useI18n } from 'vue-i18n'
  import { computed } from 'vue'
  
  const menu = [
    { path: '/', key: 'menu.home' },
    { path: '/about', key: 'menu.about' },
    { path: '/production', key: 'menu.production' },
    { path: '/products', key: 'menu.products' },
    { path: '/blog', key: 'menu.blog' },
    { path: '/contact', key: 'menu.contact' },
  ]
  const { locale } = useI18n()
  function setLocale(l) { locale.value = l }
  </script>
   -->
<!-- 
   <template>
    <header class="bg-white shadow-md">
      <div class="flex items-center justify-between px-2 py-4">
        <div class="flex items-center gap-3">
          <div class="w-66"><img src="../public/logo/logo.png" alt="Logo" class="h-12 "/></div>
          <nav class="hidden md:flex flex-1 justify-center items-center gap-8 whitespace-nowrap">
          <a v-for="item in navItems" :key="item.label" href="#"
             class="text-black-700 hover:text-green-600 transition-colors text-lg font-bold">
            {{ item.label }}
          </a>
        </nav>
        </div>
  
       
  
        <div class="flex items-center divide-x divide-gray-300 border border-gray-200 rounded-md overflow-hidden shrink-0">
          <div class="flex items-center gap-3 px-5 py-3">
            <Phone class="w-12 h-12 text-green-600" />
            <div class="flex flex-col leading-tight">
              <span class="text-lg text-gray-700">Call Us Now!</span>
              <strong class="text-base text-gray-900">+18 - 2222 - 3555</strong>
            </div>
          </div>
          <div class="flex items-center gap-3 px-5 py-3">
            <Mail class="w-12 h-12 text-green-600" />
            <div class="flex flex-col leading-tight">
              <span class="text-lg text-gray-700">Talk to us</span>
              <strong class="text-base text-gray-900">example@gmail.com</strong>
            </div>
          </div>
        </div>
      </div>
    </header>
  </template>
  
  <script setup>
  import { Phone, Mail } from 'lucide-vue-next'
  
  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'About Us', href: '#' },
    { label: 'Products', href: '#' },
    { label: 'Production', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Contacts', href: '#' },
    { label: 'En', href: '#' },
  ]
  </script> -->
  

  <script setup>
import { Phone, Mail } from 'lucide-vue-next'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'

const menu = [
  { to: '/', key: 'menu.home' },
  { to: '/about', key: 'menu.about' },
  { to: '/products', key: 'menu.products' },
  { to: '/production', key: 'menu.production' },
  { to: '/blog', key: 'menu.blog' },
  { to: '/contact', key: 'menu.contact' },
]
</script>

<template>
<header class="fixed top-0 left-0 w-full z-50 bg-white shadow-md h-20">
  <div class="flex items-center justify-between px-20 h-full">
      <!-- Chap: Logo + Menu -->
      <div class="flex items-center gap-6">
        <!-- public/ ichidagi fayl uchun to'g'ri yo'l -->
        <img src="../public/logo/logo.png" alt="Logo" class="h-10" />

        <!-- Menyu -->
        <nav class="hidden md:flex items-center gap-8 text-gray-700">
  <RouterLink to="/" class="hover:text-green-600 font-medium" active-class="text-green-600 font-semibold">
    {{ $t('menu.home') }}
  </RouterLink>
  <RouterLink to="/about" class="hover:text-green-600 font-medium" active-class="text-green-600 font-semibold">
    {{ $t('menu.about') }}
  </RouterLink>
  <RouterLink to="/products" class="hover:text-green-600 font-medium" active-class="text-green-600 font-semibold">
    {{ $t('menu.products') }}
  </RouterLink>
  <RouterLink to="/production" class="hover:text-green-600 font-medium" active-class="text-green-600 font-semibold">
    {{ $t('menu.production') }}
  </RouterLink>
  <RouterLink to="/blog" class="hover:text-green-600 font-medium" active-class="text-green-600 font-semibold">
    {{ $t('menu.blog') }}
  </RouterLink>
  <RouterLink to="/contact" class="hover:text-green-600 font-medium" active-class="text-green-600 font-semibold">
    {{ $t('menu.contact') }}
  </RouterLink>
</nav>

      </div>

      <!-- O'ng: Til + Kontakt -->
      <div class="flex items-center gap-6" data-langroot>
        <LanguageSwitcher />

        <div class="flex items-center divide-x divide-gray-300 border border-gray-200 rounded-md overflow-hidden shrink-0">
          <!-- Telefon (qo'ng'iroq ochiladi) -->
          <a
            href="tel:+1822223555"
            class="flex items-center gap-3 px-5 py-3 hover:bg-gray-50 transition"
          >
            <Phone class="w-12 h-12 text-green-600" />
            <div class="flex flex-col leading-tight">
              <span class="text-lg text-gray-700">{{ $t('contactText') }}</span>
              <strong class="text-base text-gray-900 hover:text-green-600">
                +18 - 2222 - 3555
              </strong>
            </div>
          </a>

          <!-- Email (pochta mijozi ochiladi) -->
          <a
            href="mailto:example@gmail.com"
            class="flex items-center gap-3 px-5 py-3 hover:bg-gray-50 transition"
          >
            <Mail class="w-12 h-12 text-green-600" />
            <div class="flex flex-col leading-tight">
              <span class="text-lg text-gray-700">{{ $t('contactMail') }}</span>
              <strong class="text-base text-gray-900 hover:text-green-600">
                example@gmail.com
              </strong>
            </div>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>
