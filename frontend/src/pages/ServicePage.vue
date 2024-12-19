<template>
  <Transition>
    <div v-if="showBlur" class="fixed opacity-40 bg-slate-900 w-full h-full inset-0 z-10"></div>
  </Transition>

  <Transition>
    <form 
      v-show="showFormFlag" 
      class="absolute left-1/2 top-1/2 flex flex-col items-center z-20 p-5 w-11/12 md:w-[500px] rounded-xl bg-gray-100"
      style="transform: translate(-50%, -50%);">

      <div @click="hideForm" class="absolute w-6 h-6 text-center right-2 top-1 cursor-pointer font-extrabold hover:text-red-500" id="form-close">✕</div>
      <h1 class="text-2xl">Разработка веб-приложения</h1>
      <p class="mt-2">Заполните форму и мы обязательно свяжемся с вами в ближайшее время для уточнения деталей</p>
      <div class="form-section mt-4">
        <label for="name">Как вас зовут</label>
        <input type="text" id="name" class="input" placeholder="Иванов Иван Иванович">
      </div>
      <div class="form-section">
        <label for="email">Ваш e-mail</label>
        <input type="email" id="email" class="input" placeholder="test@mail.ru">
      </div>
      <div class="form-section">
        <label for="phone">Телефон</label>
        <input type="tel" id="phone" class="input" placeholder="+7 999 999 99 99">
      </div>
      <div class="form-section">
        <label for="country">Страна</label>
        <select id="country" class="input">
          <option value="0">Россия</option>
          <option value="1">Америка</option>
          <option value="2">Беларусь</option>
          <option value="3">Казахстан</option>
          <option value="4">Турция</option>
          <option value="5">Другое</option>
        </select>
      </div>
      <div class="form-section">
        <label for="date">Дата</label>
        <input type="date" id="date" class="input">
      </div>
      <div class="form-section">
        <label for="comment">Комментарий</label>
        <textarea id="comment" class="input"></textarea>
      </div>
      <div class="form-section form-section-agree flex flex-row items-center">
        <input type="checkbox" id="agree" class="w-4 aspect-square" v-model="acceptedAgree">
        <label for="agree">Согласен на обработку моих персональных данных</label>
      </div>
      <input 
        type="submit" 
        id="form-buy-submit" 
        :disabled="!acceptedAgree"
        @click="sendForm"
        class="py-2 px-10 rounded-lg mt-4 text-white text-lg cursor-pointer transition-colors bg-sky-600 hover:bg-sky-500 active:bg-green-600 disabled:bg-gray-800 disabled:hover:bg-gray-800 disabled:active:bg-gray-800 disabled:cursor-default" 
        value="Отправить заявку" />
    </form>
  </Transition>

  <aside class="flex flex-col gap-y-2 items-center w-64 flex-shrink-0 h-full cursor-default border-r-2 border-gray-300">
    <h2 class="mt-2 text-xl">Навигация</h2>
    <div class="flex flex-col gap-y-2 w-full">
      <div class="nav-link">
        <a @click="scrollToAnchor('#WebDev')">Web Development</a>
      </div>
      <div class="nav-link">
        <a @click="scrollToAnchor('#development')">Development</a>
      </div>
      <div class="nav-link">
        <a @click="scrollToAnchor('#couch')">Couching</a>
      </div>
      <div class="nav-link">
        <a @click="scrollToAnchor('#consultation')">Consultations</a>
      </div>
      <div class="nav-link">
        <a @click="scrollToAnchor('#success')">Success</a>
      </div>
    </div>
  </aside>

  <main 
    class="flex-grow flex flex-col items-center scrollable" 
    :style="{'height': getMainHeight + 'px'}">
    
    <div class="flex flex-col p-2 gap-y-8 w-10/12">
      <h2 class="main-title">Разработка веб приложений</h2>

      <section class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 my-3">
        <div 
          v-for="item of getProjectSites" 
          @click="showForm"
          class="flex flex-col justify-start items-center rounded-xl p-3 cursor-default bg-gray-200 border-solid border-2 border-gray-300">
          
          <img class="aspect-video rounded-xl border border-gray-400" alt="Portfolio site" :src="createUrl(item.src)">
          <p class="my-3 ">{{ item.title }}</p>
          <button class="py-2 px-6 rounded-xl text-white text-lg transition-colors bg-sky-600 hover:bg-sky-500 active:bg-green-500">Заказать</button>
        </div>
      </section>

      <section class="section" id="development">
        <p class="section-title">Разработка</p>
        <p class="section-text">
          Партнерский опыт: Используйте коллективные знания разработчика, нацеленного на успех вашего проекта.
          Комплексные решения: от разработки концепции до реализации, применяйте целостный подход к разработке.
          Инновационный подход: Привносите творческий подход и свежие перспективы в свои проекты для достижения непревзойденных результатов.
          Примите участие в совместном развитии и станьте свидетелями того, как ваши идеи трансформируются в эффективные решения
        </p>
      </section>

      <section class="section" id="couch">
        <p class="section-title">Наставничество</p>
        <p class="section-text">
          Обеспечьте практическое наставничество, не знающее границ.
          Индивидуальное руководство: Воспользуйтесь индивидуальными занятиями, разработанными с учетом ваших целей и устремлений.
          Обмен знаниями: Воспользуйтесь богатыми отраслевыми знаниями и практическими ноу-хау.
          Навыки работы в реальном мире: Развивайте навыки, необходимые вашей команде для того, чтобы преуспеть в конкурентной среде.
          Независимо от того, новичок вы или опытный профессионал, рекомендации нашего разработчика помогут вам достичь новых высот. Вступите на путь мастерства и успеха – начните свое наставничество уже сегодня.
        </p>
      </section>

      <section class="section" id="consultation">
        <p class="section-title">Консультации</p>
        <p class="section-text">
          Ощутите, к чему может привести консультация. Вместе мы превратим препятствия в возможности и проложим путь к вашему успеху. Сделайте первый шаг уже сегодня.
        </p>
      </section>

      <section class="section" id="success">
        <p class="section-title">Next-Level Success</p>
        <p class="section-text">
          Поднимите ваши проекты на новые высоты. Обладая обширными знаниями, дальновидностью и страстью к инновациям, я - ключ к раскрытию неиспользованного потенциала. Развивайте свои начинания и ощутите преобразующую силу успеха следующего уровня - сотрудничайте уже сегодня!
        </p>
      </section>
    </div>
  </main>
</template>
<script lang="ts">
import { mapStores } from "pinia";
import { useElementsStore } from "../stores/elements";
import { useStatusWindowStore } from "@/stores/statusWindowStore";
import { PROJECTS_SITES, SCROLL_TO_ANCHOR, StatusCodes } from "@/helpers/constants";

export default {
  data(){
    return {
      showFormFlag: false,
      showBlur: false,
      acceptedAgree: false,
    }
  },
  computed: {
    ...mapStores(useElementsStore, useStatusWindowStore),

    getMainHeight(){
      return this.elementsStore.windowHeight - this.elementsStore.headerHeight - this.elementsStore.footerHeight;
    },
    getProjectSites(){
      return PROJECTS_SITES;
    }
  },
  mounted(){

  },
  methods: {
    scrollToAnchor(anchor: string){
      SCROLL_TO_ANCHOR(anchor);
    },
    createUrl(url: string){
      return new URL(url, import.meta.url).href;
    },
    showForm(){
      this.showFormFlag = true;
      this.showBlur = true;
    },
    hideForm(){
      this.showFormFlag = false;
      this.showBlur = false;
    },
    sendForm(){
      this.hideForm();
      this.acceptedAgree = false;
      this.statusWindowStore.showStatusWindow(StatusCodes.success, 'Завяление успешно отправлено!');
    }
  }
};
</script>