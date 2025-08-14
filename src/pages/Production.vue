<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
<template>
    <div class="max-w-3xl mx-auto p-6 mt-12 bg-white shadow rounded-xl">
      <h2 class="text-2xl font-bold mb-4">{{ t('menu.production') }}</h2>
      <p>{{ t('productionText') }}</p>
      <img src="https://zelaltekstil.uz/_nuxt/img/production.40d3cc7.jpg" class="mt-4 rounded-xl" />
    </div>
  </template>
  