<template>
  <!-- SECTION: Hero slider + bottom strip -->
  <section
    ref="heroSec"
    @touchstart.passive="onTouchStart"
    @touchend.passive="onTouchEnd"
    class="relative flex min-h-[calc(125vh-var(--header-h,0px))] max-md:min-h-[90vh] overflow-hidden"
  >
    <!-- Background + overlay -->
    <div class="absolute inset-0">
      <img
        :key="currentSlide.bg"
        :src="currentSlide.bg"
        alt=""
        class="animate-kenburns absolute inset-0 h-full w-full object-cover"
        fetchpriority="high"
        loading="eager"
        decoding="async"
      />
      <div class="absolute inset-0 bg-black/40"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 mx-auto pt-10 max-md:pt-6 max-sm:pt-4 md:pt-36 lg:pt-60 max-md:px-4">
      <div class="mx-auto max-w-7xl">
        <div class="grid items-center gap-12 max-md:gap-6 md:gap-16 lg:grid-cols-13 xl:gap-33">
          <!-- Left: text -->
          <div
            data-obsid="left"
            :class="leftIn ? 'animate-fade-up' : 'translate-y-4 opacity-0'"
            class="text-white lg:col-span-7"
          >
            <p class="mb-3 max-md:mb-2 text-sm max-md:text-xs text-white/80 sm:text-base">{{ currentSlide.kicker }}</p>
            <h1
              class="text-3xl max-md:text-xl max-sm:text-lg leading-tight font-extrabold tracking-tight drop-shadow sm:text-5xl md:text-6xl"
              v-html="currentSlide.titleHtml"
            ></h1>
            <RouterLink
              to="/contact"
              class="mt-6 max-md:mt-4 inline-flex items-center gap-2 max-md:gap-1 rounded-md bg-yellow-600 px-6 max-md:px-4 py-2.5 max-md:py-2 text-base max-md:text-sm text-white hover:bg-black transition-colors sm:mt-8 sm:px-8 sm:py-3 sm:text-xl"
            >
              <span>Подробно</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 max-md:h-4 max-md:w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </RouterLink>
          </div>

          <!-- Right: yellow card -->
          <div
            data-obsid="right"
            :class="rightIn ? 'animate-slide-in-right' : 'translate-x-5 opacity-0'"
            class="lg:col-span-5 max-md:mt-8"
          >
            <div class="relative max-w-[560px] max-md:max-w-full lg:ml-auto">
              <div class="overflow-hidden rounded-md bg-yellow-700 shadow-2xl">
                <div class="p-6 max-md:p-4 sm:p-8 md:p-16">
                  <p class="mb-2 text-xl max-md:text-base text-white/80 sm:text-sm">{{ currentSlide.cardKicker }}</p>
                  <h2
                    class="text-xl max-md:text-lg leading-tight font-bold text-white sm:text-2xl md:text-3xl"
                    v-html="currentSlide.cardTitleHtml"
                  ></h2>
                </div>

                <!-- Bottom dark strip -->
                <div
                  class="flex items-center justify-between bg-neutral-900/95 px-4 max-md:px-3 py-4 max-md:py-3 text-white sm:px-6 sm:py-10 md:px-10"
                >
                  <div class="flex items-center gap-2 sm:gap-3">
                    <RouterLink to="/contact" class="flex items-center gap-2 sm:gap-3 hover:text-amber-400 transition-colors">
                      <span
                        class="inline-flex h-6 w-6 max-md:h-5 max-md:w-5 items-center justify-center rounded-full bg-white/10"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-4 w-4 max-md:h-3 max-md:w-3"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M12 5v14M19 12H5" />
                        </svg>
                      </span>
                      <span class="text-lg max-md:text-base font-medium sm:text-lg"
                        >Свяжитесь</span
                      >
                    </RouterLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Nav arrows -->
    <button
      @click.stop="goPrev"
      class="absolute top-1/2 left-3 max-md:left-2 z-30 flex h-11 w-11 max-md:h-9 max-md:w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/90 transition-all sm:left-[32px] sm:h-12 sm:w-12"
      aria-label="Previous slide"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-8 w-8 max-md:h-6 max-md:w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    <button
      @click.stop="goNext"
      class="absolute top-1/2 right-3 max-md:right-2 z-30 flex h-11 w-11 max-md:h-9 max-md:w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/90 transition-all sm:right-[30px] sm:h-12 sm:w-12"
      aria-label="Next slide"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-8 w-8 max-md:h-6 max-md:w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </section>

  <!-- SECTION: Big image + text -->
  <section class="relative overflow-hidden bg-white">
    <div class="container mx-auto w-full px-4">
      <div
        class="mx-auto grid max-w-7xl items-center gap-8 py-10 max-md:py-6 max-md:gap-6 md:grid-cols-12 md:gap-10 md:py-20"
      >
        <!-- Left: big image -->
        <div class="md:col-span-6 max-md:order-2">
          <figure class="aspect-[16/11] overflow-hidden rounded-xl shadow-sm">
            <img
              :src="asset('images/HS2.webp')"
              alt="Textile factory"
              loading="lazy"
              decoding="async"
              class="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </figure>
        </div>

        <!-- Right: text & CTA -->
        <div class="md:col-span-6 md:border-l md:border-gray-200 md:pl-10 max-md:order-1">
          <h1 class="text-2xl max-md:text-xl max-sm:text-lg leading-tight font-extrabold text-gray-900 sm:text-3xl md:text-5xl">
            Качество, заметное с первого взгляда.
          </h1>

          <p class="mt-3 max-w-2xl text-gray-600 max-md:text-sm sm:mt-4">
            Идеальная текстура и насыщенность цвета делают ваши изделия премиальными.
          </p>

          <RouterLink to="/products" class="group mt-6 max-md:mt-4 inline-flex items-center gap-4 sm:mt-8">
            <span class="text-left">
              <span
                class="block font-semibold text-gray-900 max-md:text-sm transition-colors group-hover:text-amber-600"
              >
                Наши продукты
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
      <div class="mx-auto max-w-7xl py-12 max-md:py-8 md:py-16 lg:py-20">
        <h2 class="text-center text-2xl max-md:text-xl max-sm:text-lg font-extrabold text-gray-900 sm:text-3xl md:text-5xl">
          От идеи до готовой партии
        </h2>
        <p class="mx-auto mt-3 max-w-3xl text-center text-gray-600 max-md:text-sm sm:mt-4">
          Мы превращаем пряжу в цвет, который будет радовать вас долгие годы. Каждый этап — от
          разработки оттенка до доставки — проходит с вниманием к деталям и строгим контролем
          качества.
        </p>

        <div class="mt-8 max-md:mt-6 grid items-start gap-6 max-md:gap-4 max-sm:grid-cols-1 sm:grid-cols-3 md:mt-12 md:gap-8">
          <div>
            <h3
              class="mb-3 max-md:mb-2 text-center text-lg max-md:text-base font-semibold text-gray-900 md:text-left md:text-xl"
            >
              Окрашивание пряжи
            </h3>
            <figure class="group overflow-hidden rounded-lg shadow-sm">
              <img
                :src="asset('images/HS31.webp')"
                alt="Fabric Printing"
                loading="lazy"
                decoding="async"
                class="h-[200px] max-md:h-[160px] w-full transform-gpu object-cover transition-transform duration-500 ease-out group-hover:scale-110 motion-reduce:transition-none sm:h-[240px] md:h-[260px]"
              />
            </figure>
          </div>

          <div>
            <h3
              class="mb-3 max-md:mb-2 text-center text-lg max-md:text-base font-semibold text-gray-900 md:text-left md:text-xl"
            >
              Лаборатория
            </h3>
            <figure class="group overflow-hidden rounded-lg shadow-sm">
              <img
                :src="asset('images/HS32.webp')"
                alt="Fabric Dyeing"
                loading="lazy"
                decoding="async"
                class="h-[200px] max-md:h-[160px] w-full transform-gpu object-cover transition-transform duration-500 ease-out group-hover:scale-110 motion-reduce:transition-none sm:h-[240px] md:h-[260px]"
              />
            </figure>
          </div>

          <div>
            <h3
              class="mb-3 max-md:mb-2 text-center text-lg max-md:text-base font-semibold text-gray-900 md:text-left md:text-xl"
            >
              Продукция
            </h3>
            <figure class="group overflow-hidden rounded-lg shadow-sm">
              <img
                :src="asset('images/HS33.webp')"
                alt="Engineering"
                loading="lazy"
                decoding="async"
                class="h-[200px] max-md:h-[160px] w-full transform-gpu object-cover transition-transform duration-500 ease-out group-hover:scale-110 motion-reduce:transition-none sm:h-[240px] md:h-[260px]"
              />
            </figure>
          </div>
        </div>

        <div class="mt-10 max-md:mt-6 border-t border-gray-200 md:mt-12"></div>

        <div class="mt-8 max-md:mt-6 grid gap-6 max-md:gap-4 max-sm:grid-cols-2 sm:grid-cols-2 md:mt-12 md:gap-8 lg:grid-cols-4">
          <div
            class="group rounded-lg border border-gray-200 bg-white p-8 max-md:p-4 text-center shadow-sm [perspective:1000px] hover:shadow-md transition-shadow md:p-10"
          >
            <img
              :src="asset('icons/textile.svg')"
              alt="fiber"
              loading="lazy"
              decoding="async"
              class="mx-auto mb-4 max-md:mb-2 h-14 w-14 max-md:h-10 max-md:w-10 transform-gpu will-change-transform group-hover:animate-[spin-y_1s_linear_1] md:h-16 md:w-16"
            />
            <div class="font-semibold text-gray-900 max-md:text-sm">Выбор <br />волокна</div>
          </div>

          <div
            class="group rounded-lg border border-gray-200 bg-white p-8 max-md:p-4 text-center shadow-sm [perspective:1000px] hover:shadow-md transition-shadow md:p-10"
          >
            <img
              :src="asset('icons/yarn.svg')"
              alt="yarn"
              loading="lazy"
              decoding="async"
              class="mx-auto mb-4 max-md:mb-2 h-14 w-14 max-md:h-10 max-md:w-10 transform-gpu will-change-transform group-hover:animate-[spin-y_1s_linear_1] md:h-16 md:w-16"
            />
            <div class="font-semibold text-gray-900 max-md:text-sm">Разработка<br />оттенка</div>
          </div>

          <div
            class="group rounded-lg border border-gray-200 bg-white p-8 max-md:p-4 text-center shadow-sm [perspective:1000px] hover:shadow-md transition-shadow md:p-10"
          >
            <img
              :src="asset('icons/cloth.svg')"
              alt="quality"
              loading="lazy"
              decoding="async"
              class="mx-auto mb-4 max-md:mb-2 h-14 w-14 max-md:h-10 max-md:w-10 transform-gpu will-change-transform group-hover:animate-[spin-y_1s_linear_1] md:h-16 md:w-16"
            />
            <div class="font-semibold text-gray-900 max-md:text-sm">Тестирование &<br />качества</div>
          </div>

          <div
            class="group rounded-lg border border-gray-200 bg-white p-8 max-md:p-4 text-center shadow-sm [perspective:1000px] hover:shadow-md transition-shadow md:p-10"
          >
            <img
              :src="asset('icons/portfolio.svg')"
              alt="logistics"
              loading="lazy"
              decoding="async"
              class="mx-auto mb-4 max-md:mb-2 h-14 w-14 max-md:h-10 max-md:w-10 transform-gpu will-change-transform group-hover:animate-[spin-y_1s_linear_1] md:h-16 md:w-16"
            />
            <div class="font-semibold text-gray-900 max-md:text-sm">Логистика<br />заказа</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION: Hero + Testimonial (overlap) -->
  <section
    class="relative overflow-visible bg-neutral-700 pb-36 max-md:pb-24 text-white md:pb-40"
    :style="{ backgroundImage: `url(${asset('images/HS41.webp')})` }"
  >
    <div class="absolute inset-0 bg-black/40"></div>

    <div class="relative container mx-auto px-4 py-12 max-md:py-8 md:py-16 lg:py-24">
      <div class="mx-auto grid max-w-7xl items-center gap-8 max-md:gap-6 md:gap-10 lg:grid-cols-12 lg:gap-10">
        <div class="lg:col-span-6">
          <h2 class="text-3xl max-md:text-xl max-sm:text-lg leading-tight font-extrabold md:text-5xl">
            Окрашенная пряжа — больше,<br />
            чем цвет
          </h2>
          <p class="mt-3 max-w-2xl text-lg max-md:text-base text-white/80 md:mt-4">
            Мы создаём не просто нити, а основу для вдохновляющих коллекций. Наши оттенки сочетают в
            себе эстетику, долговечность и экологичность, чтобы ваши изделия выделялись среди
            остальных.
          </p>

          <div class="mt-6 max-md:mt-4 grid gap-3 max-md:gap-2 sm:grid-cols-2 max-sm:grid-cols-1 md:mt-8 md:gap-4">
            <div
              class="flex items-center gap-3 max-md:gap-2 rounded-lg bg-white/10 px-4 max-md:px-3 py-3 max-md:py-2 backdrop-blur md:px-5 md:py-4"
            >
              <span
                class="inline-flex h-6 w-6 max-md:h-5 max-md:w-5 items-center justify-center rounded-full bg-amber-500"
                >›</span
              >
              <span class="text-xl max-md:text-base font-semibold">Тенденции цветовых решений</span>
            </div>
            <div
              class="flex items-center gap-3 max-md:gap-2 rounded-lg bg-white/10 px-4 max-md:px-3 py-3 max-md:py-2 backdrop-blur md:px-5 md:py-4"
            >
              <span
                class="inline-flex h-6 w-6 max-md:h-5 max-md:w-5 items-center justify-center rounded-full bg-amber-500"
                >›</span
              >
              <span class="text-xl max-md:text-base font-semibold">Лабораторно протестировано</span>
            </div>
          </div>

          <div class="mt-6 max-md:mt-4 flex items-start gap-3 max-md:gap-2 md:mt-8 md:gap-4">
            <img
              :src="asset('icons/machine.png')"
              class="h-9 w-9 max-md:h-7 max-md:w-7 md:h-10 md:w-10"
              alt="machine"
              loading="lazy"
              decoding="async"
            />
            <p class="text-lg max-md:text-sm text-white/90">
              Мы имеем <span class="font-semibold text-green-400 underline">3+ лет</span> опыта,
              чтобы гарантировать стабильное качество окрашенной пряжи для текстильных производств и
              промышленных заказчиков
            </p>
          </div>
        </div>

        <div class="lg:col-span-6 max-md:order-first">
          <figure class="overflow-hidden rounded-xl border-8 max-md:border-4 border-white/10 bg-white/5 shadow-2xl">
            <img
              :src="asset('images/HS41.webp')"
              class="h-[360px] max-md:h-[250px] w-full object-cover md:h-[520px]"
              alt="hero2"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </div>
    </div>

    <div class="absolute bottom-0 left-1/2 z-30 w-full max-w-xl max-md:max-w-sm -translate-x-1/2 translate-y-1/2 px-4">
      <div
        class="relative mx-auto rounded-lg bg-white p-5 max-md:p-4 text-gray-800 shadow-xl transition-all duration-700 ease-in-out md:p-6 lg:p-8"
      >
        <div
          class="absolute -top-6 max-md:-top-4 left-1/2 flex h-12 w-12 max-md:h-8 max-md:w-8 -translate-x-1/2 items-center justify-center rounded-full border-4 max-md:border-2 border-white bg-amber-500 text-xl max-md:text-base text-white shadow-md"
        >
          ""
        </div>

        <p class="text-gray-600 max-md:text-sm italic">
          {{ currentReview.text }}
        </p>

        <div class="mt-5 max-md:mt-3 flex items-center gap-3 max-md:gap-2 md:mt-6">
          <img
            :src="currentReview.img"
            class="h-9 w-9 max-md:h-7 max-md:w-7 rounded-full md:h-10 md:w-10"
            alt="flag"
            loading="lazy"
            decoding="async"
          />
          <div class="font-semibold max-md:text-sm">{{ currentReview.name }}</div>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION: Stats + Cards -->
  <section class="relative container mx-auto px-4 py-32 max-md:py-26 md:py-38 lg:py-48">
    <div class="container mx-auto px-4"></div>
      <div class="grid gap-8 max-md:gap-6 lg:grid-cols-12">
        <!-- LEFT: stats + 2 cards -->
        <div class="lg:col-span-8">
          <!-- Stats -->
          <div class="mb-10 max-md:mb-6 grid grid-cols-1 gap-8 max-md:gap-6 text-center sm:grid-cols-2">
            <div
              v-for="(s, i) in stats"
              :key="s.label"
              :ref="(el) => (statEls[i] = el as HTMLElement)"
              class="select-none"
            >
              <div class="text-5xl max-md:text-3xl leading-none font-extrabold text-yellow-600 sm:text-6xl">
                {{ displayValues[i].toLocaleString() }}
              </div>

              <div class="mt-2 max-md:mt-1 font-medium text-gray-700 max-md:text-sm">{{ s.label }}</div>
            </div>
          </div>

          <!-- 2 cards -->
          <div class="grid gap-8 max-md:gap-4 max-sm:grid-cols-1 sm:grid-cols-2">
            <div class="flex">
              <div
                class="flex h-full w-full flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div class="h-[300px] max-md:h-[200px] w-full overflow-hidden md:h-[360px] xl:h-[420px]">
                  <img
                    :src="asset('images/HS51.webp')"
                    alt="Production facility"
                    class="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              
              </div>
            </div>

            <div class="flex">
              <div
                class="flex h-full w-full flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div class="h-[300px] max-md:h-[200px] w-full overflow-hidden md:h-[360px] xl:h-[420px]">
                  <img
                    :src="asset('images/HS52.webp')"
                    alt="Quality control"
                    class="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              
              </div>
            </div>
          </div>
        </div>

        <!-- RIGHT: yellow panel -->
        <div class="lg:col-span-4 max-lg:mt-8">
          <div
            class="relative group h-full min-h-[400px] max-md:min-h-[300px] flex-col rounded-xl bg-center p-8 max-md:p-4 text-white shadow-lg transition-all hover:shadow-xl lg:min-h-[470px] xl:min-h-[550px]"
            :style="{ backgroundImage: `url(${'images/pr6.png'})` }"
          >
            <!-- Dark overlay -->
            <div class="absolute inset-0 rounded-xl bg-black/70"></div>

            <!-- Hover content -->
            <div
              class="absolute inset-0 z-20 hidden group-hover:flex max-md:group-active:flex items-center justify-center"
            >
              <div class="w-full flex-shrink-0 p-12 max-md:p-6 bg-sky-900/95 rounded-xl text-white/95 shadow-lg h-full">
                <p
                  class="text-[24px] max-md:text-lg leading-[1.2] font-medium font-fira_sans text-light grid mb-5 max-md:mb-3 after:h-0.5 after:bg-primary after:mt-5 max-md:after:mt-3"
                >
                Гибкий подход к объёмам
                </p>
                <div class="grid gap-6 max-md:gap-3">
                  <p
                    class="text-[24px] max-md:text-base leading-[1.2] font-medium font-fira_sans text-light"
                  >
                    Партии крашений в кг :
                  </p>
                  <p
                    class="text-[21px] max-md:text-sm leading-[1.2] font-medium font-fira_sans flex gap-5 max-md:gap-3 text-light"
                  >
                    <svg
                      class="w-[20px] h-[20px] max-md:w-4 max-md:h-4 stroke-primary"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        d="M4 12h16m0 0-6-6m6 6-6 6"
                      ></path>
                    </svg>
                    200
                  </p>
                  <p
                    class="text-[21px] max-md:text-sm leading-[1.2] font-medium font-fira_sans flex gap-5 max-md:gap-3 text-light"
                  >
                    <svg
                      class="w-[20px] h-[20px] max-md:w-4 max-md:h-4 stroke-primary"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        d="M4 12h16m0 0-6-6m6 6-6 6"
                      ></path>
                    </svg>
                    300
                  </p>
                  <p
                    class="text-[21px] max-md:text-sm leading-[1.2] font-medium font-fira_sans flex gap-5 max-md:gap-3 text-light"
                  >
                    <svg
                      class="w-[20px] h-[20px] max-md:w-4 max-md:h-4 stroke-primary"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        d="M4 12h16m0 0-6-6m6 6-6 6"
                      ></path>
                    </svg>
                    400
                  </p>
                  <p
                    class="text-[21px] max-md:text-sm leading-[1.2] font-medium font-fira_sans flex gap-5 max-md:gap-3 text-light"
                  >
                    <svg
                      class="w-[20px] h-[20px] max-md:w-4 max-md:h-4 stroke-primary"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        d="M4 12h16m0 0-6-6m6 6-6 6"
                      ></path>
                    </svg>
                    600
                  </p>
                  <p
                    class="text-[21px] max-md:text-sm leading-[1.2] font-medium font-fira_sans flex gap-5 max-md:gap-3 text-light"
                  >
                    <svg
                      class="w-[20px] h-[20px] max-md:w-4 max-md:h-4 stroke-primary"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        d="M4 12h16m0 0-6-6m6 6-6 6"
                      ></path>
                    </svg>
                    1200
                  </p>
                </div>
              </div>
            </div>

            <!-- Main content -->
            <div class="relative z-10 flex h-full items-center justify-center text-center">
              <p
                class="flex flex-col items-center justify-center font-fira_sans text-4xl max-md:text-2xl font-semibold text-[#d9d9d9]"
              >
                <span class="mb-2 max-md:mb-1">ПРЯЖА ВАША</span>
                <span class="mb-4 max-md:mb-2">КРАСКА НАША</span>
                <svg
                  class="w-[62px] h-[42px] max-md:w-8 max-md:h-6 stroke-current animate-bounce"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="4"
                    d="M4 12h16m0 0-6-6m6 6-6 6"
                  />
                </svg>
              </p>
            </div>
          </div>
        </div>
      </div>
  </section>

  <ExportMap />

  <!-- SECTION: Split background mirror -->
  <section class="relative flex min-h-[70vh] max-md:min-h-[50vh] items-center overflow-hidden md:min-h-[82vh]">
    <img
      :src="asset('images/HS71.webp')"
      alt="left bg"
      class="absolute inset-0 h-full w-full scale-x-[-1] transform object-cover"
      loading="lazy"
      decoding="async"
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

    <div
      class="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10"
    ></div>

    <div class="relative mx-auto w-full px-[30px] max-md:px-4">
      <div class="mx-auto max-w-4xl text-white">
        <a
          href="#"
          class="inline-block text-sm max-md:text-xs underline decoration-white/70 underline-offset-4 hover:text-amber-400 transition-colors md:text-base"
        >
          Цвет, рождённый в производстве
        </a>

        <h1
          class="md:6xl mt-3 max-md:mt-2 text-3xl max-md:text-xl max-sm:text-lg leading-tight font-extrabold tracking-tight md:mt-4 md:text-6xl"
        >
          Каждая партия <span class="text-amber-500">проходит путь</span> от сырья до
          <br class="hidden sm:block" />
          уникального оттенка под <span class="text-amber-500">ваш заказ</span>
        </h1>

        <a
          href="#"
          class="mt-6 max-md:mt-4 inline-flex items-center gap-3 max-md:gap-2 rounded-md border border-white/70 px-5 max-md:px-4 py-2.5 max-md:py-2 text-white max-md:text-sm hover:bg-white/10 transition-all duration-300 md:mt-8 md:px-6 md:py-3"
        >
          Подробно
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted, onBeforeUnmount, computed, watch } from 'vue'
import ExportMap from '../components/ExportMap.vue';

/** ====== COUNTERS DATA ====== */
const stats = reactive([
  { label: 'тонн в месяц ', to: 180 },
  { label: 'стран на экспорт', to: 17 },
])

/** Display values for counters animation */
const displayValues = ref<number[]>(stats.map(() => 0))
const statEls = ref<(HTMLElement | null)[]>([] as unknown as (HTMLElement | null)[])

/** Smooth animation easing */
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

/** Start counting animation when element is in view */
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

/** Asset path helper */
const asset = (p: string) =>
  `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`

/* Reviews carousel (changes every 5 seconds) */
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

/* Hero slides with autoplay (12 seconds) */
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

function goNext() {
  idx.value = (idx.value + 1) % slides.length
  restartAutoplay()
}

function goPrev() {
  idx.value = (idx.value - 1 + slides.length) % slides.length
  restartAutoplay()
}

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

function restartAutoplay() {
  startAutoplay()
}

onMounted(startAutoplay)
onBeforeUnmount(stopAutoplay)

/* Animation flags for slide transitions */
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

/* Touch swipe support for mobile */
const heroSec = ref<HTMLElement | null>(null)
let touchStartX = 0,
  touchEndX = 0

function onTouchStart(e: TouchEvent) {
  touchStartX = e.changedTouches[0].clientX
}

function onTouchEnd(e: TouchEvent) {
  touchEndX = e.changedTouches[0].clientX
  const dx = touchEndX - touchStartX
  if (Math.abs(dx) > 40) dx < 0 ? goNext() : goPrev()
}

/* Card intersection observer for animations */
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

onBeforeUnmount(() => {
  cardObserver?.disconnect()
})

/* Contact form interface (if needed) */
interface ContactForm {
  name: string
  email: string
  phone: string
  message: string
}

const form = reactive<ContactForm>({ name: '', email: '', phone: '', message: '' })

function submitForm() {
  console.log('Form submitted:', form)
}
</script>

<style scoped>
/* Hide horizontal scrollbar */
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Card entrance animations */
.hero-card {
  transform: translateZ(0);
}

.hero-card .card-text,
.hero-card .card-img {
  opacity: 0;
  will-change: transform, opacity;
  transition:
    transform 1500ms cubic-bezier(0.22, 0.61, 0.36, 1),
    opacity 1500ms cubic-bezier(0.22, 0.61, 0.36, 1);
}

.hero-card .card-text {
  transform: translateX(-22px);
}

.hero-card .card-img {
  transform: translateX(22px);
}

.hero-card.in .card-text,
.hero-card.in .card-img {
  transform: translateX(0);
  opacity: 1;
}

.hero-card .card-text {
  transition-delay: calc(var(--i, 0) * 300ms);
}

.hero-card .card-img {
  transition-delay: calc(var(--i, 0) * 300ms + 90ms);
}

/* Ken Burns background animation */
@keyframes kenburns {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.08);
  }
}

.animate-kenburns {
  animation: kenburns 20s ease-in-out infinite alternate;
}

/* Fallback entrance animations */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-up {
  animation: fadeUp 1200ms ease-out both;
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-slide-in-right {
  animation: slideInRight 1200ms ease-out both;
}

/* 3D spin animation for icons */
@keyframes spin-y {
  from {
    transform: rotateY(0);
  }
  to {
    transform: rotateY(360deg);
  }
}

/* Mobile-specific optimizations */
@media (max-width: 768px) {
  /* Touch-friendly hover states */
  .group:active .group-hover\:scale-105 {
    transform: scale(1.05);
  }
  
  .group:active .group-hover\:scale-110 {
    transform: scale(1.1);
  }

  /* Mobile card animations */
  .hero-card .card-text,
  .hero-card .card-img {
    transition-duration: 800ms;
  }

  /* Reduce motion for mobile */
  .animate-kenburns {
    animation-duration: 30s;
  }
}

/* Small mobile optimizations */
@media (max-width: 640px) {
  .text-responsive {
    line-height: 1.3;
  }
  
  .gap-responsive {
    gap: 0.5rem;
  }
  
  .mobile-stack > * {
    width: 100%;
  }
}

/* Accessibility improvements */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  .animate-bounce {
    animation: none;
  }
  
  .animate-kenburns {
    animation: none;
  }
  
  .hero-card .card-text,
  .hero-card .card-img {
    transition: none;
    transform: none;
    opacity: 1;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .bg-black\/40 {
    background-color: rgba(0, 0, 0, 0.8);
  }
  
  .bg-white\/10 {
    background-color: rgba(255, 255, 255, 0.3);
  }
}

/* Performance optimizations */
* {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-duration: 150ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Focus states for accessibility */
button:focus-visible,
a:focus-visible {
  outline: 2px solid #f59e0b;
  outline-offset: 2px;
}

/* Image optimization for retina displays */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {
  .hero-image {
    image-rendering: -webkit-optimize-contrast;
  }
}
</style>
                   