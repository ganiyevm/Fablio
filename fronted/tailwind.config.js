// tailwind.config.js
export default {
  content: [
    './index.html',
    './src/*/.{vue,js,ts,jsx,tsx}', // barcha Vue va JS fayllar uchun
  ],
  theme: {
    extend: {
      fontFamily: {
        sarabun: ['Sarabun', 'Arial', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
