<template>
    <div class="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
      <button
        @click="openChat"
        class="w-12 h-12 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-lg flex items-center justify-center"
        title="Chat"
      >
        <MessageCircle class="w-6 h-6" />
      </button>
      
      <button
        @click="makeCall"
        class="w-12 h-12 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg flex items-center justify-center"
        title="Call"
      >
        <Phone class="w-6 h-6" />
      </button>
      
      <button
        @click="requestQuote"
        class="w-12 h-12 rounded-full bg-gray-700 hover:bg-gray-800 text-white shadow-lg flex items-center justify-center"
        title="Quote"
      >
        <FileText class="w-6 h-6" />
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