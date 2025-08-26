<template>
  <div class="fixed top-1/2 right-4 z-50 flex -translate-y-1/2 flex-col gap-3">
    <button
      @click="openChat"
      class="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600"
      title="Chat"
    >
      <MessageCircle class="h-6 w-6" />
    </button>

    <button
      @click="makeCall"
      class="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600"
      title="Call"
    >
      <Phone class="h-6 w-6" />
    </button>

    <button
      @click="requestQuote"
      class="flex h-12 w-12 items-center justify-center rounded-full bg-gray-700 text-white shadow-lg hover:bg-gray-800"
      title="Quote"
    >
      <FileText class="h-6 w-6" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { MessageCircle, Phone, FileText } from 'lucide-vue-next'

const openChat = () => {
  console.log('Opening chat...')
}

const makeCall = () => {
  console.log('Making call...')
}

const requestQuote = () => {
  console.log('Requesting quote...')
}
</script>
