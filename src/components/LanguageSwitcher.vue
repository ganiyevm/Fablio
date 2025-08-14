<template>
    <div class="relative" @keydown.escape="open = false">
      <!-- Trigger -->
      <button
        type="button"
        class="flex items-center gap-1 px-3 py-1.5 rounded-md text-black-700 hover:text-green-600
               focus:outline-none focus:ring-2 focus:ring-white/30"
        @click="toggle"
        aria-haspopup="listbox"
        :aria-expanded="open ? 'true' : 'false'"
      >
        <span class="uppercase">{{ currentLabel }}</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none"
             viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round"
             stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
      </button>
  
      <!-- Dropdown -->
      <div
        v-show="open"
        class="absolute right-0 mt-2 w-24 rounded-md shadow-lg ring-1 ring-white/10 overflow-hidden
               bg-slate-800 text-white z-50"
        role="listbox"
      >
        <button
          class="w-full text-left px-4 py-2 hover:bg-white/10 flex items-center justify-between"
          role="option"
          @click="setLang('ru')"
        >
          <span>Ru</span>
          <span v-if="locale === 'ru'">✓</span>
        </button>
        <button
          class="w-full text-left px-4 py-2 hover:bg-white/10 flex items-center justify-between"
          role="option"
          @click="setLang('en')"
        >
          <span>En</span>
          <span v-if="locale === 'en'">✓</span>
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
  import { useI18n } from 'vue-i18n'
  
  const open = ref(false)
  const { locale } = useI18n()
  
  const currentLabel = computed(() => (locale.value || 'en').toUpperCase())
  
  function toggle() {
    open.value = !open.value
  }
  function setLang(lang) {
    locale.value = lang
    localStorage.setItem('locale', lang)
    open.value = false
  }
  
  // click-outside yopish
  function onClickOutside(e) {
    const root = e.target.closest?.('[data-langroot]')
    if (!root) open.value = false
  }
  onMounted(() => document.addEventListener('click', onClickOutside))
  onBeforeUnmount(() => document.removeEventListener('click', onClickOutside))
  </script>
  
  <!-- root wrapperni ajratish uchun data attr qo'llaymiz -->
  <style scoped>
  /* yo'q – Tailwind yetarli */
  </style>
  