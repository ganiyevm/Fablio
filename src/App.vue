<template>
  <!-- Header balandligi uchun CSS o'zgaruvchi: mobile=64px, md+=88px -->
  <div class="min-h-dvh flex flex-col bg-background [--header-h:64px] md:[--header-h:88px]">
    <!-- FIXED header -->
    <HeaderComponent class="fixed inset-x-0 top-0 z-50" />

    <!-- Sahifa kontenti (header balandligiga teng padding) -->
    <main class="flex-1 pt-[calc(var(--header-h)+env(safe-area-inset-top))]">
      <!-- Istasangiz umumiy ichki chetlar -->
      <div class="px-4 sm:px-0 lg:px-0">
        <RouterView />
      </div>
    </main>

    <!-- Footer doim pastda + iOS safe area -->
    <FooterComponent class="mt-auto pb-[env(safe-area-inset-bottom)]" />
  </div>
</template>

<script setup lang="ts">
import HeaderComponent from './components/Header.vue'
import FooterComponent from './components/Footer.vue'
</script>
