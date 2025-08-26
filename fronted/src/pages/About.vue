<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
<template>
  <div class="mx-auto mt-12 max-w-3xl rounded-xl bg-white p-6 shadow">
    <h2 class="mb-4 text-2xl font-bold">{{ t('menu.about') }}</h2>
    <p>{{ t('aboutText') }}</p>
    <img src="https://zelaltekstil.uz/_nuxt/img/about.7b0d4b8.jpg" class="mt-4 rounded-xl" />
  </div>
</template>
