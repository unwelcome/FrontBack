<template>
  <aside class="flex flex-col gap-y-2 items-center w-64 flex-shrink-0 h-full cursor-default border-r-2 border-gray-300">
    <h2 class="mt-2 text-xl">Навигация</h2>
    <div class="flex flex-col gap-y-2 w-full">
      <div class="nav-link">
        <a @click="scrollToAnchor('#frontend')">FrontEnd</a>
      </div>
      <div class="nav-link">
        <a @click="scrollToAnchor('#backend')">BackEnd</a>
      </div>
    </div>
  </aside>
  <main 
    class="flex-grow flex flex-col items-center scrollable" 
    :style="{'height': getMainHeight + 'px'}">
    
    <div class="flex flex-col p-2 gap-y-8 w-10/12">
      <h2 class="main-title">Добро пожаловать на мой сайт</h2>

      <section class="flex flex-row items-center gap-x-4 cursor-default">
        <img class="w-28 h-28 rounded-xl" alt="Photo" src="../assets/images/profile.jpg" >
        <div>Меня зовут Жаров Степан Дмитриевич и я начинающий специалист по веб разработке.</div>
      </section>

      <section class="flex flex-col gap-y-2" id="frontend">
        <h3 class="section-title">FrontEnd</h3>
        <p class="section-text">
          Фронтенд разработчик - это архитектор цифрового мира, создающий визуальную оболочку веб-сайтов и приложений. Он работает на передовой линии, взаимодействуя с пользователем, и отвечает за то, чтобы интерфейс был не только привлекательным, но и интуитивно понятным и удобным.

          Его обязанности включают в себя: верстку страниц с помощью HTML и CSS, добавление интерактивности с помощью JavaScript, оптимизацию сайта для различных устройств и браузеров, а также тесное сотрудничество с backend-разработчиками и дизайнерами.
          
          Фронтенд разработчик должен быть креативным, обладать хорошим чувством стиля и внимания к деталям. Он должен разбираться в современных технологиях и быть готов постоянно учиться и развиваться.
          
          Важным качеством фронтенд разработчика является умение решать проблемы, находить оптимальные решения для реализации функционала и обеспечивать высокую скорость загрузки страниц.
          
          Он создает живой и интерактивный интерфейс, который делает интернет-сервисы более удобными и привлекательными для пользователей.
          
          В конечном итоге, фронтенд разработчик делает интернет-мир более красивым и доступным для всех.</p>
        <iframe 
          class="aspect-video w-96 rounded-xl"
          src="https://www.youtube.com/embed/YG8Vhz1pAsU?si=KFrwmkjI48Vexcf1" 
          title="Frontend course" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" 
          allowfullscreen>
        </iframe>
      </section>

      <section class="flex flex-col gap-y-2" id="backend">
        <h3 class="section-title">BackEnd</h3>
        <p class="section-text">
          Бэкенд-разработчик - это невидимый герой, который обеспечивает работу веб-приложений и сайтов “за кулисами”. Он создает логику, инфраструктуру и базы данных, которые управляют данными и взаимодействуют с пользователем.

          Бэкенд-разработчик работает с серверными языками программирования, такими как Python, Java, PHP, Ruby, и базами данных, чтобы создавать и поддерживать функционал приложения.
          
          Его задачи включают: разработку API (интерфейсов программирования), управление базами данных, обработку запросов от пользователей, обеспечение безопасности и стабильности системы.
          
          Он должен иметь глубокое понимание архитектуры приложений и уметь решать сложные технические задачи.
          
          Бэкенд-разработчик работает в тесной связи с фронтенд-разработчиками, чтобы обеспечить бесперебойную работу приложения и создать полноценный пользовательский опыт.
          
          Он отвечает за хранение данных, их обработку и выдачу результатов пользователям.
          
          Бэкенд-разработчик работает с большими объемами данных и должен иметь навыки в оптимизации и масштабировании систем.
          
          Он не видит фронтальную часть приложения, но он делает так, чтобы она работала правильно и быстро.
          
          Бэкенд-разработчик играет ключевую роль в создании и поддержке современных веб-приложений и сервисов.
          
          Его работа требует глубоких технических знаний и креативного подхода к решению сложных задач.
          
          Благодаря его работе, пользователи получают качественный и бесперебойный доступ к информации и функционалу онлайн-сервисов.</p>
        <iframe 
          class="aspect-video w-96 rounded-xl"  
          src="https://www.youtube.com/embed/243pQXC5Ebs?si=vrKvSwKFcCJyJzeG" 
          title="Backend course" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" 
          allowfullscreen>
        </iframe>
      </section>
    </div>
  </main>
</template>
<script lang="ts">
import { mapStores } from "pinia";
import { useElementsStore } from "../stores/elements";
import { SCROLL_TO_ANCHOR } from "@/helpers/constants";
export default {
  computed: {
    ...mapStores(useElementsStore),

    getMainHeight(){
      return this.elementsStore.windowHeight - this.elementsStore.headerHeight - this.elementsStore.footerHeight;
    }
  },
  methods: {
    scrollToAnchor(anchor: string){
      SCROLL_TO_ANCHOR(anchor);
    }
  }
};
</script>