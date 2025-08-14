<template>


  <!-- HERO SECTION (headerdan keyin qo'ying) -->
  <!-- <section class="relative min-h-screen flex items-center overflow-hidden">
  
  <div
    class="absolute inset-0 bg-cover bg-center bg-no-repeat animate-kenburns transition-all duration-[2000ms]"
    :style="{ backgroundImage: `url(${currentSlide.bg})` }"
  >
    <div class="absolute inset-0 bg-black/40"></div>
  </div>

  
  <div class="relative z-10 mx-auto px-4">
    <div class="grid lg:grid-cols-12 gap-32 items-center">
      
      <div
        data-obsid="left"
        :class="leftIn ? 'animate-fade-up' : 'opacity-0 translate-y-4'"
        class="lg:col-span-7 text-white"
      >
        <p class="text-white/80 mb-4">{{ currentSlide.kicker }}</p>
        <h1 class="text-4xl md:text-7xl font-extrabold leading-tight tracking-tight drop-shadow"
            v-html="currentSlide.titleHtml"></h1>

        <button
          class="mt-8 bg-green-500 hover:bg-black text-white px-8 py-3 rounded-md inline-flex items-center gap-2 text-xl"
        >
          All Cases
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none"
               viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>
      </div>

    
      <div
        data-obsid="right"
        :class="rightIn ? 'animate-slide-in-right' : 'opacity-0 translate-x-5'"
        class="lg:col-span-5"
      >
        <div class="relative ml-auto max-w-[560px]">
          <div class="rounded-md shadow-2xl overflow-hidden bg-green-500">
            <div class="p-8 md:p-10">
              <p class="text-white/80 text-sm mb-2">{{ currentSlide.cardKicker }}</p>
              <h2 class="text-white text-2xl md:text-3xl font-bold leading-tight"
                  v-html="currentSlide.cardTitleHtml"></h2>
            </div>

            <div class="bg-neutral-900/95 text-white px-6 md:px-8 py-5 flex items-center justify-between">
              <div class="flex items-center gap-3">
                <span class="inline-flex w-6 h-6 rounded-full bg-white/10 items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 5v14M19 12H5"/>
                  </svg>
                </span>
                <span class="font-medium">Submit Now</span>
              </div>
              <button
                class="shrink-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"
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

  
  <button @click.stop="goPrev"
    class="absolute left-[30px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-black/70 text-white flex items-center justify-center"
    aria-label="Previous slide">
    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M15 19l-7-7 7-7"/>
    </svg>
  </button>
  <button @click.stop="goNext"
    class="absolute right-[30px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-black/70 text-white flex items-center justify-center"
    aria-label="Next slide">
    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M9 5l7 7-7 7"/>
    </svg>
  </button>
</section> -->
<section class="relative min-h-screen flex items-center overflow-hidden">
  <!-- Background + overlay -->
  <div
    class="absolute inset-0 bg-cover bg-center bg-no-repeat animate-kenburns transition-all duration-[2000ms]"
    :style="{ backgroundImage: `url(${currentSlide.bg})` }"
  >
    <div class="absolute inset-0 bg-black/40"></div>
  </div>

  <!-- Content -->
  <div class="relative z-10 mx-auto px-4">
    <div class="grid lg:grid-cols-12 gap-32 items-center">
      <!-- Left: text -->
      <div
        data-obsid="left"
        :class="leftIn ? 'animate-fade-up' : 'opacity-0 translate-y-4'"
        class="lg:col-span-7 text-white"
      >
        <p class="text-white/80 mb-4">{{ currentSlide.kicker }}</p>
        <h1 class="text-4xl md:text-7xl font-extrabold leading-tight tracking-tight drop-shadow"
            v-html="currentSlide.titleHtml"></h1>

        <button
          class="mt-8 bg-green-500 hover:bg-black text-white px-8 py-3 rounded-md inline-flex items-center gap-2 text-xl"
        >
          All Cases
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
        <div class="relative ml-auto max-w-[560px]">
          <div class="rounded-md shadow-2xl overflow-hidden bg-green-500">
            <div class="p-8 md:p-10">
              <p class="text-white/80 text-sm mb-2">{{ currentSlide.cardKicker }}</p>
              <h2 class="text-white text-2xl md:text-3xl font-bold leading-tight"
                  v-html="currentSlide.cardTitleHtml"></h2>
            </div>

            <!-- Bottom dark strip -->
            <div class="bg-neutral-900/95 text-white px-6 md:px-8 py-5 flex items-center justify-between">
              <div class="flex items-center gap-3">
                <span class="inline-flex w-6 h-6 rounded-full bg-white/10 items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 5v14M19 12H5"/>
                  </svg>
                </span>
                <span class="font-medium">Submit Now</span>
              </div>
              <button
                class="shrink-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"
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

  <!-- ✅ Bottom strip: 3 text + 3 image cards -->
  <div class="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 px-4">
    <div class="mx-auto max-w-7xl">
      <div class="flex gap-6 overflow-x-auto pb-2 snap-x snap-mandatory">
        <!-- TEXT 1 -->
        <a href="#"
           class="snap-start shrink-0 w-[320px] bg-black/80 hover:bg-black/90 text-white rounded-md p-6 transition-colors">
          <div class="text-lg font-semibold leading-snug">Core Value We<br/>Provide</div>
          <div class="mt-6 inline-flex items-center gap-2 text-green-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M7 17L17 7M7 7h10v10"/>
            </svg>
          </div>
        </a>

        <!-- IMAGE 1 -->
        <a href="#"
           class="snap-start shrink-0 w-[320px] bg-black/80 rounded-md overflow-hidden group">
          <div class="h-[150px] overflow-hidden">
            <img src="/images/n1.jpg" alt="thumb 1"
                 class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
          </div>
        </a>

        <!-- TEXT 2 -->
        <a href="#"
           class="snap-start shrink-0 w-[320px] bg-black/80 hover:bg-black/90 text-white rounded-md p-6 transition-colors">
          <div class="text-lg font-semibold leading-snug">Products And<br/>Accessories</div>
          <div class="mt-6 inline-flex items-center gap-2 text-green-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M7 17L17 7M7 7h10v10"/>
            </svg>
          </div>
        </a>

        <!-- IMAGE 2 -->
        <a href="#"
           class="snap-start shrink-0 w-[320px] bg-black/80 rounded-md overflow-hidden group">
          <div class="h-[150px] overflow-hidden">
            <img src="/images/n2.jpg" alt="thumb 2"
                 class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
          </div>
        </a>

        <!-- TEXT 3 -->
        <a href="#"
           class="snap-start shrink-0 w-[320px] bg-black/80 hover:bg-black/90 text-white rounded-md p-6 transition-colors">
          <div class="text-lg font-semibold leading-snug">Global Fabrics<br/>Distributor</div>
          <div class="mt-6 inline-flex items-center gap-2 text-green-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M7 17L17 7M7 7h10v10"/>
            </svg>
          </div>
        </a>

        <!-- IMAGE 3 -->
        <a href="#"
           class="snap-start shrink-0 w-[320px] bg-black/80 rounded-md overflow-hidden group">
          <div class="h-[150px] overflow-hidden">
            <img src="/images/n3.jpg" alt="thumb 3"
                 class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
          </div>
        </a>
      </div>
    </div>
  </div>

  <!-- Nav arrows -->
  <button @click.stop="goPrev"
    class="absolute left-[30px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-black/70 text-white flex items-center justify-center"
    aria-label="Previous slide">
    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M15 19l-7-7 7-7"/>
    </svg>
  </button>
  <button @click.stop="goNext"
    class="absolute right-[30px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-black/70 text-white flex items-center justify-center"
    aria-label="Next slide">
    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M9 5l7 7-7 7"/>
    </svg>
  </button>
</section>



 <!-- Hero-like section -->
<section class="relative min-h-165 flex items-center overflow-hidden bg-white">
  <div class="container mx-auto px-4 w-full">
    <div class="grid md:grid-cols-12 items-center gap-10 py-12 md:py-20">

      <!-- Left: big image -->
      <div class="md:col-span-6">
        <figure class="aspect-[16/11] rounded-xl overflow-hidden shadow-sm">
          <!-- Rasm manzilini o'zingiznikiga almashtiring -->
          <img
            src="/images/s2.jpg"
            alt="Textile factory"
            class="w-full h-full object-cover"
          />
        </figure>
      </div>

      <!-- Right: text & CTA -->
      <div class="md:col-span-6 md:pl-10 md:border-l md:border-gray-200">
        <h1 class="text-3xl md:text-5xl font-extrabold leading-tight text-gray-900">
          The Best Solution For All Textile Industries.
        </h1>

        <p class="mt-4 text-gray-600 max-w-2xl">
          We are delivering next-generation textile production processes that will be
          radically efficient & sustainable manufacturer.
        </p>

        <!-- CTA -->
        <a href="#"
           class="mt-8 inline-flex items-center gap-4 group">
          <span
            class="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center
                   transition-transform group-hover:scale-105 group-active:scale-95">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                 fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="w-6 h-6">
              <path d="M12 5v14M19 12H5" />
            </svg>
          </span>
          <span class="text-left">
            <span class="block font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
              View More!
            </span>
            <span class="block text-sm text-gray-500">About & Services</span>
          </span>
        </a>
      </div>

    </div>
  </div>
</section>
<section class="relative min-h-[300px] flex items-center overflow-hidden bg-gray-100">
  <div class="container mx-auto px-4 w-full">
    <div class="py-16 lg:py-20">

      <!-- Title + sub -->
      <h2 class="text-3xl md:text-5xl font-extrabold text-center text-gray-900">
        Top Production From Every Angle
      </h2>
      <p class="mt-4 max-w-3xl mx-auto text-center text-gray-600">
        Fablio weavers of designer of furnishing fabrics is a textile manufacturer. Fabrics are designed &
        woven at our own weaving mill.
      </p>

      <!-- 3 columns with images -->
      <div class="mt-12 grid md:grid-cols-3 gap-8 items-start">
  <div>
    <h3 class="text-xl font-semibold text-gray-900 mb-3 text-center md:text-left">Fabric Printing</h3>
    <figure class="group rounded-lg overflow-hidden shadow-sm">
      <img
        src="/images/1.jpg"
        alt="Fabric Printing"
        class="w-full h-[260px] object-cover transform-gpu transition-transform duration-500 ease-out group-hover:scale-110 motion-reduce:transition-none"
      />
    </figure>
  </div>

  <div>
    <h3 class="text-xl font-semibold text-gray-900 mb-3 text-center md:text-left">Fabric Dyeing</h3>
    <figure class="group rounded-lg overflow-hidden shadow-sm">
      <img
        src="/images/2.jpg"
        alt="Fabric Dyeing"
        class="w-full h-[260px] object-cover transform-gpu transition-transform duration-500 ease-out group-hover:scale-110 motion-reduce:transition-none"
      />
    </figure>
  </div>

  <div>
    <h3 class="text-xl font-semibold text-gray-900 mb-3 text-center md:text-left">Engineering</h3>
    <figure class="group rounded-lg overflow-hidden shadow-sm">
      <img
        src="/images/3.jpg"
        alt="Engineering"
        class="w-full h-[260px] object-cover transform-gpu transition-transform duration-500 ease-out group-hover:scale-110 motion-reduce:transition-none"
      />
    </figure>
  </div>
</div>


      <!-- Divider -->
      <div class="mt-12 border-t border-gray-200"></div>

      <!-- 4 feature cards with icons -->
  <!-- Card 1 -->
  <div class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
  <!-- 1 -->
  <div class="group bg-white rounded-lg shadow-sm border border-gray-200 p-10 text-center hover:shadow-md [perspective:1000px]">
    <img src="/icons/textile.svg" alt=""
         class="mx-auto w-16 h-16 mb-4 transform-gpu will-change-transform
                motion-reduce:animate-none
                group-hover:animate-[spin-y_1s_linear_1]" />
    <div class="font-semibold text-gray-900">Technology<br>Advisory</div>
  </div>

  <!-- 2 -->
  <div class="group bg-white rounded-lg shadow-sm border border-gray-200 p-10 text-center hover:shadow-md [perspective:1000px]">
    <img src="/icons/yarn.svg" alt=""
         class="mx-auto w-16 h-16 mb-4 transform-gpu will-change-transform
                motion-reduce:animate-none
                group-hover:animate-[spin-y_1s_linear_1]" />
    <div class="font-semibold text-gray-900">Capital<br>Investments</div>
  </div>

  <!-- 3 -->
  <div class="group bg-white rounded-lg shadow-sm border border-gray-200 p-10 text-center hover:shadow-md [perspective:1000px]">
    <img src="/icons/cloth.svg" alt=""
         class="mx-auto w-16 h-16 mb-4 transform-gpu will-change-transform
                motion-reduce:animate-none
                group-hover:animate-[spin-y_1s_linear_1]" />
    <div class="font-semibold text-gray-900">Finance &<br>Restructuring</div>
  </div>

  <!-- 4 -->
  <div class="group bg-white rounded-lg shadow-sm border border-gray-200 p-10 text-center hover:shadow-md [perspective:1000px]">
    <img src="/icons/portfolio.svg" alt=""
         class="mx-auto w-16 h-16 mb-4 transform-gpu will-change-transform
                motion-reduce:animate-none
                group-hover:animate-[spin-y_1s_linear_1]" />
    <div class="font-semibold text-gray-900">Portfolio<br>Managements</div>
  </div>
</div>

      <!-- CTA -->
      <div class="mt-10 flex justify-center">
        <a href="#" class="inline-flex items-center gap-4 group">
          <span class="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center transition-transform group-hover:scale-105 group-active:scale-95">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                 fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="w-6 h-6">
              <path d="M12 5v14M19 12H5"/>
            </svg>
          </span>
          <span class="text-left">
            <span class="block font-semibold text-gray-900 group-hover:text-green-600 transition-colors">View More!</span>
            <span class="block text-sm text-gray-500">About & Services</span>
          </span>
        </a>
      </div>

    </div>
  </div>
</section>
<!-- SECTION 1: Hero + Testimonial (overlap) -->
<!-- SECTION 1: Hero + Testimonial -->
<section class="relative bg-neutral-900 text-white overflow-visible  pb-36 md:pb-40">
  <!-- Backdrop + gradient overlay (orqa fon) -->
  <div class="absolute inset-0 -z-10">
    <div class="absolute inset-0 bg-cover bg-center"
         style="background-image:url('/images/hero1.jpg');"></div>
    <div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/10"></div>
  </div>

  <!-- Kontent -->
  <div class="relative container mx-auto px-4 py-16 lg:py-24">
    <div class="grid lg:grid-cols-12 gap-10 items-center">
      <!-- Chap matn -->
      <div class="lg:col-span-6">
        <h2 class="text-4xl md:text-5xl font-extrabold leading-tight">
          Classy Clothes More Than<br/> Just Stitched Fabric
        </h2>
        <p class="mt-4 text-white/80 max-w-2xl">
          Fablio is the largest peer-to-peer comparison initiative in the textile
          industry. It tracks the apparel material and home textile sector’s progress
          toward more sustainable materials sourcing.
        </p>

        <div class="mt-8 grid sm:grid-cols-2 gap-4">
          <div class="bg-white/10 backdrop-blur rounded-lg px-5 py-4 flex items-center gap-3">
            <span class="inline-flex w-6 h-6 rounded-full bg-green-500 items-center justify-center">›</span>
            <span class="font-semibold">Current Trends Market</span>
          </div>
          <div class="bg-white/10 backdrop-blur rounded-lg px-5 py-4 flex items-center gap-3">
            <span class="inline-flex w-6 h-6 rounded-full bg-green-500 items-center justify-center">›</span>
            <span class="font-semibold">Biological tested</span>
          </div>
        </div>

        <div class="mt-8 flex items-start gap-4">
          <img src="/icons/machine.png" class="w-10 h-10" alt="">
          <p class="text-white/90">
            We Have <span class="text-green-400 font-semibold underline">25+ Years</span> Of Experience For Give You
            Better Quality Results.
          </p>
        </div>
      </div>

      <!-- O‘ngdagi katta rasm (overlaydan ustida turadi) -->
      <div class="lg:col-span-6">
        <figure class="rounded-xl overflow-hidden shadow-2xl border-8 border-white/10 bg-white/5">
          <img src="/images/hero2.jpg" class="w-full h-[520px] object-cover" alt="">
        </figure>
      </div>
    </div>
  </div>

  <!-- Testimonial: past markazda, overlap -->
  <div class="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 z-30 w-full px-4">
    <div class="relative mx-auto max-w-xl bg-white text-gray-800 rounded-lg shadow-xl p-6 md:p-8">
      <!-- Yashil badge -->
      <div class="absolute -top-6 left-1/2 -translate-x-1/2
                  w-12 h-12 rounded-full bg-green-500 text-white
                  border-4 border-white shadow-md flex items-center justify-center text-xl">“”</div>

      <p class="text-gray-600 italic">
        «Fablio’s customer service is great. I was searching & found exactly what I wanted,
        was delivered quickly. Very good transaction…»
      </p>

      <div class="mt-6 flex items-center gap-3">
        <img src="/images/avatar.jpg" class="w-10 h-10 rounded-full" alt="">
        <div>
          <div class="font-semibold">Michal Wincent</div>
          <div class="text-sm text-gray-500">Customer</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- SECTION 2: Stats + Our Leadership Team -->
<section class="relative bg-white pt-32 md:pt-36 pb-16">
  <div class="container mx-auto px-4">
    <div class="grid lg:grid-cols-4 gap-8 items-start">
      <!-- LEFT AREA (3 columns) -->
      <div class="lg:col-span-3">
        <!-- Stats row -->
        <div class="grid sm:grid-cols-3 gap-8">
          <div>
            <div class="text-5xl md:text-6xl font-extrabold text-green-600">1460</div>
            <div class="mt-2 font-semibold">Projects And Software</div>
          </div>
          <div>
            <div class="text-5xl md:text-6xl font-extrabold text-green-600">4565</div>
            <div class="mt-2 font-semibold">Qualified Employers</div>
          </div>
          <div>
            <div class="text-5xl md:text-6xl font-extrabold text-green-600">1784</div>
            <div class="mt-2 font-semibold">Satisfied Clients</div>
          </div>
        </div>

        <!-- Members row -->
        <div class="mt-10 grid sm:grid-cols-2 gap-8">
          <!-- Member 1 -->
          <figure class="rounded-md overflow-hidden shadow-sm border border-gray-200">
            <img src="/images/member1.jpg" class="w-full h-[420px] object-cover" alt="Michal Wincent">
            <figcaption class="bg-gray-100 px-6 py-5 text-center">
              <div class="font-bold text-lg">Michal Wincent</div>
              <div class="text-sm text-gray-500">Product Designer</div>
            </figcaption>
          </figure>

          <!-- Member 2 -->
          <figure class="rounded-md overflow-hidden shadow-sm border border-gray-200">
            <img src="/images/member2.jpg" class="w-full h-[420px] object-cover" alt="Andrew Jackson">
            <figcaption class="bg-gray-100 px-6 py-5 text-center">
              <div class="font-bold text-lg">Andrew Jackson</div>
              <div class="text-sm text-gray-500">Material Designer</div>
            </figcaption>
          </figure>
        </div>
      </div>

      <!-- RIGHT GREEN PANEL -->
      <aside class="bg-green-500 text-white rounded-md p-8 lg:p-18 self-start">
        <h3 class="text-3xl md:text-4xl font-extrabold leading-tight">
          Our Leadership<br />Team
        </h3>
        <p class="mt-4 text-white/90">
          Unbeatable and more talented team work is the pillar of success & we’re thankful to the each member belongs to Fablio.
        </p>
        <a href="#" class="mt-5 inline-block underline font-semibold">Meet Our Team</a>

        <figure class="mt-6 rounded-md overflow-hidden">
          <img src="/images/team-small.jpg" class="w-full h-48 object-cover" alt="Team">
        </figure>
      </aside>
    </div>
  </div>
</section>

<section class="relative min-h-[70vh] md:min-h-[82vh] flex items-center overflow-hidden">
  <!-- BACKGROUND: 2 ta rasm, chap mirror -->
  <div class="absolute inset-0 grid grid-cols-2">
    <!-- Chap: oynalangan + qoramtir -->
    <div class="relative">
      <img src="/images/hero1.jpg"
           alt="" class="absolute inset-0 w-full h-full object-cover transform scale-x-[-1]">
      <div class="absolute inset-0 bg-black/70"></div>
    </div>
    <!-- O‘ng: oddiy rasm -->
    <div class="relative">
      <img src="/images/hero1.jpg"
           alt="" class="absolute inset-0 w-full h-full object-cover">
      <div class="absolute inset-0 bg-black/10"></div>
    </div>
  </div>

  <!-- Markaziy yumshatish (ixtiyoriy) -->
  <div class="absolute inset-0 pointer-events-none bg-gradient-to-r from-black/10 via-transparent to-black/10"></div>

  <!-- CONTENT -->
  <div class="relative mx-auto w-full px-[30px]">
    <div class="max-w-4xl text-white">
      <a href="#" class="inline-block text-sm md:text-base underline underline-offset-4 decoration-white/70">
        Good Look To Good Work
      </a>

      <h1 class="mt-4 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
        The <span class="text-green-500">ULTIMATE</span> Textile
        <br class="hidden md:block">
        Collection For <span class="text-green-500">THE CLASSY</span>
      </h1>

      <a href="#"
         class="mt-8 inline-flex items-center gap-3 px-6 py-3 rounded-md border border-white/70 text-white hover:bg-white/10">
        Discover More
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

/** Public papkadagi faylga to‘g‘ri URL yasash (GitHub Pages uchun ham to‘g‘ri) */
const asset = (p: string) =>
  `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`

// SLIDES: fon rasm + chap matn + o'ng kartadagi matn
const slides = [
  {
    bg: asset('images/hero1.jpg'),
    kicker: 'The Ultimate Textile Collection.',
    titleHtml: 'World Class Textile<br/>Engineering Solutions.',
    cardKicker: 'The intelligent way to plan.',
    cardTitleHtml: 'Our Reputation Is<br/>Built On Solid Ground',
  },
  {
    bg: asset('images/hero2.jpg'),
    kicker: 'The intelligent way to plan.',
    titleHtml: 'Our Reputation Is<br/>Built On Solid Ground',
    cardKicker: 'The intelligent way to plan.',
    cardTitleHtml: 'Our Reputation Is<br/>Built On Solid Ground',
  },
  // istasangiz yana qo‘shing
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
let timer: ReturnType<typeof setInterval> | null = null
function startAutoplay() {
  stopAutoplay()
  timer = setInterval(goNext, 12000)
}
function stopAutoplay() {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}
function restartAutoplay() {
  startAutoplay()
}
onMounted(startAutoplay)
onBeforeUnmount(stopAutoplay)

// (ixtiyoriy) kirish animlar uchun flaglar
const leftIn = ref(true)
const rightIn = ref(true)

// Kontakt form (agar kerak bo‘lsa)
interface ContactForm { name: string; email: string; phone: string; message: string }
const form = reactive<ContactForm>({ name: '', email: '', phone: '', message: '' })
function submitForm() { console.log('Form submitted:', form) }
</script>


