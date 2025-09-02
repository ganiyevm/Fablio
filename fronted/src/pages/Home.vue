<template>
  <!-- SECTION: Hero slider + bottom strip -->
  <section
    ref="heroSec"
    @touchstart.passive="onTouchStart"
    @touchend.passive="onTouchEnd"
    class="relative flex min-h-[calc(125vh-var(--header-h,0px))] overflow-hidden"
  >
    <!-- Background + overlay (IMG bilan – yuqori prioritet) -->
    <div class="absolute inset-0">
      <img
        :key="currentSlide.bg"
        :src="currentSlide.bg"
        alt=""
        class="absolute inset-0 h-full w-full object-cover animate-kenburns"
        fetchpriority="high"
        loading="eager"
        decoding="async"
      />
      <div class="absolute inset-0 bg-black/40"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 mx-auto pt-10 md:pt-36 lg:pt-60">
      <div class="mx-auto max-w-7xl">
        <div class="grid items-center gap-12 md:gap-16 lg:grid-cols-13 xl:gap-33">
          <!-- Left: text -->
          <div
            data-obsid="left"
            :class="leftIn ? 'animate-fade-up' : 'translate-y-4 opacity-0'"
            class="text-white lg:col-span-7"
          >
            <p class="mb-3 text-sm text-white/80 sm:text-base">{{ currentSlide.kicker }}</p>
            <h1
              class="text-3xl leading-tight font-extrabold tracking-tight drop-shadow sm:text-5xl md:text-6xl"
              v-html="currentSlide.titleHtml"
            ></h1>
            <RouterLink
              to="/contact"
              class="mt-6 inline-flex items-center gap-2 rounded-md bg-yellow-600 px-6 py-2.5 text-base text-white hover:bg-black sm:mt-8 sm:px-8 sm:py-3 sm:text-xl"
            >
              <span>Подробно</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </RouterLink>
          </div>

          <!-- Right: yellow card -->
          <div
            data-obsid="right"
            :class="rightIn ? 'animate-slide-in-right' : 'translate-x-5 opacity-0'"
            class="lg:col-span-5"
          >
            <div class="relative max-w-[560px] lg:ml-auto">
              <div class="overflow-hidden rounded-md bg-yellow-700 shadow-2xl">
                <div class="p-6 sm:p-8 md:p-16">
                  <p class="mb-2 text-xl text-white/80 sm:text-sm">{{ currentSlide.cardKicker }}</p>
                  <h2
                    class="text-xl leading-tight font-bold text-white sm:text-2xl md:text-3xl"
                    v-html="currentSlide.cardTitleHtml"
                  ></h2>
                </div>

                <!-- Bottom dark strip -->
                <div class="flex items-center justify-between bg-neutral-900/95 px-4 py-4 text-white sm:px-6 sm:py-10 md:px-10">
                  <div class="flex items-center gap-2 sm:gap-3">
                    <RouterLink to="/contact" class="flex items-center gap-2 sm:gap-3">
                      <span class="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M12 5v14M19 12H5" />
                        </svg>
                      </span>
                      <span class="text-lg font-medium hover:text-amber-600 sm:text-lg">Свяжитесь</span>
                    </RouterLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- /Right -->
        </div>
      </div>
    </div>

    <!-- ✅ Bottom strip: 3 text + 3 image cards -->
    <div class="absolute bottom-4 left-1/2 z-10 flex w-full -translate-x-1/2 items-center px-4 md:bottom-6">
      <div class="max-w-8xl mx-auto">
        <div class="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 sm:gap-6 no-scrollbar">
          <!-- CARD 1 -->
          <a href="#" class="hero-card group h-36 w-[300px] shrink-0 snap-start overflow-hidden rounded-md bg-black/80 ring-1 ring-white/10 sm:h-[130px] sm:w-[400px]"
             style="--i: 0">
            <div class="grid h-full grid-cols-[1.15fr_1fr]">
              <div class="card-text flex flex-col justify-between p-5 text-white sm:p-6">
                <div class="text-lg leading-snug font-semibold">Живой цвет</div>
                <span class="inline-flex h-5 w-5 items-center justify-center text-amber-500 transition-transform group-hover:translate-x-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </span>
              </div>
              <div class="card-img relative">
                <img
                  :src="asset('images/n1.jpg')"
                  alt="thumb 1"
                  class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy" decoding="async"
                />
              </div>
            </div>
          </a>

          <!-- CARD 2 -->
          <a href="#" class="hero-card group h-36 w-[300px] shrink-0 snap-start overflow-hidden rounded-md bg-black/80 ring-1 ring-white/10 sm:h-[130px] sm:w-[400px]"
             style="--i: 1">
            <div class="grid h-full grid-cols-[1.15fr_1fr]">
              <div class="card-text flex flex-col justify-between p-5 text-white sm:p-6">
                <div class="text-lg leading-snug font-semibold">Прочная нить</div>
                <span class="inline-flex h-5 w-5 items-center justify-center text-amber-500 transition-transform group-hover:translate-x-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </span>
              </div>
              <div class="card-img relative">
                <img
                  :src="asset('images/n2.jpg')"
                  alt="thumb 2"
                  class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy" decoding="async"
                />
              </div>
            </div>
          </a>

          <!-- CARD 3 -->
          <a href="#" class="hero-card group h-36 w-[300px] shrink-0 snap-start overflow-hidden rounded-md bg-black/80 ring-1 ring-white/10 sm:h-[130px] sm:w-[400px]"
             style="--i: 2">
            <div class="grid h-full grid-cols-[1.15fr_1fr]">
              <div class="card-text flex flex-col justify-between p-5 text-white sm:p-6">
                <div class="text-lg leading-snug font-semibold">Прочная нить</div>
                <span class="inline-flex h-5 w-5 items-center justify-center text-amber-500 transition-transform group-hover:translate-x-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </span>
              </div>
              <div class="card-img relative">
                <img
                  :src="asset('images/n3.jpg')"
                  alt="thumb 3"
                  class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy" decoding="async"
                />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>

    <!-- Nav arrows -->
    <button
      @click.stop="goPrev"
      class="absolute top-1/2 left-3 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/90 sm:left-[32px] sm:h-12 sm:w-12"
      aria-label="Previous slide"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    <button
      @click.stop="goNext"
      class="absolute top-1/2 right-3 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/90 sm:right-[30px] sm:h-12 sm:w-12"
      aria-label="Next slide"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </section>

  <!-- SECTION: Big image + text -->
  <section class="relative overflow-hidden bg-white">
    <div class="container mx-auto w-full px-4">
      <div class="mx-auto grid max-w-7xl items-center gap-8 py-10 md:grid-cols-12 md:gap-10 md:py-20">
        <!-- Left: big image -->
        <div class="md:col-span-6">
          <figure class="aspect-[16/11] overflow-hidden rounded-xl shadow-sm">
            <img
              :src="asset('images/HS2.webp')"
              alt="Textile factory"
              loading="lazy"
              decoding="async"
              class="h-full w-full object-cover"
            />
          </figure>
        </div>

        <!-- Right: text & CTA -->
        <div class="md:col-span-6 md:border-l md:border-gray-200 md:pl-10">
          <h1 class="text-2xl leading-tight font-extrabold text-gray-900 sm:text-3xl md:text-5xl">
            Качество, заметное с первого взгляда.
          </h1>

          <p class="mt-3 max-w-2xl text-gray-600 sm:mt-4">
            Идеальная текстура и насыщенность цвета делают ваши изделия премиальными.
          </p>

          <RouterLink to="/products" class="group mt-6 inline-flex items-center gap-4 sm:mt-8">
            <span class="flex h-11 w-11 items-center justify-center rounded-full bg-amber-500 transition-transform group-hover:scale-105 group-active:scale-95 sm:h-12 sm:w-12">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                   stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                   class="h-6 w-6">
                <path d="M12 5v14M19 12H5" />
              </svg>
            </span>
            <span class="text-left">
              <span class="block font-semibold text-gray-900 transition-colors group-hover:text-amber-600">
                О нас & Продукция!
              </span>
            </span>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION: From idea to batch -->
  <section class="relative overflow-hidden bg-gray-100">
    <div class="container mx-auto w-full px-4">
      <div class="mx-auto max-w-7xl py-12 md:py-16 lg:py-20">
        <h2 class="text-center text-2xl font-extrabold text-gray-900 sm:text-3xl md:text-5xl">
          От идеи до готовой партии
        </h2>
        <p class="mx-auto mt-3 max-w-3xl text-center text-gray-600 sm:mt-4">
          Мы превращаем пряжу в цвет, который будет радовать вас долгие годы. Каждый этап — от
          разработки оттенка до доставки — проходит с вниманием к деталям и строгим контролем
          качества.
        </p>

        <div class="mt-8 grid items-start gap-6 sm:grid-cols-3 md:mt-12 md:gap-8">
          <div>
            <h3 class="mb-3 text-center text-lg font-semibold text-gray-900 md:text-left md:text-xl">
              Окрашивание пряжи
            </h3>
            <figure class="group overflow-hidden rounded-lg shadow-sm">
              <img
                :src="asset('images/HS31.webp')"
                alt="Fabric Printing"
                loading="lazy"
                decoding="async"
                class="h-[200px] w-full transform-gpu object-cover transition-transform duration-500 ease-out group-hover:scale-110 motion-reduce:transition-none sm:h-[240px] md:h-[260px]"
              />
            </figure>
          </div>

          <div>
            <h3 class="mb-3 text-center text-lg font-semibold text-gray-900 md:text-left md:text-xl">
              Лаборатория
            </h3>
            <figure class="group overflow-hidden rounded-lg shadow-sm">
              <img
                :src="asset('images/HS32.webp')"
                alt="Fabric Dyeing"
                loading="lazy"
                decoding="async"
                class="h-[200px] w-full transform-gpu object-cover transition-transform duration-500 ease-out group-hover:scale-110 motion-reduce:transition-none sm:h-[240px] md:h-[260px]"
              />
            </figure>
          </div>

          <div>
            <h3 class="mb-3 text-center text-lg font-semibold text-gray-900 md:text-left md:text-xl">
              Отгрузка
            </h3>
            <figure class="group overflow-hidden rounded-lg shadow-sm">
              <img
                :src="asset('images/HS33.webp')"
                alt="Engineering"
                loading="lazy"
                decoding="async"
                class="h-[200px] w-full transform-gpu object-cover transition-transform duration-500 ease-out group-hover:scale-110 motion-reduce:transition-none sm:h-[240px] md:h-[260px]"
              />
            </figure>
          </div>
        </div>

        <div class="mt-10 border-t border-gray-200 md:mt-12"></div>

        <div class="mt-8 grid gap-6 sm:grid-cols-2 md:mt-12 md:gap-8 lg:grid-cols-4">
          <div class="group rounded-lg border border-gray-200 bg-white p-8 text-center shadow-sm [perspective:1000px] hover:shadow-md md:p-10">
            <img
              :src="asset('icons/textile.svg')"
              alt="fiber"
              loading="lazy"
              decoding="async"
              class="mx-auto mb-4 h-14 w-14 transform-gpu will-change-transform group-hover:animate-[spin-y_1s_linear_1] md:h-16 md:w-16"
            />
            <div class="font-semibold text-gray-900">Выбор <br />волокна</div>
          </div>

          <div class="group rounded-lg border border-gray-200 bg-white p-8 text-center shadow-sm [perspective:1000px] hover:shadow-md md:p-10">
            <img
              :src="asset('icons/yarn.svg')"
              alt="yarn"
              loading="lazy"
              decoding="async"
              class="mx-auto mb-4 h-14 w-14 transform-gpu will-change-transform group-hover:animate-[spin-y_1s_linear_1] md:h-16 md:w-16"
            />
            <div class="font-semibold text-gray-900">Разработка<br />оттенка</div>
          </div>

          <div class="group rounded-lg border border-gray-200 bg-white p-8 text-center shadow-sm [perspective:1000px] hover:shadow-md md:p-10">
            <img
              :src="asset('icons/cloth.svg')"
              alt="quality"
              loading="lazy"
              decoding="async"
              class="mx-auto mb-4 h-14 w-14 transform-gpu will-change-transform group-hover:animate-[spin-y_1s_linear_1] md:h-16 md:w-16"
            />
            <div class="font-semibold text-gray-900">Тестирование &<br />качества</div>
          </div>

          <div class="group rounded-lg border border-gray-200 bg-white p-8 text-center shadow-sm [perspective:1000px] hover:shadow-md md:p-10">
            <img
              :src="asset('icons/portfolio.svg')"
              alt="logistics"
              loading="lazy"
              decoding="async"
              class="mx-auto mb-4 h-14 w-14 transform-gpu will-change-transform group-hover:animate-[spin-y_1s_linear_1] md:h-16 md:w-16"
            />
            <div class="font-semibold text-gray-900">Логистика<br />заказа</div>
          </div>
        </div>

        <div class="mt-8 flex justify-center md:mt-10">
          <RouterLink to="/products" class="group inline-flex items-center gap-4">
            <span class="flex h-11 w-11 items-center justify-center rounded-full bg-amber-500 transition-transform group-hover:scale-105 group-active:scale-95 sm:h-12 sm:w-12">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                   stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                   class="h-6 w-6">
                <path d="M12 5v14M19 12H5" />
              </svg>
            </span>
            <span class="text-left">
              <span class="block font-semibold text-gray-900 transition-colors group-hover:text-amber-600">
                О нас & Продукция!
              </span>
            </span>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION: Hero + Testimonial (overlap) – bitta fon manbasi -->
  <section class="relative overflow-visible bg-neutral-700 pb-36 text-white md:pb-40">
    <div class="absolute inset-0 -z-10">
      <img
        :src="asset('images/HS41.webp')"
        alt="HS41"
        class="absolute inset-0 h-full w-full object-cover"
        loading="lazy" decoding="async"
      />
      <div class="absolute inset-0 bg-black/40"></div>
      <div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/10"></div>
    </div>

    <div class="relative container mx-auto px-4 py-12 md:py-16 lg:py-24">
      <div class="mx-auto grid max-w-7xl items-center gap-8 md:gap-10 lg:grid-cols-12 lg:gap-10">
        <div class="lg:col-span-6">
          <h2 class="text-3xl leading-tight font-extrabold md:text-5xl">
            Окрашенная пряжа — больше,<br />
            чем цвет
          </h2>
          <p class="mt-3 max-w-2xl text-lg text-white/80 md:mt-4">
            Мы создаём не просто нити, а основу для вдохновляющих коллекций. Наши оттенки сочетают в
            себе эстетику, долговечность и экологичность, чтобы ваши изделия выделялись среди
            остальных.
          </p>

          <div class="mt-6 grid gap-3 sm:grid-cols-2 md:mt-8 md:gap-4">
            <div class="flex items-center gap-3 rounded-lg bg-white/10 px-4 py-3 backdrop-blur md:px-5 md:py-4">
              <span class="inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-500">›</span>
              <span class="text-xl font-semibold">Тенденции цветовых решений</span>
            </div>
            <div class="flex items-center gap-3 rounded-lg bg-white/10 px-4 py-3 backdrop-blur md:px-5 md:py-4">
              <span class="inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-500">›</span>
              <span class="text-xl font-semibold">Лабораторно протестировано</span>
            </div>
          </div>

          <div class="mt-6 flex items-start gap-3 md:mt-8 md:gap-4">
            <img :src="asset('icons/machine.png')" class="h-9 w-9 md:h-10 md:w-10" alt="machine" loading="lazy" decoding="async" />
            <p class="text-lg text-white/90">
              Мы имеем <span class="font-semibold text-green-400 underline">3+ лет</span> опыта,
              чтобы гарантировать стабильное качество окрашенной пряжи для текстильных производств и
              промышленных заказчиков
            </p>
          </div>
        </div>

        <div class="lg:col-span-6">
          <figure class="overflow-hidden rounded-xl border-8 border-white/10 bg-white/5 shadow-2xl">
            <img :src="asset('images/HS41.jpg')" class="h-[360px] w-full object-cover md:h-[520px]" alt="hero2" loading="lazy" decoding="async" />
          </figure>
        </div>
      </div>
    </div>

    <div class="absolute bottom-0 left-1/2 z-30 w-full -translate-x-1/2 translate-y-1/2 px-4">
      <div class="relative mx-auto max-w-xl rounded-lg bg-white p-5 text-gray-800 shadow-xl transition-all duration-700 ease-in-out md:p-6 lg:p-8">
        <div class="absolute -top-6 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-amber-500 text-xl text-white shadow-md">“”</div>

        <p class="text-gray-600 italic">
          {{ currentReview.text }}
        </p>

        <div class="mt-5 flex items-center gap-3 md:mt-6">
          <img :src="currentReview.img" class="h-9 w-9 rounded-full md:h-10 md:w-10" alt="flag" loading="lazy" decoding="async" />
          <div class="font-semibold">{{ currentReview.name }}</div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-50">
    <div class="container mx-auto px-4">
      <div class="grid gap-8 lg:grid-cols-12">
        <!-- ===== LEFT: stats + 2 cards ===== -->
        <div class="lg:col-span-8">
          <!-- Stats -->
          <div class="mb-10 grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
            <div v-for="(s, i) in stats" :key="s.label" :ref="(el) => (statEls[i] = el as HTMLElement)" class="select-none">
              <div class="text-5xl leading-none font-extrabold text-yellow-600 sm:text-6xl">
                {{ displayValues[i].toLocaleString() }}
              </div>
              <div class="mt-2 font-medium text-gray-700">{{ s.label }}</div>
            </div>
          </div>

          <!-- 2 cards -->
          <div class="grid gap-8 sm:grid-cols-2">
            <div class="flex">
              <div class="flex h-full w-full flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
                <div class="h-[300px] w-full overflow-hidden md:h-[360px] xl:h-[420px]">
                  <img :src="asset('images/HS51.webp')" alt="Michal Wincent" class="h-full w-full object-cover" loading="lazy" decoding="async" />
                </div>
                <div class="p-6 text-center">
                  <div class="text-lg font-semibold text-gray-900">Michal Wincent</div>
                  <div class="text-gray-500">Product Designer</div>
                </div>
              </div>
            </div>

            <div class="flex">
              <div class="flex h-full w-full flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
                <div class="h-[300px] w-full overflow-hidden md:h-[360px] xl:h-[420px]">
                  <img :src="asset('images/HS52.webp')" alt="Andrew Jackson" class="h-full w-full object-cover" loading="lazy" decoding="async" />
                </div>
                <div class="p-6 text-center">
                  <div class="text-lg font-semibold text-gray-900">Andrew Jackson</div>
                  <div class="text-gray-500">Material Designer</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- ===== RIGHT: yellow panel ===== -->
        <div class="lg:col-span-4">
          <div class="flex h-full flex-col rounded-xl bg-yellow-600 p-8 text-white shadow-lg lg:min-h-[570px] xl:min-h-[650px]">
            <h2 class="mb-4 text-4xl leading-tight font-extrabold">
              Our Leadership<br />Team
            </h2>
            <p class="mb-6 text-base text-white/90">
              Unbeatable and more talented team work is the pillar of success & we’re thankful to
              each member who belongs to Fablio.
            </p>
            <a href="#" class="inline-block rounded-md bg-white px-5 py-2 font-medium text-yellow-700 hover:bg-gray-100">
              Meet Our Team
            </a>

            <div class="mt-auto overflow-hidden rounded-lg">
              <img :src="asset('images/team-small.jpg')" alt="Team" class="h-[240px] w-full object-cover md:h-[260px] xl:h-[300px]" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <ExportMap />

  <!-- SECTION: Split background mirror -->
  <section class="relative flex min-h-[70vh] items-center overflow-hidden md:min-h-[82vh]">
    <img
          :src="asset('images/HS71.webp')"
          alt="left bg"
          class="absolute inset-0 h-full w-full scale-x-[-1] transform object-cover"
          loading="lazy" decoding="async"
        />
    <!-- BACKGROUND: 2 images -->
    <div class="absolute inset-0 grid grid-cols-2">
      <div class="relative">
       
        <div class="absolute inset-0 bg-black/70"></div>
      </div>
      <div class="relative">
       
        <div class="absolute inset-0 bg-black/10"></div>
      </div>
    </div>

    <div class="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10"></div>

    <div class="relative mx-auto w-full px-[30px]">
      <div class="mx-auto max-w-4xl text-white">
        <a href="#" class="inline-block text-sm underline decoration-white/70 underline-offset-4 md:text-base">
          Цвет, рождённый в производстве
        </a>

        <h1 class="md:6xl mt-3 text-3xl leading-tight font-extrabold tracking-tight md:mt-4 md:text-6xl">
          Каждая партия <span class="text-amber-500">проходит путь</span> от сырья до
          <br class="hidden md:block" />
          уникального оттенка под <span class="text-amber-500">ваш заказ</span>
        </h1>

        <a href="#" class="mt-6 inline-flex items-center gap-3 rounded-md border border-white/70 px-5 py-2.5 text-white hover:bg-white/10 md:mt-8 md:px-6 md:py-3">
          Подробно
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted, onBeforeUnmount, computed, watch } from 'vue'
import ExportMap from '../components/ExportMap.vue'

/** ====== 1) COUNTERS DATA ====== */
const stats = reactive([
  { label: 'Projects And Software', to: 1460 },
  { label: 'Qualified Employers', to: 4565 },
  { label: 'Satisfied Clients', to: 1784 },
])

/** Ko‘rinishda 0 → to gacha sanaladigan qiymatlar */
const displayValues = ref<number[]>(stats.map(() => 0))
const statEls = ref<(HTMLElement | null)[]>([] as unknown as (HTMLElement | null)[])

/** Yumshoq animatsiya */
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

/** Har bir element ko‘ringanda ishga tushadi */
function startCount(index: number, to: number, duration = 1400) {
  const startTime = performance.now()
  function tick(now: number) {
    const p = Math.min(1, (now - startTime) / duration)
    displayValues.value[index] = Math.round(to * easeOutCubic(p))
    if (p < 1) requestAnimationFrame(tick)
    else displayValues.value[index] = to
  }
  requestAnimationFrame(tick)
}

onMounted(() => {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return
        const idx = (statEls.value as HTMLElement[]).findIndex((el) => el === e.target)
        if (idx !== -1 && displayValues.value[idx] === 0) {
          startCount(idx, stats[idx].to, 1600)
        }
      })
    },
    { threshold: 0.35 }
  )
  ;(statEls.value as unknown as HTMLElement[]).forEach((el) => el && io.observe(el))
})

/** Public yoki dist uchun BASE_URL ga mos URL yasash */
const asset = (p: string) =>
  `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`

/* =========================
   Reviews (5s da almashadi)
   ========================= */
const reviews = [
  {
    text:
      'Сотрудничаем с RAINBOW-TEKS уже больше года. Качество окрашенной пряжи всегда стабильное, ' +
      'оттенки соответствуют нашим требованиям, а доставка происходит вовремя. Рекомендую как надежного поставщика!',
    img: asset('images/rflag.png'),
    name: 'Россия',
  },
  {
    text:
      'Заказывали пряжу из хлопка и вискозы для нашей коллекции свитеров. Цвета яркие, нити мягкие, ' +
      'отлично подходят для работы на нашей фабрике. Обслуживание на высшем уровне, менеджеры всегда на связи.',
    img: asset('images/iflag.png'),
    name: 'Италия',
  },
  {
    text:
      'RAINBOW-TEKS — партнер, которому можно доверять. Заказы на акриловую и поли-коттон пряжу приходят быстро, без брака. ' +
      'Особенно нравится гибкость компании в подборе нужных номеров и оттенков.',
    img: asset('images/tflag.png'),
    name: 'Турция',
  },
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
    bg: asset('images/D1.webp'),
    kicker: 'Крашеная пряжа. Цвет, которому доверяют.',
    titleHtml: 'Уникальные оттенки — под ваш запрос и стиль',
    cardKicker: 'Качество, подтверждённое испытаниями',
    cardTitleHtml: 'Каждая партия проходит строгий контроль.',
  },
  {
    bg: asset('images/D2.webp'),
    kicker: 'Каждая нить — история цвета.',
    titleHtml: 'Цвет, который держит насыщенность.',
    cardKicker: 'Крашеная пряжа премиум-класса.',
    cardTitleHtml: 'Каждая партия проходит строгий контроль.',
  },
  {
    bg: asset('images/D3.webp'),
    kicker: 'Каждая нить — история цвета.',
    titleHtml: 'Цвет, который держит насыщенность.',
    cardKicker: 'Крашеная пряжа премиум-класса.',
    cardTitleHtml: 'Каждая партия проходит строгий контроль.',
  },
]
const idx = ref(0)
const currentSlide = computed(() => slides[idx.value])
function goNext() { idx.value = (idx.value + 1) % slides.length; restartAutoplay() }
function goPrev() { idx.value = (idx.value - 1 + slides.length) % slides.length; restartAutoplay() }
let slideTimer: number | null = null
function startAutoplay() { stopAutoplay(); slideTimer = window.setInterval(goNext, 12000) }
function stopAutoplay() { if (slideTimer !== null) { window.clearInterval(slideTimer); slideTimer = null } }
function restartAutoplay() { startAutoplay() }
onMounted(startAutoplay)
onBeforeUnmount(stopAutoplay)

/* Kirish animlari flaglari */
const leftIn = ref(true)
const rightIn = ref(true)
watch(idx, () => {
  leftIn.value = false
  rightIn.value = false
  requestAnimationFrame(() => {
    leftIn.value = true
    rightIn.value = true
  })
})

/* Touch swipe (mobil) */
const heroSec = ref<HTMLElement | null>(null)
let touchStartX = 0, touchEndX = 0
function onTouchStart(e: TouchEvent) { touchStartX = e.changedTouches[0].clientX }
function onTouchEnd(e: TouchEvent) {
  touchEndX = e.changedTouches[0].clientX
  const dx = touchEndX - touchStartX
  if (Math.abs(dx) > 40) dx < 0 ? goNext() : goPrev()
}

/* Bottom cards: IntersectionObserver (.in class) */
let cardObserver: IntersectionObserver | null = null
onMounted(() => {
  cardObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          ;(e.target as HTMLElement).classList.add('in')
          cardObserver?.unobserve(e.target as Element)
        }
      })
    },
    { root: heroSec.value ?? null, threshold: 0.35 }
  )
  document.querySelectorAll<HTMLElement>('.hero-card').forEach((el) => cardObserver?.observe(el))
})
onBeforeUnmount(() => { cardObserver?.disconnect() })

/* Kontakt form (agar kerak bo‘lsa) */
interface ContactForm { name: string; email: string; phone: string; message: string }
const form = reactive<ContactForm>({ name: '', email: '', phone: '', message: '' })
function submitForm() { console.log('Form submitted:', form) }
</script>

<style scoped>
/* Hide horizontal scrollbar on the bottom strip */
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
.no-scrollbar::-webkit-scrollbar { display: none; }

/* Bottom-strip cards enter animation */
.hero-card { transform: translateZ(0); }
.hero-card .card-text,
.hero-card .card-img {
  opacity: 0;
  will-change: transform, opacity;
  transition:
    transform 1500ms cubic-bezier(0.22, 0.61, 0.36, 1),
    opacity 1500ms cubic-bezier(0.22, 0.61, 0.36, 1);
}
/* start positions */
.hero-card .card-text { transform: translateX(-22px); }
.hero-card .card-img { transform: translateX(22px); }
/* when visible */
.hero-card.in .card-text,
.hero-card.in .card-img { transform: translateX(0); opacity: 1; }
/* stagger (style="--i:0/1/2") */
.hero-card .card-text { transition-delay: calc(var(--i, 0) * 300ms); }
.hero-card .card-img { transition-delay: calc(var(--i, 0) * 300ms + 90ms); }

@media (prefers-reduced-motion: reduce) {
  .hero-card .card-text, .hero-card .card-img { transition: none; transform: none; opacity: 1; }
}

/* Ken Burns */
@keyframes kenburns { 0% { transform: scale(1); } 100% { transform: scale(1.08); } }
.animate-kenburns { animation: kenburns 20s ease-in-out infinite alternate; }

@media (prefers-reduced-motion: reduce) { .animate-kenburns { animation: none; } }

/* Fallback enter animations */
@keyframes fadeUp { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
.animate-fade-up { animation: fadeUp 1200ms ease-out both; }

@keyframes slideInRight { from { opacity: 0; transform: translateX(20px); } to { opacity: 1; transform: translateX(0); } }
.animate-slide-in-right { animation: slideInRight 1200ms ease-out both; }

/* 3D spin shortcut (ikonlar uchun) */
@keyframes spin-y { from { transform: rotateY(0); } to { transform: rotateY(360deg); } }
</style>
