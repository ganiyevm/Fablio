// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'
// import { createPinia } from 'pinia'
// import { createI18n } from 'vue-i18n'
// import messages from './locales'
// import './assets/global.css'

// const pinia = createPinia()

// const i18n = createI18n({
//     locale: 'ru',
//     fallbackLocale: 'en',
//     messages
// })

// createApp(App).use(router).use(pinia).use(i18n).mount('#app')
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import messages from './locales'
import './assets/global.css'

const pinia = createPinia()
const savedLocale = localStorage.getItem('locale') || 'ru'

const i18n = createI18n({
  locale: savedLocale,
  fallbackLocale: 'en',
  messages
})

createApp(App).use(router).use(pinia).use(i18n).mount('#app')
