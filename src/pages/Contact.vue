<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section
      class="relative h-96 bg-cover bg-center bg-no-repeat"
      :style="bgStyle"
    >
      <div class="absolute inset-0 bg-black/50"></div>
      <div class="relative container mx-auto px-4 h-full flex items-center justify-center">
        <div class="text-center text-white">
          <h1 class="text-5xl font-bold mb-4">Контакты</h1>
          <nav class="text-sm">
  <router-link
    to="/"
    class="hover:text-amber-600 transition-colors underline-offset-4 hover:underline"
  >
  Главная
  </router-link>
  <span class="mx-2">•</span>
  <span class="text-amber-600">Контакты</span>
</nav>
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-5xl font-bold text-gray-800 mb-4">Свяжитесь с нами
</h2>
          <p class="text-gray-600">
            Мы всегда рады помочь с выбором пряжи и ответить на ваши вопросы.
           
          </p>
        </div>

        <div class="max-w-8xl mx-auto">
          <form @submit.prevent="submitForm" class="bg-white p-8 rounded-lg shadow-lg">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <input v-model="form.name" type="text" placeholder="Имя"
                     class="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent" required />
              <input v-model="form.email" type="email" placeholder="Email"
                     class="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent" required />
              <input v-model="form.phone" type="tel" placeholder="Телефон"
                     class="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent" required />
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input v-model="form.company" type="text" placeholder="Компания"
                     class="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent" required />
              <input v-model="form.subject" type="text" placeholder="Вопрос"
                     class="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent" required />
            </div>

            <div class="mb-6">
              <textarea v-model="form.message" placeholder="Сообщение" rows="6"
                        class="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none" required></textarea>
            </div>

            <div class="mb-6">
              <label class="flex items-center">
                <input v-model="form.agreeToData" type="checkbox"
                       class="mr-3 w-4 h-4 text-green-500 border border-gray-300 rounded focus:ring-amber-500" required />
                <span class="text-gray-600">Оставьте своё сообщение — мы свяжемся с вами.</span>
              </label>
            </div>

            <div class="text-center">
              <button type="submit"
                      class="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-lg transition duration-300">
                      Отправить!
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>

    <!-- Get In Touch Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Map -->
          <div class="rounded-xl overflow-hidden shadow">
  <iframe
    class="w-full h-96"
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
    src="https://maps.google.com/maps?q=41.3439722,69.4010833&z=17&output=embed">
  </iframe>
</div>


          <!-- Contact Info -->
          <div>
            <h2 class="text-4xl font-bold text-gray-800 mb-6">Свяжитесь мгновенно!</h2>
            <p class="text-gray-600 mb-8">
              Оставьте сообщение или позвоните — мы ответим в ближайшее время.
            </p>

            <!-- Head Office -->
            <div class="mb-8">
              <h3 class="text-2xl font-bold text-gray-800 mb-4">Head Office</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="flex items-start">
                  <div class="bg-green-100 p-2 rounded-lg mr-4 mt-1">
                    <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-800 mb-1">Адрес</h4>
                    <p class="text-gray-600">Республика Узбекистан, г.Ташкент</p>
                    <p class="text-gray-600">Мирзо-улугбекский район, ТТЗ Промзона, ТехноПарк
</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="bg-green-100 p-2 rounded-lg mr-4 mt-1">
                    <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-800 mb-1">Телефон / Email</h4>
                    <p class="text-gray-600">+99890 809-05-50</p>
                    <p class="text-gray-600">souleymanovamir@gmail.com
</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Branch Office -->
            <!-- <div>
              <h3 class="text-2xl font-bold text-gray-800 mb-4">Branch Office</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="flex items-start">
                  <div class="bg-green-100 p-2 rounded-lg mr-4 mt-1">
                    <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-800 mb-1">Address</h4>
                    <p class="text-gray-600">123 King Street, Melbourne</p>
                    <p class="text-gray-600">Victoria 5000, New York.</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="bg-green-100 p-2 rounded-lg mr-4 mt-1">
                    <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-800 mb-1">Call Us / Email</h4>
                    <p class="text-gray-600">+1800-200-543211</p>
                    <p class="text-gray-600">fablio.sales@yourmail.com</p>
                  </div>
                </div>
              </div>
            </div> -->

          </div>
        </div>
      </div>
    </section>

    <!-- Brand Logos Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60">
          <div class="text-center">
            <div class="text-2xl font-bold text-gray-400">Best Tailor</div>
            <div class="text-sm text-gray-400">CUSTOM CLOTHING</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-gray-400">Sewing Shop</div>
            <div class="text-sm text-gray-400">TAILORED SERVICE</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-gray-400">Best Sewing</div>
            <div class="text-sm text-gray-400">HAND MADE</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-gray-400">Tailor Shop</div>
            <div class="text-sm text-gray-400">PREMIUM QUALITY</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-gray-400">Sewing Shop</div>
            <div class="text-sm text-gray-400">TAILORED SERVICE</div>
          </div>
        </div>
      </div>
    </section>

 
   
  </div>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue'
import { RouterLink } from 'vue-router'


interface ImportMeta {
  env: {
    BASE_URL: string;
  }
}

const heroBackgroundImage = `${import.meta.env.BASE_URL}images/hero3.jpg`
const footer1BackgroundImage = `footer/footer1.jpg`

const bgStyle = computed(() => ({ backgroundImage: `url('${heroBackgroundImage}')` }))
const footer1 = computed(() => ({ backgroundImage: `url('${footer1BackgroundImage}')` }))

type ContactForm = {
  name: string
  email: string
  phone: string
  company: string
  subject: string
  message: string
  agreeToData: boolean
}

const form = reactive<ContactForm>({
  name: '',
  email: '',
  phone: '',
  company: '',
  subject: '',
  message: '',
  agreeToData: false
})

function submitForm() {
  if (!form.agreeToData) {
    alert('Please agree to data collection and storage.')
    return
  }

  console.log('Form submitted:', { ...form })
  alert('Form submitted successfully!')

  // Reset
  form.name = ''
  form.email = ''
  form.phone = ''
  form.company = ''
  form.subject = ''
  form.message = ''
  form.agreeToData = false
}
</script>

<style scoped>
.container { max-width: 1200px; }
* { transition: all 0.3s ease; }
input:focus, textarea:focus { outline: none; }
.hover-lift:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
</style>
