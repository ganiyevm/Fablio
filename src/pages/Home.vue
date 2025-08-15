<template>
  <!-- SECTION: Hero slider + bottom strip -->
  <section class="relative min-h-[calc(100vh-var(--header-h,0px))] flex items-center overflow-hidden">
    <!-- Background + overlay -->
    <div
      class="absolute inset-0 bg-cover bg-center bg-no-repeat animate-kenburns transition-all duration-[2000ms]"
      :style="{ backgroundImage: `url(${currentSlide.bg})` }"
    >
      <div class="absolute inset-0 bg-black/40"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 mx-auto px-4 w-full">
      <div class="mx-auto max-w-7xl">
        <div class="grid lg:grid-cols-12 items-center gap-8 md:gap-16 xl:gap-32">
          <!-- Left: text -->
          <div
            data-obsid="left"
            :class="leftIn ? 'animate-fade-up' : 'opacity-0 translate-y-4'"
            class="lg:col-span-7 text-white"
          >
            <p class="text-white/80 mb-3 text-sm sm:text-base">{{ currentSlide.kicker }}</p>
            <h1
              class="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight drop-shadow"
              v-html="currentSlide.titleHtml"
            ></h1>

            <button
              class="mt-6 sm:mt-8 bg-green-500 hover:bg-black text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-md inline-flex items-center gap-2 text-base sm:text-xl"
            >
              Подробно
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>

          <!-- Right: green card -->
          <div
            data-obsid="right"
            :class="rightIn ? 'animate-slide-in-right' : 'opacity-0 translate-x-5'"
            class="lg:col-span-5"
          >
            <div class="relative lg:ml-auto max-w-[560px]">
              <div class="rounded-md shadow-2xl overflow-hidden bg-green-500">
                <div class="p-6 sm:p-8 md:p-10">
                  <p class="text-white/80 text-xs sm:text-sm mb-2">{{ currentSlide.cardKicker }}</p>
                  <h2
                    class="text-white text-xl sm:text-2xl md:text-3xl font-bold leading-tight"
                    v-html="currentSlide.cardTitleHtml"
                  ></h2>
                </div>

                <!-- Bottom dark strip -->
                <div class="bg-neutral-900/95 text-white px-4 sm:px-6 md:px-8 py-4 sm:py-5 flex items-center justify-between">
                  <div class="flex items-center gap-2 sm:gap-3">
                    <span class="inline-flex w-6 h-6 rounded-full bg-white/10 items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none"
                           stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 5v14M19 12H5"/>
                      </svg>
                    </span>
                    <span class="font-medium text-sm sm:text-base">Свяжитесь</span>
                  </div>
                  <button
                    class="shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"
                    aria-label="Submit"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M9 5l7 7-7 7"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>

    <!-- ✅ Bottom strip: 3 text + 3 image cards -->
    <div class="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-10 px-4 w-full">
      <div class="mx-auto max-w-7xl">
        <div class="flex gap-4 sm:gap-6 overflow-x-auto pb-2 snap-x snap-mandatory">
          <!-- TEXT 1 -->
          <a href="#"
             class="snap-start shrink-0 w-[260px] sm:w-[320px] bg-black/80 hover:bg-black/90 text-white rounded-md p-5 sm:p-6 transition-colors">
            <div class="text-base sm:text-lg font-semibold leading-snug">Core Value We<br/>Provide</div>
            <div class="mt-5 sm:mt-6 inline-flex items-center gap-2 text-green-500">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M7 17L17 7M7 7h10v10"/>
              </svg>
            </div>
          </a>

          <!-- IMAGE 1 -->
          <a href="#"
             class="snap-start shrink-0 w-[260px] sm:w-[320px] bg-black/80 rounded-md overflow-hidden group">
            <div class="h-[130px] sm:h-[150px] overflow-hidden">
              <img :src="asset('images/n1.jpg')" alt="thumb 1" loading="lazy" decoding="async"
                   class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
            </div>
          </a>

          <!-- TEXT 2 -->
          <a href="#"
             class="snap-start shrink-0 w-[260px] sm:w-[320px] bg-black/80 hover:bg-black/90 text-white rounded-md p-5 sm:p-6 transition-colors">
            <div class="text-base sm:text-lg font-semibold leading-snug">Products And<br/>Accessories</div>
            <div class="mt-5 sm:mt-6 inline-flex items-center gap-2 text-green-500">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M7 17L17 7M7 7h10v10"/>
              </svg>
            </div>
          </a>

          <!-- IMAGE 2 -->
          <a href="#"
             class="snap-start shrink-0 w-[260px] sm:w-[320px] bg-black/80 rounded-md overflow-hidden group">
            <div class="h-[130px] sm:h-[150px] overflow-hidden">
              <img :src="asset('images/n2.jpg')" alt="thumb 2" loading="lazy" decoding="async"
                   class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
            </div>
          </a>

          <!-- TEXT 3 -->
          <a href="#"
             class="snap-start shrink-0 w-[260px] sm:w-[320px] bg-black/80 hover:bg-black/90 text-white rounded-md p-5 sm:p-6 transition-colors">
            <div class="text-base sm:text-lg font-semibold leading-snug">Global Fabrics<br/>Distributor</div>
            <div class="mt-5 sm:mt-6 inline-flex items-center gap-2 text-green-500">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M7 17L17 7M7 7h10v10"/>
              </svg>
            </div>
          </a>

          <!-- IMAGE 3 -->
          <a href="#"
             class="snap-start shrink-0 w-[260px] sm:w-[320px] bg-black/80 rounded-md overflow-hidden group">
            <div class="h-[130px] sm:h-[150px] overflow-hidden">
              <img :src="asset('images/n3.jpg')" alt="thumb 3" loading="lazy" decoding="async"
                   class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
            </div>
          </a>
        </div>
      </div>
    </div>

    <!-- Nav arrows (kattaroq hit-area) -->
    <button @click.stop="goPrev"
      class="absolute left-3 sm:left-[30px] top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-black/70 text-white flex items-center justify-center"
      aria-label="Previous slide">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M15 19l-7-7 7-7"/>
      </svg>
    </button>
    <button @click.stop="goNext"
      class="absolute right-3 sm:right-[30px] top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-black/70 text-white flex items-center justify-center"
      aria-label="Next slide">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M9 5l7 7-7 7"/>
      </svg>
    </button>
  </section>

  <!-- SECTION: Big image + text -->
  <section class="relative overflow-hidden bg-white">
    <div class="container mx-auto px-4 w-full">
      <div class="mx-auto max-w-7xl grid md:grid-cols-12 items-center gap-8 md:gap-10 py-10 md:py-20">
        <!-- Left: big image -->
        <div class="md:col-span-6">
          <figure class="aspect-[16/11] rounded-xl overflow-hidden shadow-sm">
            <img
              :src="asset('images/s2.jpg')"
              alt="Textile factory"
              loading="lazy" decoding="async"
              class="w-full h-full object-cover"
            />
          </figure>
        </div>

        <!-- Right: text & CTA -->
        <div class="md:col-span-6 md:pl-10 md:border-l md:border-gray-200">
          <h1 class="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Качество, заметное с первого взгляда.
          </h1>

          <p class="mt-3 sm:mt-4 text-gray-600 max-w-2xl">
            Идеальная текстура и насыщенность цвета делают ваши изделия премиальными.
          </p>

          <a href="#"
             class="mt-6 sm:mt-8 inline-flex items-center gap-4 group">
            <span
              class="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-green-500 flex items-center justify-center
                     transition-transform group-hover:scale-105 group-active:scale-95"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                   fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                   class="w-6 h-6">
                <path d="M12 5v14M19 12H5" />
              </svg>
            </span>
            <span class="text-left">
              <span class="block font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                О нас & Продукция!
              </span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION: From idea to batch -->
  <section class="relative overflow-hidden bg-gray-100">
    <div class="container mx-auto px-4 w-full">
      <div class="mx-auto max-w-7xl py-12 md:py-16 lg:py-20">
        <h2 class="text-2xl sm:text-3xl md:text-5xl font-extrabold text-center text-gray-900">
          От идеи до готовой партии
        </h2>
        <p class="mt-3 sm:mt-4 max-w-3xl mx-auto text-center text-gray-600">
          Мы превращаем пряжу в цвет, который будет радовать вас долгие годы. Каждый этап — от разработки оттенка до доставки — проходит с вниманием к деталям и строгим контролем качества.
        </p>

        <div class="mt-8 md:mt-12 grid sm:grid-cols-3 gap-6 md:gap-8 items-start">
          <div>
            <h3 class="text-lg md:text-xl font-semibold text-gray-900 mb-3 text-center md:text-left">Окрашивание пряжи</h3>
            <figure class="group rounded-lg overflow-hidden shadow-sm">
              <img
                :src="asset('images/1.jpg')"
                alt="Fabric Printing"
                loading="lazy" decoding="async"
                class="w-full h-[200px] sm:h-[240px] md:h-[260px] object-cover transform-gpu transition-transform duration-500 ease-out group-hover:scale-110 motion-reduce:transition-none"
              />
            </figure>
          </div>

          <div>
            <h3 class="text-lg md:text-xl font-semibold text-gray-900 mb-3 text-center md:text-left">Лаборатория</h3>
            <figure class="group rounded-lg overflow-hidden shadow-sm">
              <img
                :src="asset('images/2.jpg')"
                alt="Fabric Dyeing"
                loading="lazy" decoding="async"
                class="w-full h-[200px] sm:h-[240px] md:h-[260px] object-cover transform-gpu transition-transform duration-500 ease-out group-hover:scale-110 motion-reduce:transition-none"
              />
            </figure>
          </div>

          <div>
            <h3 class="text-lg md:text-xl font-semibold text-gray-900 mb-3 text-center md:text-left">Отгрузка</h3>
            <figure class="group rounded-lg overflow-hidden shadow-sm">
              <img
                :src="asset('images/3.jpg')"
                alt="Engineering"
                loading="lazy" decoding="async"
                class="w-full h-[200px] sm:h-[240px] md:h-[260px] object-cover transform-gpu transition-transform duration-500 ease-out group-hover:scale-110 motion-reduce:transition-none"
              />
            </figure>
          </div>
        </div>

        <div class="mt-10 md:mt-12 border-t border-gray-200"></div>

        <div class="mt-8 md:mt-12 grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div class="group bg-white rounded-lg shadow-sm border border-gray-200 p-8 md:p-10 text-center hover:shadow-md [perspective:1000px]">
            <img :src="asset('icons/textile.svg')" alt="fiber" loading="lazy" decoding="async"
                 class="mx-auto w-14 h-14 md:w-16 md:h-16 mb-4 transform-gpu will-change-transform group-hover:animate-[spin-y_1s_linear_1]" />
            <div class="font-semibold text-gray-900">Выбор <br>волокна</div>
          </div>

          <div class="group bg-white rounded-lg shadow-sm border border-gray-200 p-8 md:p-10 text-center hover:shadow-md [perspective:1000px]">
            <img :src="asset('icons/yarn.svg')" alt="yarn" loading="lazy" decoding="async"
                 class="mx-auto w-14 h-14 md:w-16 md:h-16 mb-4 transform-gpu will-change-transform group-hover:animate-[spin-y_1s_linear_1]" />
            <div class="font-semibold text-gray-900">Разработка<br>оттенка</div>
          </div>

          <div class="group bg-white rounded-lg shadow-sm border border-gray-200 p-8 md:p-10 text-center hover:shadow-md [perspective:1000px]">
            <img :src="asset('icons/cloth.svg')" alt="quality" loading="lazy" decoding="async"
                 class="mx-auto w-14 h-14 md:w-16 md:h-16 mb-4 transform-gpu will-change-transform group-hover:animate-[spin-y_1s_linear_1]" />
            <div class="font-semibold text-gray-900">Тестирование &<br>качества</div>
          </div>

          <div class="group bg-white rounded-lg shadow-sm border border-gray-200 p-8 md:p-10 text-center hover:shadow-md [perspective:1000px]">
            <img :src="asset('icons/portfolio.svg')" alt="logistics" loading="lazy" decoding="async"
                 class="mx-auto w-14 h-14 md:w-16 md:h-16 mb-4 transform-gpu will-change-transform group-hover:animate-[spin-y_1s_linear_1]" />
            <div class="font-semibold text-gray-900">Логистика<br>заказа</div>
          </div>
        </div>

        <div class="mt-8 md:mt-10 flex justify-center">
          <a href="#" class="inline-flex items-center gap-4 group">
            <span class="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-green-500 flex items-center justify-center transition-transform group-hover:scale-105 group-active:scale-95">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                   fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                   class="w-6 h-6">
                <path d="M12 5v14M19 12H5"/>
              </svg>
            </span>
            <span class="text-left">
              <span class="block font-semibold text-gray-900 group-hover:text-green-600 transition-colors">О нас & Продукция!</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION: Hero + Testimonial (overlap) -->
  <section class="relative bg-neutral-900 text-white overflow-visible pb-36 md:pb-40">
    <div class="absolute inset-0 -z-10">
      <div class="absolute inset-0 bg-cover bg-center"
           :style="{ backgroundImage:`url(${asset('images/hero1.jpg')})` }"></div>
      <div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/10"></div>
    </div>

    <div class="relative container mx-auto px-4 py-12 md:py-16 lg:py-24">
      <div class="mx-auto max-w-7xl grid lg:grid-cols-12 gap-8 md:gap-10 lg:gap-10 items-center">
        <div class="lg:col-span-6">
          <h2 class="text-3xl md:text-5xl font-extrabold leading-tight">
            Окрашенная пряжа — больше,<br> чем цвет
          </h2>
          <p class="mt-3 md:mt-4 text-white/80 max-w-2xl">
            Мы создаём не просто нити, а основу для вдохновляющих коллекций.
            Наши оттенки сочетают в себе эстетику, долговечность и экологичность,
            чтобы ваши изделия выделялись среди остальных.
          </p>

          <div class="mt-6 md:mt-8 grid sm:grid-cols-2 gap-3 md:gap-4">
            <div class="bg-white/10 backdrop-blur rounded-lg px-4 md:px-5 py-3 md:py-4 flex items-center gap-3">
              <span class="inline-flex w-6 h-6 rounded-full bg-green-500 items-center justify-center">›</span>
              <span class="font-semibold">Тенденции цветовых решений</span>
            </div>
            <div class="bg-white/10 backdrop-blur rounded-lg px-4 md:px-5 py-3 md:py-4 flex items-center gap-3">
              <span class="inline-flex w-6 h-6 rounded-full bg-green-500 items-center justify-center">›</span>
              <span class="font-semibold">Лабораторно протестировано</span>
            </div>
          </div>

          <div class="mt-6 md:mt-8 flex items-start gap-3 md:gap-4">
            <img :src="asset('icons/machine.png')" class="w-9 h-9 md:w-10 md:h-10" alt="machine" loading="lazy" decoding="async">
            <p class="text-white/90">
              Мы имеем <span class="text-green-400 font-semibold underline">3+ лет</span> опыта, чтобы гарантировать
              стабильное качество окрашенной пряжи для текстильных
              производств и промышленных заказчиков
            </p>
          </div>
        </div>

        <div class="lg:col-span-6">
          <figure class="rounded-xl overflow-hidden shadow-2xl border-8 border-white/10 bg-white/5">
            <img :src="asset('images/hero2.jpg')" class="w-full h-[360px] md:h-[520px] object-cover" alt="hero2">
          </figure>
        </div>
      </div>
    </div>

    <div class="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 z-30 w-full px-4">
      <div class="relative mx-auto max-w-xl bg-white text-gray-800 rounded-lg shadow-xl p-5 md:p-6 lg:p-8 transition-all duration-700 ease-in-out">
        <div class="absolute -top-6 left-1/2 -translate-x-1/2
                    w-12 h-12 rounded-full bg-green-500 text-white
                    border-4 border-white shadow-md flex items-center justify-center text-xl">“”</div>

        <p class="text-gray-600 italic">
          {{ currentReview.text }}
        </p>

        <div class="mt-5 md:mt-6 flex items-center gap-3">
          <img :src="currentReview.img" class="w-9 h-9 md:w-10 md:h-10 rounded-full" alt="flag" loading="lazy" decoding="async">
          <div class="font-semibold">{{ currentReview.name }}</div>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION: Stats + Team -->
  <section class="relative bg-white pt-28 md:pt-32 lg:pt-36 pb-12 md:pb-16">
    <div class="container mx-auto px-4">
      <div class="mx-auto max-w-7xl grid lg:grid-cols-4 gap-8 items-start">
        <div class="lg:col-span-3">
          <!-- Your stats / members (qoldirildi) -->
        </div>
      </div>
    </div>
  </section>

  <ExportMap />

  <!-- SECTION: Split background mirror -->
  <section class="relative min-h-[70vh] md:min-h-[82vh] flex items-center overflow-hidden">
    <!-- BACKGROUND: 2 images -->
    <div class="absolute inset-0 grid grid-cols-2">
      <div class="relative">
        <img :src="asset('images/hero1.jpg')"
             alt="left bg" class="absolute inset-0 w-full h-full object-cover transform scale-x-[-1]">
        <div class="absolute inset-0 bg-black/70"></div>
      </div>
      <div class="relative">
        <img :src="asset('images/hero1.jpg')"
             alt="right bg" class="absolute inset-0 w-full h-full object-cover">
        <div class="absolute inset-0 bg-black/10"></div>
      </div>
    </div>

    <div class="absolute inset-0 pointer-events-none bg-gradient-to-r from-black/10 via-transparent to-black/10"></div>

    <div class="relative mx-auto w-full px-[30px]">
      <div class="mx-auto max-w-4xl text-white">
        <a href="#" class="inline-block text-sm md:text-base underline underline-offset-4 decoration-white/70">
          Цвет, рождённый в производстве
        </a>

        <h1 class="mt-3 md:mt-4 text-3xl md:text-6xl font-extrabold leading-tight tracking-tight">
          Каждая партия <span class="text-green-500">проходит путь</span> от сырья до
          <br class="hidden md:block">
          уникального оттенка под <span class="text-green-500">ваш заказ</span>
        </h1>

        <a href="#"
           class="mt-6 md:mt-8 inline-flex items-center gap-3 px-5 md:px-6 py-2.5 md:py-3 rounded-md border border-white/70 text-white hover:bg-white/10">
           Подробно
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted, onBeforeUnmount, computed } from 'vue'
import ExportMap from '@/components/ExportMap.vue'

/** Public yoki dist uchun BASE_URL ga mos to‘g‘ri URL yasash */
const asset = (p: string) =>
  `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`

/* =========================
   Reviews (5s da almashadi)
   ========================= */
const reviews = [
  {
    text: 'Сотрудничаем с RAINBOW-TEKS уже больше года. Качество окрашенной пряжи всегда стабильное, оттенки соответствуют нашим требованиям, а доставка происходит вовремя. Рекомендую как надежного поставщика!',
    img: asset('images/rflag.png'),
    name: 'Россия'
  },
  {
    text: 'Заказывали пряжу из хлопка и вискозы для нашей коллекции свитеров. Цвета яркие, нити мягкие, отлично подходят для работы на нашей фабрике. Обслуживание на высшем уровне, менеджеры всегда на связи.',
    img: asset('images/iflag.png'),
    name: 'Италия'
  },
  {
    text: 'RAINBOW-TEKS — партнер, которому можно доверять. Заказы на акриловую и поли-коттон пряжу приходят быстро, без брака. Особенно нравится гибкость компании в подборе нужных номеров и оттенков.',
    img: asset('images/tflag.png'),
    name: 'Турция'
  }
]

const index = ref(0)
const currentReview = computed(() => reviews[index.value])

let reviewTimer: number | null = null
onMounted(() => {
  reviewTimer = window.setInterval(() => {
    index.value = (index.value + 1) % reviews.length
  }, 5000)
})
onBeforeUnmount(() => {
  if (reviewTimer !== null) window.clearInterval(reviewTimer)
})

/* =========================
   Slides (autoplay 12s)
   ========================= */
const slides = [
  {
    bg: asset('images/hero1.jpg'),
    kicker: 'Каждая нить — история цвета.',
    titleHtml:
      'Мы создаём устойчивые оттенки,<br/> которые сохраняют глубину и насыщенность на <br/>протяжении всего срока службы изделия',
    cardKicker: 'Крашеная пряжа премиум-класса',
    cardTitleHtml:
      'Совершенные оттенки. Совершенное качество. Совершенные изделия.',
  },
  {
    bg: asset('images/hero2.jpg'),
    kicker: 'Крашеная пряжа. Цвет, которому доверяют.',
    titleHtml:
      'Уникальные оттенки из натурального,<br/> искусственного и смешанного <br/>сырья — под ваш запрос и ваш стиль',
    cardKicker: 'Качество, подтверждённое испытаниями.',
    cardTitleHtml:
      'Каждая партия проходит строгий контроль и тестирование, чтобы ваш продукт выглядел идеально',
  },
]

const idx = ref(0)
const currentSlide = computed(() => slides[idx.value])

function goNext() {
  idx.value = (idx.value + 1) % slides.length
  restartAutoplay()
}
function goPrev() {
  idx.value = (idx.value - 1 + slides.length) % slides.length
  restartAutoplay()
}

// Auto-play (12s)
let slideTimer: number | null = null
function startAutoplay() {
  stopAutoplay()
  slideTimer = window.setInterval(goNext, 12000)
}
function stopAutoplay() {
  if (slideTimer !== null) {
    window.clearInterval(slideTimer)
    slideTimer = null
  }
}
function restartAutoplay() { startAutoplay() }
onMounted(startAutoplay)
onBeforeUnmount(stopAutoplay)

// (ixtiyoriy) kirish animlar uchun flaglar
const leftIn = ref(true)
const rightIn = ref(true)

// Touch swipe (mobil uchun): simple threshold
let touchStartX = 0, touchEndX = 0
function onTouchStart(e: TouchEvent) { touchStartX = e.changedTouches[0].clientX }
function onTouchEnd(e: TouchEvent) {
  touchEndX = e.changedTouches[0].clientX
  const dx = touchEndX - touchStartX
  if (Math.abs(dx) > 40) (dx < 0 ? goNext() : goPrev())
}
onMounted(() => {
  const sec = document.querySelector('section.relative.min-h-\\[calc\\(100vh-var\\(--header-h,0px\\)\\)\\]')
  sec?.addEventListener('touchstart', onTouchStart, { passive: true })
  sec?.addEventListener('touchend', onTouchEnd, { passive: true })
})
onBeforeUnmount(() => {
  const sec = document.querySelector('section.relative.min-h-\\[calc\\(100vh-var\\(--header-h,0px\\)\\)\\]')
  sec?.removeEventListener('touchstart', onTouchStart)
  sec?.removeEventListener('touchend', onTouchEnd)
})

// Kontakt form (agar kerak bo‘lsa)
interface ContactForm { name: string; email: string; phone: string; message: string }
const form = reactive<ContactForm>({ name: '', email: '', phone: '', message: '' })
function submitForm() { console.log('Form submitted:', form) }
</script>

<style scoped>
/* Ken Burns */
@keyframes kenburns {
  0% { transform: scale(1) }
  100% { transform: scale(1.08) }
}
.animate-kenburns { animation: kenburns 20s ease-in-out infinite alternate }

/* Reduce motion hurmati */
@media (prefers-reduced-motion: reduce) {
  .animate-kenburns { animation: none }
}

/* Fallback enter animations */
@keyframes fadeUp { from { opacity: 0; transform: translateY(12px) } to { opacity: 1; transform: translateY(0) } }
.animate-fade-up { animation: fadeUp 700ms ease-out both }

@keyframes slideInRight { from { opacity: 0; transform: translateX(20px) } to { opacity: 1; transform: translateX(0) } }
.animate-slide-in-right { animation: slideInRight 700ms ease-out both }

/* 3D spin shortcut (ikonlar uchun) */
@keyframes spin-y { from { transform: rotateY(0) } to { transform: rotateY(360deg) } }
</style>
