<template>
  <aside class="flex flex-col gap-y-2 items-center w-64 flex-shrink-0 h-full cursor-default border-r-2 border-gray-300">
    <h2 class="mt-2 text-xl">Навигация</h2>
    <div class="flex flex-col gap-y-2 w-10/12">
      <div class="nav-link" @click="scrollToAnchor('#frontend')">
        <a>FrontEnd</a>
      </div>
      <div class="nav-link" @click="scrollToAnchor('#backend')">
        <a>BackEnd</a>
      </div>
    </div>
  </aside>
  <main 
    class="flex-grow flex flex-col items-center scrollable" 
    :style="{'height': getMainHeight + 'px'}">
    
    <div class="flex flex-col p-2 gap-y-8 w-10/12">
      <h1 @click="sendAlert" class="main-title">Добро пожаловать на мой сайт</h1>

      <section class="flex flex-row items-center gap-x-4 cursor-default">
        <img id="photo" class="w-32 h-32 rounded-xl transition-all" alt="Photo" :src="getProfileUrl">
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
          src="https://www.youtube.com/embed/67Eb2Ba46PE?si=3sIR0mfYfWjkPzd1" 
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
          src="https://www.youtube.com/embed/8ulA5-cb2po?si=7KECJvsN1fm7v7Qk" 
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
  data(){
    return {
      profileUrl: '../assets/images/profile.jpg',
    }
  },
  computed: {
    ...mapStores(useElementsStore),

    getMainHeight(){
      return this.elementsStore.windowHeight - this.elementsStore.headerHeight - this.elementsStore.footerHeight;
    },
    getProfileUrl(){
      return new URL(this.profileUrl, import.meta.url).href;
    }
  },
  mounted(){
    const photo = document.getElementById('photo');
    if(photo === null) return;

    photo.addEventListener('mouseover', this.scalePhoto);
    photo.addEventListener('mouseout', this.unscalePhoto);

    photo.addEventListener('click', this.swapProfilePhoto);

    photo.addEventListener('dblclick', this.alertProfile);
  },
  methods: {
    scrollToAnchor(anchor: string){
      SCROLL_TO_ANCHOR(anchor);
    },
    sendAlert(){
      alert('Вы нажали на заголовок h1! Жеееесть!');
    },
    scalePhoto(event: any){
      event.target.style.scale = 1.1;
    },
    unscalePhoto(event: any){
      event.target.style.scale = 1;
    },
    swapProfilePhoto(){
      this.profileUrl = this.profileUrl === '../assets/images/profile.jpg' ? '../assets/images/profile-second.jpg' : '../assets/images/profile.jpg';
    },
    alertProfile(){
      alert('Не налегай, у меня не так много любимых преподавателей!');
    }
  },
  unmounted() {
    const photo = document.getElementById('photo');
    if(photo === null) return;

    photo.removeEventListener('mouseover', this.scalePhoto);
    photo.removeEventListener('mouseout', this.unscalePhoto);

    photo.removeEventListener('click', this.swapProfilePhoto);

    photo.removeEventListener('dblclick', this.alertProfile);
  },
};
</script>