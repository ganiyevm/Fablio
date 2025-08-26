<template>
  <div class="mx-auto mt-12 max-w-3xl p-6">
    <h2 class="mb-4 text-2xl font-bold">{{ $t('menu.blog') }}</h2>
    <div v-for="post in posts" :key="post.id" class="mb-6 rounded-xl bg-white p-4 shadow">
      <div class="text-lg font-semibold">{{ post.title }}</div>
      <div class="mb-2 text-sm text-gray-500">{{ post.date }}</div>
      <div>{{ post.text }}</div>
    </div>
  </div>
</template>
<script setup>
const posts = [
  {
    id: 1,
    title: 'Our new factory is open',
    date: '2024-01-21',
    text: 'We have opened a new textile factory...',
  },
  {
    id: 2,
    title: 'ISO certification achieved',
    date: '2024-03-15',
    text: 'Our company now certified according to ISO 9001...',
  },
]
</script>
