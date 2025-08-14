<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
<template>
    <div class="max-w-3xl mx-auto p-6 mt-12 bg-white shadow rounded-xl">
      <h2 class="text-2xl font-bold mb-4">{{ t('menu.about') }}</h2>
      <p>{{ t('aboutText') }}</p>
      <img src="https://zelaltekstil.uz/_nuxt/img/about.7b0d4b8.jpg" class="mt-4 rounded-xl" />
    </div>
  </template>
  