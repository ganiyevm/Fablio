<template>
  <div class="min-h-dvh flex flex-col bg-background">
    <!-- Fixed header -->
    <HeaderComponent />

    <!-- Sahifa kontenti -->
    <main class="flex-1 pt-20">
      <RouterView />
    </main>

    <!-- Footer doim pastda -->
    <FooterComponent class="mt-auto" />
  </div>
</template>

<script setup lang="ts">
import HeaderComponent from './components/Header.vue'
import FooterComponent from './components/Footer.vue'
</script>
