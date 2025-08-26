<template>
  <div class="mx-auto mt-12 max-w-5xl p-6">
    <h2 class="mb-4 text-2xl font-bold">{{ $t('menu.products') }}</h2>
    <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
      <div v-for="pr in products" :key="pr.id" class="rounded-xl bg-white p-4 shadow">
        <img :src="pr.img" class="mb-2 h-36 w-full rounded object-cover" />
        <div class="font-semibold">{{ pr.name }}</div>
        <div class="text-sm text-gray-500">{{ pr.desc }}</div>
      </div>
    </div>
  </div>
</template>
<script setup>
const products = [
  {
    id: 1,
    name: 'Cotton Fabric',
    desc: 'Natural cotton textile',
    img: 'https://zelaltekstil.uz/_nuxt/img/prod1.22c26ea.jpg',
  },
  {
    id: 2,
    name: 'Yarn',
    desc: 'High quality yarn',
    img: 'https://zelaltekstil.uz/_nuxt/img/prod2.16de5a1.jpg',
  },
  {
    id: 3,
    name: 'Bed Linen',
    desc: 'Soft bed linen',
    img: 'https://zelaltekstil.uz/_nuxt/img/prod3.d02c92e.jpg',
  },
]
</script>
