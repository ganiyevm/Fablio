import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Production from '../pages/Production.vue'
import Products from '../pages/Products.vue'
import Blog from '../pages/Blog.vue'
import Contact from '../pages/Contact.vue'
import ProductionInformation from '@/components/ProductionInformation.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/production', name: 'Production', component: Production },
  { path: '/products', name: 'Products', component: Products },
  { path: '/blog', name: 'Blog', component: Blog },
  { path: '/contact', name: 'Contact', component: Contact },
  {
    path: '/production/:id', // Dinamik yo'l, URL'dan :id parametrini oladi
    name: 'ProductionInformation',
    component: ProductionInformation,
    props: true // Bu parametrning komponentga props sifatida o'tishini ta'minlaydi
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router