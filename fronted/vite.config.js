// vite.config.js
// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
// import { resolve } from 'path'
// import { fileURLToPath, URL } from 'node:url'

// export default defineConfig({
//   plugins: [vue()],
//   base: '/Fablio/',
//   resolve: {
//     alias: {
//       '@': fileURLToPath(new URL('./src', import.meta.url)),
//     },
//   },
// })
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // ✅
  routes: [/* ... */],
})
export default router

