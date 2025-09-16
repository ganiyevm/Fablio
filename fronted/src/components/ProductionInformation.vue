<!-- <template>
  <div class="min-h-screen bg-white">
    <!-- <section
      class="relative h-75 bg-cover bg-center bg-no-repeat"
      :style="{ backgroundImage: `url('/HK1.webp')` }"
    >
      <div class="absolute inset-0 bg-black/50"></div>
      <div class="relative container mx-auto flex h-full items-center justify-center px-4">
        <div class="text-center text-white">
          <h1 class="mb-4 text-5xl font-bold">Производство</h1>
          <nav class="text-sm">
            <router-link
              to="/"
              class="underline-offset-4 transition-colors hover:text-amber-600 hover:underline"
            >
              Главная
            </router-link>
            <span class="mx-2">•</span>
            <span class="text-amber-600">Производство</span>
          </nav>
        </div>
      </div>
    </section> --
    <section class="py-12 md:py-16">
      <div class="container mx-auto px-4">
        <div v-if="currentProject" class="grid gap-8 lg:grid-cols-12">
          <div class="lg:col-span-8">
            <div class="overflow-hidden rounded-xl shadow-sm">
              <img
                :src="currentProject.mainImage"
                :alt="currentProject.project"
                class="h-[320px] w-full object-cover sm:h-[420px] lg:h-[500px]"
                @error="handleImageError"
              />
            </div>
          </div>

          <aside class="lg:col-span-4">
            <div class="overflow-hidden rounded-xl border border-gray-200 bg-gray-100">
              <div class="bg-green-600 py-7 text-center text-3xl font-semibold text-white">
                {{ currentProject.title }}
              </div>

              <div class="p-6 text-gray-600">
                <p>{{ currentProject.intro }}</p>
              </div>

              <div class="px-6 pb-10">
                <dl class="divide-y divide-gray-200 rounded-lg border border-gray-200 bg-white">
                  <div
                    v-for="row in infoRows"
                    :key="row.key"
                    class="grid grid-cols-3 gap-10 p-6 sm:grid-cols-4"
                  >
                    <dt class="col-span-1 font-semibold text-gray-700">{{ row.label }}:</dt>
                    <dd class="col-span-2 text-gray-700 sm:col-span-3">{{ row.value }}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </aside>
        </div>
        <div v-else class="text-center text-gray-600 py-20">
          <h2 class="text-3xl font-bold">Ma'lumot topilmadi!</h2>
          <p class="mt-4">Kechirasiz, ushbu jarayon haqida ma'lumot mavjud emas.</p>
        </div>

        <div v-if="currentProject" class="mt-12">
          <h2 class="text-3xl font-extrabold text-gray-900">Информация о процессе</h2>
          <p class="mt-4 max-w-4xl text-gray-600">
            {{ currentProject.about }}
          </p>
        </div>

        <div v-if="currentProject" class="mt-16">
          <h3 class="text-2xl font-extrabold text-gray-900">Результаты процесса</h3>
          <p class="mt-3 max-w-5xl text-gray-600">{{ currentProject.results }}</p>
        </div>

        <div v-if="currentProject" class="mt-16">
          <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div v-for="(service, index) in services" :key="service.title" class="text-center">
              <div class="relative mb-6">
                <div
                  class="relative mx-auto flex h-28 w-28 items-center justify-center rounded-lg bg-[#65B530] shadow-lg transition-shadow duration-300 hover:shadow-xl"
                >
                  <div
                    class="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-sm font-bold text-white"
                  >
                    {{ String(index + 1).padStart(2, '0') }}
                  </div>
                  <div v-html="service.icon" class="h-16 w-16 text-white"></div>
                </div>
              </div >
              <h3 class="mb-3 text-xl font-semibold text-gray-800">{{ service.title }}</h3>
              <p class="text-sm leading-relaxed text-gray-600">{{ service.description }}</p>
            </div>
          </div>
        </div>
        <hr class="my-6 border-black" />

        <div v-if="currentProject" class="mt-14">
          <h3 class="text-2xl font-extrabold text-gray-900">Производства</h3>
          <div class="flex justify-between items-center mt-6">
            <button
              :disabled="startIndex === 0"
              @click="prevCards"
              class="bg-white text-gray-800 py-2 px-6 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
            Предыдущий
            </button>
            <button
              :disabled="startIndex + 3 >= allRelatedWorks.length"
              @click="nextCards"
              class="bg-white text-gray-800 py-2 px-6 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
            Следующий
            </button>
          </div>
          
          <div class="mt-6 flex items-center justify-center">
            <div class="grid gap-8 md:grid-cols-3">
              <RouterLink
                v-for="card in displayedCards"
                :key="card.id"
                :to="{ name: 'ProductionInformation', params: { id: card.id } }"
                class="group overflow-hidden rounded-xl border border-gray-200 bg-white hover:shadow-lg transition-shadow"
                @click="scrollToTop"
              >
                <div class="relative">
                  <img 
                    :src="card.image" 
                    :alt="card.title" 
                    class="h-56 w-full object-cover"
                    @error="handleImageError"
                  />
                  <div
                    class="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/25"
                  ></div>
                  <div
                    class="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  >
                    <div class="pointer-events-auto flex gap-3">
                      <button
                        @click.prevent="openViewer(card.image, card.title)"
                        class="rounded-md bg-amber-500 p-3 shadow-md ring-1 ring-black/10 hover:bg-emerald-950"
                        aria-label="Preview image"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M21 21l-4.35-4.35M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"
                          />
                        </svg>
                      </button>
                      <RouterLink
                        :to="{ name: 'ProductionInformation', params: { id: card.id } }"
                        @click.stop="scrollToTop"
                        class="rounded-md bg-amber-500 p-3 shadow-md ring-1 ring-black/10 hover:bg-emerald-950"
                        aria-label="Open details"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path
                            d="M13.06 7.06a5.5 5.5 0 0 1 7.78 7.78l-2.12 2.12a5.5 5.5 0 0 1-7.78 0 1 1 0 1 1 1.42-1.42 3.5 3.5 0 0 0 4.95 0l2.12-2.12a3.5 3.5 0 1 0-4.95-4.95 1 1 0 0 1-1.42-1.41z"
                          />
                          <path
                            d="M10.94 16.94a5.5 5.5 0 0 1-7.78-7.78l2.12-2.12a5.5 5.5 0 0 1 7.78 0 1 1 0 1 1-1.42 1.42 3.5 3.5 0 0 0-4.95 0L4.57 10.6a3.5 3.5 0 1 0 4.95 4.95 1 1 0 1 1 1.42 1.41z"
                          />
                        </svg>
                      </RouterLink>
                    </div>
                  </div>
                </div>
                <div class="p-5">
                  <div class="text-lg font-semibold text-gray-900">{{ card.title }}</div>
                  <p class="mt-2 line-clamp-2 text-gray-600">{{ card.excerpt }}</p>
                </div>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <Transition name="fade">
    <div
      v-if="viewer.open"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-[1px]"
      @keydown.esc.window="closeViewer"
      @click.self="closeViewer"
    >
      <figure class="relative w-full max-w-5xl">
        <img :src="viewer.src" :alt="viewer.alt" class="h-auto w-full rounded-lg shadow-2xl" />
        <button
          @click="closeViewer"
          class="absolute -top-3 -right-3 rounded-full bg-white p-2 shadow ring-1 ring-black/10"
          aria-label="Close preview"
          title="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M6.225 4.811 4.811 6.225 10.586 12l-5.775 5.775 1.414 1.414L12 13.414l5.775 5.775 1.414-1.414L13.414 12l5.775-5.775-1.414-1.414L12 10.586z"
            />
          </svg>
        </button>
      </figure>
    </div>
  </Transition>
</template>

<script setup>
import { computed, reactive, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const projects = [
  {
    id: 1,
    title: 'Перемотка',
    mainImage: '/Fablio/images/P1.webp',
    intro: 'Суровая пряжа проходит проверку качества и перематывается на конусы, что обеспечивает стабильность и готовность к окрашиванию.',
    project: 'Перемотка суровой пряжи',
    category: 'Подготовка сырья',
    date: 'Проверка и перемотка пряжи на конусы',
    status: 'Выполняется ежедневно',
    about: 'Суровая пряжа проходит строгий контроль качества: проверяются неровности, узелки и разрывная нагрузка волокон. Затем она поступает на мотальные машины, где аккуратно перематывается на пластиковые конусы — это подготовительный этап, обеспечивающий равномерное крашение и высокое качество готовой продукции.',
    results: 'Перемотка позволяет добиться стабильного натяжения нити, идеальной основы для окрашивания и надежности в дальнейшем производстве.',
    services: [
      {
        title: "Контроль качества",
        description: "Проверка пряжи на наличие дефектов и соответствие стандартам прочности.",
        icon: icons.icon1,
      },
      {
        title: "Перемотка на конусы",
        description: "Формирование удобных мотков для стабильного процесса окрашивания.",
        icon: icons.icon2,
      },
      {
        title: "Равномерное натяжение",
        description: "Обеспечение правильной структуры и плотности нити.",
        icon: icons.icon3,
      },
      {
        title: "Подготовка к крашению",
        description: "Создание идеальной основы для дальнейших технологических этапов.",
        icon: icons.icon4,
      },
    ],
  },
  {
    id: 2,
    title: 'Крашение',
    mainImage: '/Fablio/images/P2.webp',
    intro: 'На этапе крашения пряжа окрашивается активным способом в выбранный оттенок, после чего образцы проходят лабораторные проверки на стойкость, равномерность и качество цвета.',
    project: 'Крашение',
    category: 'Подготовка пряжи',
    date: 'Активное крашение и контроль качества цвета',
    status: 'Выполняется ежедневно',
    about: 'На этапе крашения пряжа приобретает свой будущий оттенок. Мы используем активное крашение, которое обеспечивает насыщенность, равномерность и долговечность цвета. После окрашивания из каждой партии берутся образцы для лабораторных испытаний.',
    results: 'Крашение гарантирует яркость, стойкость и соответствие международным стандартам качества, что делает нашу пряжу надежным выбором для производства тканей и трикотажа.',
    services: [
      {
        title: "Проверка окрашенности",
        description: "Контроль равномерности цвета на каждой бобине.",
        icon: icons.icon1,
      },
      {
        title: "Устойчивость к трению (ISO 105-X12)",
        description: "Тестирование прочности цвета при механическом воздействии.",
        icon: icons.icon2,
      },
      {
        title: "Цветоустойчивость (ISO 105-C05)",
        description: "Проверка сохранения оттенка при стирке и уходе.",
        icon: icons.icon3,
      },
      {
        title: "Спиральность (ISO 3071)",
        description: "Измерение стабильности формы и структуры окрашенной пряжи.",
        icon: icons.icon4,
      },
    ],
  },
  {
    id: 3,
    title: 'Сушка',
    mainImage: '/Fablio/images/P3.webp',
    intro: 'После успешного прохождения контроля качества окрашенная пряжа отправляется на сушку, где сохраняются её прочность, мягкость и равномерность цвета.',
    project: 'Высушивание пряжи',
    category: 'Завершение окрашивания',
    date: 'Сушка окрашенной пряжи',
    status: 'Выполняется ежедневно',
    about: 'После положительных результатов, окрашенная пряжа поступает на сушку. Современное оборудование обеспечивает равномерное удаление влаги, сохраняя при этом прочность волокон, мягкость и стабильность оттенка. Бережная сушка гарантирует, что каждая бобина пряжи сохраняет свои свойства и готова к дальнейшей обработке.',
    results: 'Сушка позволяет закрепить цвет, сохранить текстуру и подготовить пряжу к следующему этапу производства.',
    services: [
      {
        title: "Равномерное высушивание",
        description: "Удаление влаги без потери качества и мягкости волокна.",
        icon: icons.icon1,
      },
      {
        title: "Сохранение цвета",
        description: " Закрепление насыщенности и стойкости окрашенной пряжи.",
        icon: icons.icon2,
      },
      {
        title: "Контроль влажности",
        description: "Поддержание оптимального уровня для дальнейшей обработки.",
        icon: icons.icon3,
      },
      {
        title: "Подготовка к следующему этапу ",
        description: "Создание идеальной базы для перемотки на картонные конусы.",
        icon: icons.icon4,
      },
    ],
  },
  {
    id: 4,
    title: 'Перемотка на картонные конусы',
    mainImage: '/Fablio/images/HK1.webp',
    intro: 'После сушки пряжа перематывается на картонные конусы и проходит проверку на прочность, стойкость цвета и равномерность окрашивания.',
    project: 'Перемотка',
    category: ' Подготовка к упаковке',
    date: 'Перемотка и контроль качества окрашенной пряжи',
    status: 'Выполняется ежедневно',
    about: 'После сушки пряжа перематывается на картонные конусы — это финальная подготовка перед упаковкой и отправкой заказчику. На данном этапе дополнительно отбираются образцы для проверки качества: проводится тестирование на устойчивость к трению, цветоустойчивость и равномерность окрашивания. Также выполняется отвязывание носков на специальном аппарате, чтобы убедиться в отсутствии непрокрашенных участков по всей площади бобин.',
    results: 'Перемотка на картонные конусы обеспечивает удобство дальнейшего использования, а контроль качества гарантирует стабильность цвета и соответствие международным стандартам.',
    services: [
      {
        title: "Устойчивость к трению (ISO 105-X12)",
        description: "Тестирование сохранности окраски при механическом воздействии.",
        icon: icons.icon1,
      },
      {
        title: "Цветоустойчивость (ISO 105-C05)",
        description: "Проверка стойкости оттенка к стирке и уходу.",
        icon: icons.icon2,
      },
      {
        title: "Проверка равномерности окраса",
        description: "Отвязывание носков для выявления непрокрашенных участков.",
        icon: icons.icon3,
      },
      {
        title: "Формирование на картонные конусы",
        description: "Удобная форма намотки для хранения, транспортировки и дальнейшего использования.",
        icon: icons.icon4,
      },
    ],
  },
  {
    id: 5,
    title: 'Лаборатория',
    mainImage: '/Fablio/images/P5.webp',
    intro: 'В лаборатории каждая партия пряжи проходит детальный контроль: проверку оттенка, устойчивости к трению и цветоустойчивости, что гарантирует стабильное качество продукции.',
    project: 'Лаборатория',
    category: 'Контроль качества',
    date: 'Тестирование окрашенной пряжи по международным стандартам',
    status: 'Выполняется ежедневно',
    about: 'В лаборатории каждая партия окрашенной пряжи проходит детальный контроль качества. Проверяются оттенок, равномерность окрашивания, устойчивость к трению и воздействию стирки. Используются международные стандарты испытаний, что гарантирует стабильность характеристик и высокое качество продукции.',
    results: 'Лабораторные испытания подтверждают соответствие пряжи требованиям клиентов и международным стандартам, обеспечивая надежность каждой партии.',
    services: [
      {
        title: "Проверка оттенка",
        description: "Контроль точности и равномерности цвета.",
        icon: icons.icon1,
      },
      {
        title: "Устойчивость к трению (ISO 105-X12)",
        description: "Тестирование прочности окраски при механическом воздействии.",
        icon: icons.icon2,
      },
      {
        title: "Цветоустойчивость (ISO 105-C05)",
        description: "Испытания стойкости оттенка при стирке и уходе.",
        icon: icons.icon3,
      },
      {
        title: "Соответствие стандартам",
        description: "Подтверждение качества продукции по международным методикам.",
        icon: icons.icon4,
      },
    ],
  },
  {
    id: 6,
    title: 'Упаковка',
    mainImage: '/Fablio/images/P6.jpg',
    intro: 'После окончательного контроля качества каждая бобина пряжи маркируется, герметично упаковывается и укладывается в картонные коробки, что обеспечивает надежную защиту и удобную идентификацию продукции',
    project: 'Упаковка',
    category: 'Завершающий этап производства',
    date: 'Маркировка и упаковка пряжи в индивидуальные и транспортные упаковки',
    status: 'Выполняется ежедневно',
    about: 'После получения положительных результатов контроля качества пряжа поступает на этап упаковки. Каждая бобина маркируется с указанием покупателя, номера пряжи, цвета, кода цвета и номера партии. Затем бобины упаковываются в целлофановые пакеты и штабелируются в картонные коробки. Коробки также маркируются данными о покупателе, номере пряжи, партии, цвете, а также весом нетто и брутто.',
    results: 'Упаковка обеспечивает надежную защиту пряжи при хранении и транспортировке, а также удобную идентификацию продукции по всей цепочке поставок.',
    services: [
      {
        title: "Маркировка бобин",
        description: "Нанесение данных о покупателе, номере пряжи, партии и цвете.",
        icon: icons.icon1,
      },
      {
        title: "Индивидуальная упаковка",
        description: "Каждая бобина герметично упаковывается в целлофановый пакет.",
        icon: icons.icon2,
      },
      {
        title: "Формирование коробок",
        description: "Бобины аккуратно штабелируются и укладываются в картонные коробки.",
        icon: icons.icon3,
      },
      {
        title: "Маркировка коробок",
        description: "Обозначение покупателя, номера партии, цвета и веса для точной идентификации.",
        icon: icons.icon4,
      },
    ],
  },
];

const allRelatedWorks = [
  { id: 1, title: 'Перемотка', image: '/Fablio/images/P1.webp', excerpt: 'Точная подготовка пряжи к безупречному окрашиванию.' },
  { id: 2, title: 'Крашение', image: '/Fablio/images/P2.webp', excerpt: 'Глубокие и стойкие цвета, рождающиеся в наших красильных цехах.' },
  { id: 3, title: 'Сушка', image: '/Fablio/images/P3.webp', excerpt: 'Мягкость и прочность сохраняются при бережной сушке.' },
  { id: 4, title: 'Перемотка на картонные конусы', image: '/Fablio/images/HK1.webp', excerpt: 'Удобный формат для вашего производства.' },
  { id: 5, title: 'Лаборатория', image: '/Fablio/images/P5.webp', excerpt: 'Гарантия идеального оттенка и качества каждой партии.' },
  { id: 6, title: 'Упаковка', image: '/Fablio/images/P6.jpg', excerpt: 'Надежная защита пряжи при хранении и транспортировке.' },
];



const startIndex = ref(0);

const currentProject = computed(() => {
  const projectId = Number(route.params.id);
  return projects.find(p => p.id === projectId);
});

const infoRows = computed(() => {
  if (!currentProject.value) return [];
  return [
    { key: 'project', label: 'Процесс', value: currentProject.value.project },
    { key: 'category', label: 'Категория', value: currentProject.value.category },
    { key: 'date', label: 'Этап', value: currentProject.value.date },
    { key: 'status', label: 'Статус', value: currentProject.value.status },
  ];
});

const displayedCards = computed(() => {
  return allRelatedWorks.slice(startIndex.value, startIndex.value + 3);
});

const nextCards = () => {
  if (startIndex.value + 3 < allRelatedWorks.length) {
    startIndex.value += 1;
  }
};

const prevCards = () => {
  if (startIndex.value > 0) {
    startIndex.value -= 1;
  }
};

const viewer = reactive({
  open: false,
  src: '',
  alt: '',
});

const openViewer = (src, alt) => {
  viewer.open = true;
  viewer.src = src;
  viewer.alt = alt;
};

const closeViewer = () => {
  viewer.open = false;
  viewer.src = '';
  viewer.alt = '';
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const handleImageError = (event) => {
  console.warn('Failed to load image:', event.target.src);
};

const icons = {
  
    icon1: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" width="64px" height="64px" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g transform="translate(1 1)"> <g> <path style="fill:#65b530;" d="M408.6,314.733c-2.56,0-5.973,0-8.533,0C447.853,319,485.4,359.107,485.4,408.6 s-37.547,88.747-85.333,93.867c2.56,0,5.973,0,8.533,0c52.053,0,93.867-41.813,93.867-93.867S460.653,314.733,408.6,314.733"></path> <path style="fill:#65b530;" d="M289.133,408.6V101.4H41.667v401.067H383C331.8,502.467,289.133,459.8,289.133,408.6"></path> </g> <path style="fill:#65b530;" d="M16.067,502.467h25.6V101.4h-25.6V502.467z"></path> <path style="fill:#65b530;" d="M357.4,502.467L357.4,502.467c-29.013,0-68.267-42.667-68.267-93.867V101.4 c0-52.053,39.253-93.867,68.267-93.867c51.2,0,93.867,41.813,93.867,93.867v307.2C451.267,459.8,408.6,502.467,357.4,502.467"></path> <path style="fill:#65b530;" d="M383,7.533c-4.267,0-8.533,0-12.8,0.853c45.227,6.827,81.067,46.08,81.067,93.013v307.2 c0,46.933-35.84,86.187-81.067,93.013c4.267,0.853,8.533,0.853,12.8,0.853c51.2,0,93.867-42.667,93.867-93.867V101.4 C476.867,49.347,434.2,7.533,383,7.533"></path> <path style="fill:#65b530;" d="M459.8,408.6c0,52.053-41.813,93.867-93.867,93.867s-76.8-41.813-76.8-93.867 s24.747-93.867,76.8-93.867S459.8,356.547,459.8,408.6"></path> <path style="fill:#65b530;" d="M383,314.733c-2.56,0-5.973,0-8.533,0C422.253,319,459.8,359.107,459.8,408.6 s-37.547,88.747-85.333,93.867c2.56,0,5.973,0,8.533,0c52.053,0,93.867-41.813,93.867-93.867S435.053,314.733,383,314.733"></path> <g> <path style="fill:#65b530;" d="M408.6,7.533c-4.267,0-8.533,0-12.8,0.853c45.227,6.827,81.067,46.08,81.067,93.013v307.2 c0,46.933-35.84,86.187-81.067,93.013c4.267,0.853,8.533,0.853,12.8,0.853c51.2,0,93.867-42.667,93.867-93.867V101.4 C502.467,49.347,459.8,7.533,408.6,7.533"></path> <path style="fill:#65b530;" d="M434.2,408.6c0,28.16-23.04,51.2-51.2,51.2c-28.16,0-51.2-23.04-51.2-51.2 c0-28.16,23.04-51.2,51.2-51.2C411.16,357.4,434.2,380.44,434.2,408.6"></path> </g> <path d="M383,511c-56.32,0-102.4-46.08-102.4-102.4V101.4C280.6,45.08,326.68-1,383-1s102.4,46.08,102.4,102.4v307.2 C485.4,464.92,439.32,511,383,511z M383,16.067c-46.933,0-85.333,38.4-85.333,85.333v307.2c0,46.933,38.4,85.333,85.333,85.333 s85.333-38.4,85.333-85.333V101.4C468.333,54.467,429.933,16.067,383,16.067z"></path> <path d="M383,511H7.533V92.867h290.133V408.6c0,46.933,38.4,85.333,85.333,85.333V511z M24.6,493.933h302.08 C299.373,475.16,280.6,444.44,280.6,408.6V109.933h-256V493.933z"></path> <path d="M383,511c-56.32,0-102.4-46.08-102.4-102.4S326.68,306.2,383,306.2s102.4,46.08,102.4,102.4S439.32,511,383,511z M383,323.267c-46.933,0-85.333,38.4-85.333,85.333s38.4,85.333,85.333,85.333s85.333-38.4,85.333-85.333 S429.933,323.267,383,323.267z"></path> <path d="M383,468.333c-33.28,0-59.733-26.453-59.733-59.733S349.72,348.867,383,348.867s59.733,26.453,59.733,59.733 S416.28,468.333,383,468.333z M383,365.933c-23.893,0-42.667,18.773-42.667,42.667c0,23.893,18.773,42.667,42.667,42.667 c23.893,0,42.667-18.773,42.667-42.667C425.667,384.707,406.893,365.933,383,365.933z"></path> <rect x="-0.144" y="152.605" transform="matrix(-0.8638 0.5039 -0.5039 -0.8638 302.0025 240.6284)" width="237.234" height="17.067"></rect> <rect x="-6.124" y="361.655" transform="matrix(-0.8596 0.5109 -0.5109 -0.8596 472.8969 610.4517)" width="317.429" height="17.066"></rect> <rect x="144.092" y="114.206" transform="matrix(-0.2425 0.9701 -0.9701 -0.2425 437.0251 168.7709)" width="17.066" height="281.586"></rect> <rect x="75.863" y="169.88" transform="matrix(-0.8541 0.5201 -0.5201 -0.8541 446.252 231.6459)" width="229.546" height="17.067"></rect> <rect x="150.826" y="207.835" transform="matrix(-0.8574 0.5146 -0.5146 -0.8574 530.1775 285.8472)" width="149.329" height="17.066"></rect> <rect x="225.059" y="246.255" transform="matrix(-0.8682 0.4961 -0.4961 -0.8682 611.436 347.2042)" width="69.116" height="17.066"></rect> <rect x="109.933" y="195.267" transform="matrix(-0.28 0.96 -0.96 -0.28 441.4933 272.7467)" width="17.067" height="213.333"></rect> <rect x="75.793" y="272.891" transform="matrix(-0.2983 0.9545 -0.9545 -0.2983 438.3662 366.8694)" width="17.067" height="143.364"></rect> <rect x="41.234" y="359.384" transform="matrix(-0.3511 0.9363 -0.9363 -0.3511 437.6999 487.9679)" width="17.066" height="72.531"></rect> <rect x="4.115" y="417.144" transform="matrix(-0.865 0.5018 -0.5018 -0.865 506.1517 715.1706)" width="305.498" height="17.067"></rect> <rect x="114.21" y="446.989" transform="matrix(-0.8654 0.5011 -0.5011 -0.8654 616.4062 745.4618)" width="187.735" height="17.067"></rect> <rect x="6.618" y="126.772" transform="matrix(-0.8517 0.524 -0.524 -0.8517 204.0341 212.8723)" width="130.558" height="17.066"></rect> </g> </g></svg>`,
    icon2: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full">
      <rect x="2" y="2" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"/>
      <circle cx="6" cy="6" r="1" fill="currentColor"/>
      <circle cx="12" cy="6" r="1" fill="currentColor"/>
      <circle cx="18" cy="6" r="1" fill="currentColor"/>
      <circle cx="6" cy="12" r="1" fill="currentColor"/>
      <circle cx="12" cy="12" r="1" fill="currentColor"/>
      <circle cx="18" cy="12" r="1" fill="currentColor"/>
      <circle cx="6" cy="18" r="1" fill="currentColor"/>
      <circle cx="12" cy="18" r="1" fill="currentColor"/>
      <circle cx="18" cy="18" r="1" fill="currentColor"/>
    </svg>`,

    icon3: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full">
      <path d="M3 12l3-3 3 3 3-3 3 3 3-3 3 3" fill="none" stroke="currentColor" stroke-width="2"/>
      <path d="M3 8l3-3 3 3 3-3 3 3 3-3 3 3" fill="none" stroke="currentColor" stroke-width="2"/>
      <path d="M3 16l3-3 3 3 3-3 3 3 3-3 3 3" fill="none" stroke="currentColor" stroke-width="2"/>
    </svg>`,
 
    icon4: `<svg viewBox="0 -12.5 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#65B530" stroke="#65B530"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>Iron</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Iron" sketch:type="MSLayerGroup" transform="translate(1.000000, 2.000000)" stroke="#ffffff" stroke-width="2"> <path d="M54,28 L56,28 C57.1,28 58,27.1 58,26 L58,7.2 L54.2,3.3 L20,8 C20,8 0,31.9 0,33 L0,34 C0,35.1 0.9,36 2,36 L47.9,36 C47.9,32 49,28 54,28 L54,28 Z" id="Shape" sketch:type="MSShapeGroup"> </path> <path d="M0,33 L47.6,33" id="Shape" sketch:type="MSShapeGroup"> </path> <path d="M51,16 C51,17.1 50.1,17 49,17 L21.4,17 C21.2,17.2 26,11 26,11 L49,8 C50.1,8 51,7.7 51,8.8 L51,16 L51,16 Z" id="Shape" sketch:type="MSShapeGroup"> </path> <path d="M33,15 L41,15" id="Shape" sketch:type="MSShapeGroup"> </path> <path d="M56.4,4.8 L59.1,1.7 C59.1,1.7 61.9,-1.5 61.9,0.6 C61.9,2.8 62,20.1 62,20.1" id="Shape" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>`,
  }

</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.container {
  max-width: 1200px;
}

* {
  transition: all 0.3s ease;
}

input:focus,
textarea:focus {
  outline: none;
}

.hover-lift:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
</style> -->



<template>
  <div class="min-h-screen bg-white">
    <section class="py-12 md:py-16">
      <div class="container mx-auto px-4">
        <div v-if="currentProject" class="grid gap-8 lg:grid-cols-12">
          <div class="lg:col-span-8">
            <div class="overflow-hidden rounded-xl shadow-sm">
              <img
                :src="currentProject.mainImage"
                :alt="currentProject.project"
                class="h-[320px] w-full object-cover sm:h-[420px] lg:h-[500px]"
                @error="handleImageError"
              />
            </div>
          </div>

          <aside class="lg:col-span-4">
            <div class="overflow-hidden rounded-xl border border-gray-200 bg-gray-100">
              <div class="bg-green-600 py-7 text-center text-3xl font-semibold text-white">
                {{ currentProject.title }}
              </div>
              <div class="p-6 text-gray-600">
                <p>{{ currentProject.intro }}</p>
              </div>
              <div class="px-6 pb-10">
                <dl class="divide-y divide-gray-200 rounded-lg border border-gray-200 bg-white">
                  <div
                    v-for="row in infoRows"
                    :key="row.key"
                    class="grid grid-cols-3 gap-10 p-6 sm:grid-cols-4"
                  >
                    <dt class="col-span-1 font-semibold text-gray-700">{{ row.label }}:</dt>
                    <dd class="col-span-2 text-gray-700 sm:col-span-3">{{ row.value }}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </aside>
        </div>
        <div v-else class="text-center text-gray-600 py-20">
          <h2 class="text-3xl font-bold">Ma'lumot topilmadi!</h2>
          <p class="mt-4">Kechirasiz, ushbu jarayon haqida ma'lumot mavjud emas.</p>
        </div>

        <div v-if="currentProject" class="mt-12">
          <h2 class="text-3xl font-extrabold text-gray-900">Информация о процессе</h2>
          <p class="mt-4 max-w-4xl text-gray-600">
            {{ currentProject.about }}
          </p>
        </div>

        <div v-if="currentProject" class="mt-16">
          <h3 class="text-2xl font-extrabold text-gray-900">Результаты процесса</h3>
          <p class="mt-3 max-w-5xl text-gray-600">{{ currentProject.results }}</p>
        </div>

        <div v-if="currentProject" class="mt-16">
          <h3 class="text-2xl font-extrabold text-gray-900">Услуги</h3>
          <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mt-6">
            <div v-for="(service, index) in currentProject.services" :key="service.title" class="text-center">
              <div class="relative mb-6">
                <div
                  class="relative mx-auto flex h-28 w-28 items-center justify-center rounded-lg bg-[#65B530] shadow-lg transition-shadow duration-300 hover:shadow-xl"
                >
                  <div
                    class="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-sm font-bold text-white"
                  >
                    {{ String(index + 1).padStart(2, '0') }}
                  </div>
                  <div v-html="service.icon" class="h-16 w-16 text-white"></div>
                </div>
              </div>
              <!-- <h3 class="mb-3 text-xl font-semibold text-gray-800">{{ service.title }}</h3> -->
              <h3 v-html="service.title" class="mb-3 text-xl font-semibold text-gray-800"></h3>
              <p class="text-sm leading-relaxed text-gray-600">{{ service.description }}</p>
            </div>
          </div>
        </div>
        <hr class="my-6 border-black" />

        <div v-if="currentProject" class="mt-14">
          <h3 class="text-2xl font-extrabold text-gray-900">Производства</h3>
          <div class="flex justify-between items-center mt-6">
            <button
              :disabled="startIndex === 0"
              @click="prevCards"
              class="bg-white text-gray-800 py-2 px-6 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Предыдущий
            </button>
            <button
              :disabled="startIndex + 3 >= allRelatedWorks.length"
              @click="nextCards"
              class="bg-white text-gray-800 py-2 px-6 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Следующий
            </button>
          </div>
          
          <div class="mt-6 flex items-center justify-center">
            <div class="grid gap-8 md:grid-cols-3">
              <RouterLink
                v-for="card in displayedCards"
                :key="card.id"
                :to="{ name: 'ProductionInformation', params: { id: card.id } }"
                class="group overflow-hidden rounded-xl border border-gray-200 bg-white hover:shadow-lg transition-shadow"
                @click="scrollToTop"
              >
                <div class="relative">
                  <img 
                    :src="card.image" 
                    :alt="card.title" 
                    class="h-56 w-full object-cover"
                    @error="handleImageError"
                  />
                  <div
                    class="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/25"
                  ></div>
                  <div
                    class="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  >
                    <div class="pointer-events-auto flex gap-3">
                      <button
                        @click.prevent="openViewer(card.image, card.title)"
                        class="rounded-md bg-amber-500 p-3 shadow-md ring-1 ring-black/10 hover:bg-emerald-950"
                        aria-label="Preview image"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M21 21l-4.35-4.35M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"
                          />
                        </svg>
                      </button>
                      <RouterLink
                        :to="{ name: 'ProductionInformation', params: { id: card.id } }"
                        @click.stop="scrollToTop"
                        class="rounded-md bg-amber-500 p-3 shadow-md ring-1 ring-black/10 hover:bg-emerald-950"
                        aria-label="Open details"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path
                            d="M13.06 7.06a5.5 5.5 0 0 1 7.78 7.78l-2.12 2.12a5.5 5.5 0 0 1-7.78 0 1 1 0 1 1 1.42-1.42 3.5 3.5 0 0 0 4.95 0l2.12-2.12a3.5 3.5 0 1 0-4.95-4.95 1 1 0 0 1-1.42-1.41z"
                          />
                          <path
                            d="M10.94 16.94a5.5 5.5 0 0 1-7.78-7.78l2.12-2.12a5.5 5.5 0 0 1 7.78 0 1 1 0 1 1-1.42 1.42 3.5 3.5 0 0 0-4.95 0L4.57 10.6a3.5 3.5 0 1 0 4.95 4.95 1 1 0 1 1 1.42 1.41z"
                          />
                        </svg>
                      </RouterLink>
                    </div>
                  </div>
                </div>
                <div class="p-5">
                  <div class="text-lg font-semibold text-gray-900">{{ card.title }}</div>
                  <p class="mt-2 line-clamp-2 text-gray-600">{{ card.excerpt }}</p>
                </div>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Transition name="fade">
      <div
        v-if="viewer.open"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-[1px]"
        @keydown.esc.window="closeViewer"
        @click.self="closeViewer"
      >
        <figure class="relative w-full max-w-5xl">
          <img :src="viewer.src" :alt="viewer.alt" class="h-auto w-full rounded-lg shadow-2xl" />
          <button
            @click="closeViewer"
            class="absolute -top-3 -right-3 rounded-full bg-white p-2 shadow ring-1 ring-black/10"
            aria-label="Close preview"
            title="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M6.225 4.811 4.811 6.225 10.586 12l-5.775 5.775 1.414 1.414L12 13.414l5.775 5.775 1.414-1.414L13.414 12l5.775-5.775-1.414-1.414L12 10.586z"
              />
            </svg>
          </button>
        </figure>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { computed, reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const icons = {
  icon1: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" width="64px" height="64px" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g transform="translate(1 1)"> <g> <path style="fill:#65b530;" d="M408.6,314.733c-2.56,0-5.973,0-8.533,0C447.853,319,485.4,359.107,485.4,408.6 s-37.547,88.747-85.333,93.867c2.56,0,5.973,0,8.533,0c52.053,0,93.867-41.813,93.867-93.867S460.653,314.733,408.6,314.733"></path> <path style="fill:#65b530;" d="M289.133,408.6V101.4H41.667v401.067H383C331.8,502.467,289.133,459.8,289.133,408.6"></path> </g> <path style="fill:#65b530;" d="M16.067,502.467h25.6V101.4h-25.6V502.467z"></path> <path style="fill:#65b530;" d="M357.4,502.467L357.4,502.467c-29.013,0-68.267-42.667-68.267-93.867V101.4 c0-52.053,39.253-93.867,68.267-93.867c51.2,0,93.867,41.813,93.867,93.867v307.2C451.267,459.8,408.6,502.467,357.4,502.467"></path> <path style="fill:#65b530;" d="M383,7.533c-4.267,0-8.533,0-12.8,0.853c45.227,6.827,81.067,46.08,81.067,93.013v307.2 c0,46.933-35.84,86.187-81.067,93.013c4.267,0.853,8.533,0.853,12.8,0.853c51.2,0,93.867-42.667,93.867-93.867V101.4 C476.867,49.347,434.2,7.533,383,7.533"></path> <path style="fill:#65b530;" d="M459.8,408.6c0,52.053-41.813,93.867-93.867,93.867s-76.8-41.813-76.8-93.867 s24.747-93.867,76.8-93.867S459.8,356.547,459.8,408.6"></path> <path style="fill:#65b530;" d="M383,314.733c-2.56,0-5.973,0-8.533,0C422.253,319,459.8,359.107,459.8,408.6 s-37.547,88.747-85.333,93.867c2.56,0,5.973,0,8.533,0c52.053,0,93.867-41.813,93.867-93.867S435.053,314.733,383,314.733"></path> <g> <path style="fill:#65b530;" d="M408.6,7.533c-4.267,0-8.533,0-12.8,0.853c45.227,6.827,81.067,46.08,81.067,93.013v307.2 c0,46.933-35.84,86.187-81.067,93.013c4.267,0.853,8.533,0.853,12.8,0.853c51.2,0,93.867-42.667,93.867-93.867V101.4 C502.467,49.347,459.8,7.533,408.6,7.533"></path> <path style="fill:#65b530;" d="M434.2,408.6c0,28.16-23.04,51.2-51.2,51.2c-28.16,0-51.2-23.04-51.2-51.2 c0-28.16,23.04-51.2,51.2-51.2C411.16,357.4,434.2,380.44,434.2,408.6"></path> </g> <path d="M383,511c-56.32,0-102.4-46.08-102.4-102.4V101.4C280.6,45.08,326.68-1,383-1s102.4,46.08,102.4,102.4v307.2 C485.4,464.92,439.32,511,383,511z M383,16.067c-46.933,0-85.333,38.4-85.333,85.333v307.2c0,46.933,38.4,85.333,85.333,85.333 s85.333-38.4,85.333-85.333V101.4C468.333,54.467,429.933,16.067,383,16.067z"></path> <path d="M383,511H7.533V92.867h290.133V408.6c0,46.933,38.4,85.333,85.333,85.333V511z M24.6,493.933h302.08 C299.373,475.16,280.6,444.44,280.6,408.6V109.933h-256V493.933z"></path> <path d="M383,511c-56.32,0-102.4-46.08-102.4-102.4S326.68,306.2,383,306.2s102.4,46.08,102.4,102.4S439.32,511,383,511z M383,323.267c-46.933,0-85.333,38.4-85.333,85.333s38.4,85.333,85.333,85.333s85.333-38.4,85.333-85.333 S429.933,323.267,383,323.267z"></path> <path d="M383,468.333c-33.28,0-59.733-26.453-59.733-59.733S349.72,348.867,383,348.867s59.733,26.453,59.733,59.733 S416.28,468.333,383,468.333z M383,365.933c-23.893,0-42.667,18.773-42.667,42.667c0,23.893,18.773,42.667,42.667,42.667 c23.893,0,42.667-18.773,42.667-42.667C425.667,384.707,406.893,365.933,383,365.933z"></path> <rect x="-0.144" y="152.605" transform="matrix(-0.8638 0.5039 -0.5039 -0.8638 302.0025 240.6284)" width="237.234" height="17.067"></rect> <rect x="-6.124" y="361.655" transform="matrix(-0.8596 0.5109 -0.5109 -0.8596 472.8969 610.4517)" width="317.429" height="17.066"></rect> <rect x="144.092" y="114.206" transform="matrix(-0.2425 0.9701 -0.9701 -0.2425 437.0251 168.7709)" width="17.066" height="281.586"></rect> <rect x="75.863" y="169.88" transform="matrix(-0.8541 0.5201 -0.5201 -0.8541 446.252 231.6459)" width="229.546" height="17.067"></rect> <rect x="150.826" y="207.835" transform="matrix(-0.8574 0.5146 -0.5146 -0.8574 530.1775 285.8472)" width="149.329" height="17.066"></rect> <rect x="225.059" y="246.255" transform="matrix(-0.8682 0.4961 -0.4961 -0.8682 611.436 347.2042)" width="69.116" height="17.066"></rect> <rect x="109.933" y="195.267" transform="matrix(-0.28 0.96 -0.96 -0.28 441.4933 272.7467)" width="17.067" height="213.333"></rect> <rect x="75.793" y="272.891" transform="matrix(-0.2983 0.9545 -0.9545 -0.2983 438.3662 366.8694)" width="17.067" height="143.364"></rect> <rect x="41.234" y="359.384" transform="matrix(-0.3511 0.9363 -0.9363 -0.3511 437.6999 487.9679)" width="17.066" height="72.531"></rect> <rect x="4.115" y="417.144" transform="matrix(-0.865 0.5018 -0.5018 -0.865 506.1517 715.1706)" width="305.498" height="17.067"></rect> <rect x="114.21" y="446.989" transform="matrix(-0.8654 0.5011 -0.5011 -0.8654 616.4062 745.4618)" width="187.735" height="17.067"></rect> <rect x="6.618" y="126.772" transform="matrix(-0.8517 0.524 -0.524 -0.8517 204.0341 212.8723)" width="130.558" height="17.066"></rect> </g> </g></svg>`,
  icon2: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full">
      <rect x="2" y="2" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"/>
      <circle cx="6" cy="6" r="1" fill="currentColor"/>
      <circle cx="12" cy="6" r="1" fill="currentColor"/>
      <circle cx="18" cy="6" r="1" fill="currentColor"/>
      <circle cx="6" cy="12" r="1" fill="currentColor"/>
      <circle cx="12" cy="12" r="1" fill="currentColor"/>
      <circle cx="18" cy="12" r="1" fill="currentColor"/>
      <circle cx="6" cy="18" r="1" fill="currentColor"/>
      <circle cx="12" cy="18" r="1" fill="currentColor"/>
      <circle cx="18" cy="18" r="1" fill="currentColor"/>
    </svg>`,
  icon3: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full">
      <path d="M3 12l3-3 3 3 3-3 3 3 3-3 3 3" fill="none" stroke="currentColor" stroke-width="2"/>
      <path d="M3 8l3-3 3 3 3-3 3 3 3-3 3 3" fill="none" stroke="currentColor" stroke-width="2"/>
      <path d="M3 16l3-3 3 3 3-3 3 3 3-3 3 3" fill="none" stroke="currentColor" stroke-width="2"/>
    </svg>`,
  icon4: `<svg viewBox="0 -12.5 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#65B530" stroke="#65B530"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>Iron</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Iron" sketch:type="MSLayerGroup" transform="translate(1.000000, 2.000000)" stroke="#ffffff" stroke-width="2"> <path d="M54,28 L56,28 C57.1,28 58,27.1 58,26 L58,7.2 L54.2,3.3 L20,8 C20,8 0,31.9 0,33 L0,34 C0,35.1 0.9,36 2,36 L47.9,36 C47.9,32 49,28 54,28 L54,28 Z" id="Shape" sketch:type="MSShapeGroup"> </path> <path d="M0,33 L47.6,33" id="Shape" sketch:type="MSShapeGroup"> </path> <path d="M51,16 C51,17.1 50.1,17 49,17 L21.4,17 C21.2,17.2 26,11 26,11 L49,8 C50.1,8 51,7.7 51,8.8 L51,16 L51,16 Z" id="Shape" sketch:type="MSShapeGroup"> </path> <path d="M33,15 L41,15" id="Shape" sketch:type="MSShapeGroup"> </path> <path d="M56.4,4.8 L59.1,1.7 C59.1,1.7 61.9,-1.5 61.9,0.6 C61.9,2.8 62,20.1 62,20.1" id="Shape" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>`,
};

const projects = [
  {
    id: 1,
    title: 'Перемотка',
    mainImage: '/Fablio/images/P1.webp',
    intro: 'Суровая пряжа проходит проверку качества и перематывается на конусы, что обеспечивает стабильность и готовность к окрашиванию.',
    project: 'Перемотка суровой пряжи',
    category: 'Подготовка сырья',
    date: 'Проверка и перемотка пряжи на конусы',
    status: 'Выполняется ежедневно',
    about: 'Суровая пряжа проходит строгий контроль качества: проверяются неровности, узелки и разрывная нагрузка волокон. Затем она поступает на мотальные машины, где аккуратно перематывается на пластиковые конусы — это подготовительный этап, обеспечивающий равномерное крашение и высокое качество готовой продукции.',
    results: 'Перемотка позволяет добиться стабильного натяжения нити, идеальной основы для окрашивания и надежности в дальнейшем производстве.',
    services: [
      {
        title: "Контроль качества",
        description: "Проверка пряжи на наличие дефектов и соответствие стандартам прочности.",
        icon: icons.icon1,
      },
      {
        title: "Перемотка на конусы",
        description: "Формирование удобных мотков для стабильного процесса окрашивания.",
        icon: icons.icon2,
      },
      {
        title: "Равномерное натяжение",
        description: "Обеспечение правильной структуры и плотности нити.",
        icon: icons.icon3,
      },
      {
        title: "Подготовка к крашению",
        description: "Создание идеальной основы для дальнейших технологических этапов.",
        icon: icons.icon4,
      },
    ],
  },
  {
    id: 2,
    title: 'Крашение',
    mainImage: '/Fablio/images/P2.webp',
    intro: 'На этапе крашения пряжа окрашивается активным способом в выбранный оттенок, после чего образцы проходят лабораторные проверки на стойкость, равномерность и качество цвета.',
    project: 'Крашение',
    category: 'Подготовка пряжи',
    date: 'Активное крашение и контроль качества цвета',
    status: 'Выполняется ежедневно',
    about: 'На этапе крашения пряжа приобретает свой будущий оттенок. Мы используем активное крашение, которое обеспечивает насыщенность, равномерность и долговечность цвета. После окрашивания из каждой партии берутся образцы для лабораторных испытаний.',
    results: 'Крашение гарантирует яркость, стойкость и соответствие международным стандартам качества, что делает нашу пряжу надежным выбором для производства тканей и трикотажа.',
    services: [
      {
        title: "Проверка окрашенности",
        description: "Контроль равномерности цвета на каждой бобине.",
        icon: icons.icon1,
      },
      {
        title: "Устойчивость к трению <br>(ISO 105-X12)",
        description: "Тестирование прочности цвета при механическом воздействии.",
        icon: icons.icon2,
      },
      {
        title: "Цветоустойчивость <br>(ISO 105-C05)",
        description: "Проверка сохранения оттенка при стирке и уходе.",
        icon: icons.icon3,
      },
      {
        title: "Спиральность (ISO 3071)",
        description: "Измерение стабильности формы и структуры окрашенной пряжи.",
        icon: icons.icon4,
      },
    ],
  },
  {
    id: 3,
    title: 'Сушка',
    mainImage: '/Fablio/images/P3.webp',
    intro: 'После успешного прохождения контроля качества окрашенная пряжа отправляется на сушку, где сохраняются её прочность, мягкость и равномерность цвета.',
    project: 'Высушивание пряжи',
    category: 'Завершение окрашивания',
    date: 'Сушка окрашенной пряжи',
    status: 'Выполняется ежедневно',
    about: 'После положительных результатов, окрашенная пряжа поступает на сушку. Современное оборудование обеспечивает равномерное удаление влаги, сохраняя при этом прочность волокон, мягкость и стабильность оттенка. Бережная сушка гарантирует, что каждая бобина пряжи сохраняет свои свойства и готова к дальнейшей обработке.',
    results: 'Сушка позволяет закрепить цвет, сохранить текстуру и подготовить пряжу к следующему этапу производства.',
    services: [
      {
        title: "Равномерное высушивание",
        description: "Удаление влаги без потери качества и мягкости волокна.",
        icon: icons.icon1,
      },
      {
        title: "Сохранение цвета",
        description: " Закрепление насыщенности и стойкости окрашенной пряжи.",
        icon: icons.icon2,
      },
      {
        title: "Контроль влажности",
        description: "Поддержание оптимального уровня для дальнейшей обработки.",
        icon: icons.icon3,
      },
      {
        title: "Подготовка к следующему этапу ",
        description: "Создание идеальной базы для перемотки на картонные конусы.",
        icon: icons.icon4,
      },
    ],
  },
  {
    id: 4,
    title: 'Перемотка на картонные конусы',
    mainImage: '/Fablio/images/HK1.webp',
    intro: 'После сушки пряжа перематывается на картонные конусы и проходит проверку на прочность, стойкость цвета и равномерность окрашивания.',
    project: 'Перемотка',
    category: ' Подготовка к упаковке',
    date: 'Перемотка и контроль качества окрашенной пряжи',
    status: 'Выполняется ежедневно',
    about: 'После сушки пряжа перематывается на картонные конусы — это финальная подготовка перед упаковкой и отправкой заказчику. На данном этапе дополнительно отбираются образцы для проверки качества: проводится тестирование на устойчивость к трению, цветоустойчивость и равномерность окрашивания. Также выполняется отвязывание носков на специальном аппарате, чтобы убедиться в отсутствии непрокрашенных участков по всей площади бобин.',
    results: 'Перемотка на картонные конусы обеспечивает удобство дальнейшего использования, а контроль качества гарантирует стабильность цвета и соответствие международным стандартам.',
    services: [
      {
        title: "Устойчивость к трению <br>(ISO 105-X12)",
        description: "Тестирование сохранности окраски при механическом воздействии.",
        icon: icons.icon1,
      },
      {
        title: "Цветоустойчивость <br>(ISO 105-C05)",
        description: "Проверка стойкости оттенка к стирке и уходу.",
        icon: icons.icon2,
      },
      {
        title: "Проверка равномерности окраса",
        description: "Отвязывание носков для выявления непрокрашенных участков.",
        icon: icons.icon3,
      },
      {
        title: "Формирование на картонные конусы",
        description: "Удобная форма намотки для хранения, транспортировки и дальнейшего использования.",
        icon: icons.icon4,
      },
    ],
  },
  {
    id: 5,
    title: 'Лаборатория',
    mainImage: '/Fablio/images/P5.webp',
    intro: 'В лаборатории каждая партия пряжи проходит детальный контроль: проверку оттенка, устойчивости к трению и цветоустойчивости, что гарантирует стабильное качество продукции.',
    project: 'Лаборатория',
    category: 'Контроль качества',
    date: 'Тестирование окрашенной пряжи по международным стандартам',
    status: 'Выполняется ежедневно',
    about: 'В лаборатории каждая партия окрашенной пряжи проходит детальный контроль качества. Проверяются оттенок, равномерность окрашивания, устойчивость к трению и воздействию стирки. Используются международные стандарты испытаний, что гарантирует стабильность характеристик и высокое качество продукции.',
    results: 'Лабораторные испытания подтверждают соответствие пряжи требованиям клиентов и международным стандартам, обеспечивая надежность каждой партии.',
    services: [
      {
        title: "Проверка оттенка",
        description: "Контроль точности и равномерности цвета.",
        icon: icons.icon1,
      },
      {
        title: "Устойчивость к трению <br>(ISO 105-X12)",
        description: "Тестирование прочности окраски при механическом воздействии.",
        icon: icons.icon2,
      },
      {
        title: "Цветоустойчивость <br>(ISO 105-C05)",
        description: "Испытания стойкости оттенка при стирке и уходе.",
        icon: icons.icon3,
      },
      {
        title: "Соответствие стандартам",
        description: "Подтверждение качества продукции по международным методикам.",
        icon: icons.icon4,
      },
    ],
  },
  {
    id: 6,
    title: 'Упаковка',
    mainImage: '/Fablio/images/P6.jpg',
    intro: 'После окончательного контроля качества каждая бобина пряжи маркируется, герметично упаковывается и укладывается в картонные коробки, что обеспечивает надежную защиту и удобную идентификацию продукции',
    project: 'Упаковка',
    category: 'Завершающий этап производства',
    date: 'Маркировка и упаковка пряжи в индивидуальные и транспортные упаковки',
    status: 'Выполняется ежедневно',
    about: 'После получения положительных результатов контроля качества пряжа поступает на этап упаковки. Каждая бобина маркируется с указанием покупателя, номера пряжи, цвета, кода цвета и номера партии. Затем бобины упаковываются в целлофановые пакеты и штабелируются в картонные коробки. Коробки также маркируются данными о покупателе, номере пряжи, партии, цвете, а также весом нетто и брутто.',
    results: 'Упаковка обеспечивает надежную защиту пряжи при хранении и транспортировке, а также удобную идентификацию продукции по всей цепочке поставок.',
    services: [
      {
        title: "Маркировка бобин",
        description: "Нанесение данных о покупателе, номере пряжи, партии и цвете.",
        icon: icons.icon1,
      },
      {
        title: "Индивидуальная упаковка",
        description: "Каждая бобина герметично упаковывается в целлофановый пакет.",
        icon: icons.icon2,
      },
      {
        title: "Формирование коробок",
        description: "Бобины аккуратно штабелируются и укладываются в картонные коробки.",
        icon: icons.icon3,
      },
      {
        title: "Маркировка коробок",
        description: "Обозначение покупателя, номера партии, цвета и веса для точной идентификации.",
        icon: icons.icon4,
      },
    ],
  },
];

const allRelatedWorks = [
  { id: 1, title: 'Перемотка', image: '/Fablio/images/P1.webp', excerpt: 'Точная подготовка пряжи к безупречному окрашиванию.' },
  { id: 2, title: 'Крашение', image: '/Fablio/images/P2.webp', excerpt: 'Глубокие и стойкие цвета, рождающиеся в наших красильных цехах.' },
  { id: 3, title: 'Сушка', image: '/Fablio/images/P3.webp', excerpt: 'Мягкость и прочность сохраняются при бережной сушке.' },
  { id: 4, title: 'Перемотка на картонные конусы', image: '/Fablio/images/HK1.webp', excerpt: 'Удобный формат для вашего производства.' },
  { id: 5, title: 'Лаборатория', image: '/Fablio/images/P5.webp', excerpt: 'Гарантия идеального оттенка и качества каждой партии.' },
  { id: 6, title: 'Упаковка', image: '/Fablio/images/P6.jpg', excerpt: 'Надежная защита пряжи при хранении и транспортировке.' },
];



const startIndex = ref(0);

const currentProject = computed(() => {
  const projectId = Number(route.params.id);
  return projects.find(p => p.id === projectId);
});

const infoRows = computed(() => {
  if (!currentProject.value) return [];
  return [
    { key: 'project', label: 'Процесс', value: currentProject.value.project },
    { key: 'category', label: 'Категория', value: currentProject.value.category },
    { key: 'date', label: 'Этап', value: currentProject.value.date },
    { key: 'status', label: 'Статус', value: currentProject.value.status },
  ];
});

const displayedCards = computed(() => {
  return allRelatedWorks.slice(startIndex.value, startIndex.value + 3);
});

const nextCards = () => {
  if (startIndex.value + 3 < allRelatedWorks.length) {
    startIndex.value += 1;
  }
};

const prevCards = () => {
  if (startIndex.value > 0) {
    startIndex.value -= 1;
  }
};

const viewer = reactive({
  open: false,
  src: '',
  alt: '',
});

const openViewer = (src, alt) => {
  viewer.open = true;
  viewer.src = src;
  viewer.alt = alt;
};

const closeViewer = () => {
  viewer.open = false;
  viewer.src = '';
  viewer.alt = '';
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const handleImageError = (event) => {
  console.warn('Failed to load image:', event.target.src);
};
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.container {
  max-width: 1200px;
}

* {
  transition: all 0.3s ease;
}

input:focus,
textarea:focus {
  outline: none;
}

.hover-lift:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
</style>
