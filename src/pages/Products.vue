<template>
    <div class="max-w-5xl mx-auto p-6 mt-12">
      <h2 class="text-2xl font-bold mb-4">{{ $t('menu.products') }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="pr in products" :key="pr.id" class="bg-white shadow rounded-xl p-4">
          <img :src="pr.img" class="w-full h-36 object-cover rounded mb-2" />
          <div class="font-semibold">{{ pr.name }}</div>
          <div class="text-sm text-gray-500">{{ pr.desc }}</div>
        </div>
      </div>
    </div>
  </template>
  <script setup>
  const products = [
    { id: 1, name: 'Cotton Fabric', desc: 'Natural cotton textile', img: 'https://zelaltekstil.uz/_nuxt/img/prod1.22c26ea.jpg' },
    { id: 2, name: 'Yarn', desc: 'High quality yarn', img: 'https://zelaltekstil.uz/_nuxt/img/prod2.16de5a1.jpg' },
    { id: 3, name: 'Bed Linen', desc: 'Soft bed linen', img: 'https://zelaltekstil.uz/_nuxt/img/prod3.d02c92e.jpg' },
  ]
  </script>
  