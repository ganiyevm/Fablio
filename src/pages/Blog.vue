<template>
    <div class="max-w-3xl mx-auto p-6 mt-12">
      <h2 class="text-2xl font-bold mb-4">{{ $t('menu.blog') }}</h2>
      <div v-for="post in posts" :key="post.id" class="bg-white shadow rounded-xl p-4 mb-6">
        <div class="font-semibold text-lg">{{ post.title }}</div>
        <div class="text-sm text-gray-500 mb-2">{{ post.date }}</div>
        <div>{{ post.text }}</div>
      </div>
    </div>
  </template>
  <script setup>
  const posts = [
    { id: 1, title: 'Our new factory is open', date: '2024-01-21', text: 'We have opened a new textile factory...' },
    { id: 2, title: 'ISO certification achieved', date: '2024-03-15', text: 'Our company now certified according to ISO 9001...' }
  ]
  </script>
  