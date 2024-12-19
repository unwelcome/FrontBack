<template>
  <aside class="flex flex-col gap-y-2 items-center w-64 flex-shrink-0 h-full cursor-default border-r-2 border-gray-300">
    <h2 class="mt-2 text-xl">Навигация</h2>
    <div class="flex flex-col gap-y-2 w-10/12">
      <div class="nav-link" @click="scrollToAnchor('#table-lectures')">
        <a>Lectures</a>
      </div>
      <div class="nav-link" @click="scrollToAnchor('#table-practicals')">
        <a>Practicals</a>
      </div>
      <div class="nav-link" @click="scrollToAnchor('#adress-wrapper')">
        <a>Adress</a>
      </div>
      <div class="nav-link" @click="scrollToAnchor('#program')">
        <a>Programm</a>
      </div>
    </div>
  </aside>

  <main 
    class="flex-grow flex flex-col items-center scrollable" 
    :style="{'height': getMainHeight + 'px'}">
    
    <div class="flex flex-col p-2 gap-y-8 w-10/12">
      <h1 @click="sendAlert" class="main-title">Первый семестр</h1>

      <section class="section">
        <h3 class="section-title">Лекции</h3>
        <table class="section-table" id="table-lectures">
          <thead>
            <tr><td class="text-center">Номер</td><td class="text-center">Тема</td><td class="text-center">Посещение</td></tr>
          </thead>
          <tbody>

            <tr v-for="(item, index) of getTableLecturesFirstSemester">
              <td class="text-center">{{ index + 1 }}</td>
              <td>{{ item.title }}</td>
              <td class="text-center">
                <div class="center-center">
                  <input 
                    type="checkbox" 
                    class="checkbox-slider" 
                    :id="`checkbox-lectures-${index}`" 
                    :checked="item.attendance">
                </div>
              </td>
            </tr>

          </tbody>
        </table>
      </section>

      <section class="section">
        <h3 class="section-title">Практики</h3>
        <table class="section-table" id="table-practicals">
          <thead>
            <tr><td class="text-center">Номер</td><td class="text-center">Тема</td><td class="text-center">Посещение</td><td class="text-center">Выполнение</td></tr>
          </thead>
          <tbody>
            
            <tr v-for="(item, index) of getTablePracticalsFirstSemester">
              <td class="text-center">{{ index + 1 }}</td>
              <td>{{ item.title }}</td>
              <td class="text-center">
                <div class="text-center">
                  <input 
                    type="checkbox" 
                    class="checkbox-slider" 
                    :id="`checkbox-practicals-${index}-1`" 
                    :checked="item.attendance">
                </div>        
              </td>
              <td class="text-center">
                <div class="text-center">
                  <input 
                    type="checkbox" 
                    class="checkbox-slider" 
                    :id="`checkbox-practicals-${index}-2`" 
                    :checked="item.completed">
                </div>        
              </td>
            </tr>

          </tbody>
        </table>
        <div class="flex flex-row mt-2">
          <div @click="toggleSemester" class="px-4 py-2 rounded-lg cursor-pointer transition-colors bg-sky-400 hover:bg-sky-500 active:bg-green-500">
            <p v-if="selectedSemester === 1" class="text-white text-lg">Подсмотреть темы второго семестра</p>
            <p v-else class="text-white text-lg">Вернуться к первому семестру</p>
          </div>
        </div>
      </section>

      <section class="section">
        <h3 class="section-title">Задания к практикам</h3>
        <div class="w-full flex flex-col gap-y-2 p-4 bg-gray-200 rounded-xl" id="seminar-wrapper">

          <div v-for="(item, index) of getTablePracticalsFirstSemester" class="w-full rounded bg-gray-100">
            <div @click="selectTask(index)" class="px-2 py-1 rounded select-none cursor-pointer hover:bg-gray-200 active:bg-sky-100">{{ item.title }}</div>
            <div v-show="index === selectedTaskIndex" class="mx-2 my-1 text-sm">{{ item.task }}</div>
          </div>

        </div>
      </section>

      <section class="section">
        <h3 class="section-title">Красивые фото гор</h3>
        <div class="w-full flex flex-col justify-center items-center flex-shrink-0">
          <div class="flex flex-col sm:flex-row w-full gap-5 flex-shrink-0 justify-between lg:justify-center"  id="slider-cards">
            
            <div v-for="item of getsliderCards" 
              class="w-full sm:w-1/3 lg:w-1/4 h-full grid grid-cols-1 grid-flow-row p-2 rounded-lg bg-gray-200 cursor-default">

              <img class="aspect-video w-full rounded-md" alt="фото" :src="createUrl(item.img)"/>
              <h3 class="text-lg pt-3 pb-1">{{ item.title }}</h3>
              <p class="text-sm text-justify">{{ item.text }}</p>
            </div>

          </div>
          <div class="flex flex-row justify-center items-center gap-2 my-3">

            <div v-for="item of getsliderCards" 
              class="slider-nav slider-nav-selected" 
              :class="{'slider-nav-selected': currentSliderID === item.id}">
            </div>

          </div>
        </div>
      </section>

      <section class="section">
        <div class="flex flex-col w-full" id="adress-wrapper">
          <h3 class="section-title">Занятия проходят по адресу: г.Москва, пр-т Вернадского, д.78</h3>
          <iframe 
            class="w-full lg:w-3/4 aspect-video self-center"
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A4c1907becab9f992a82af685b6eb94a92e733d3b6050cd9fb928336fb5c7dc4c&amp;source=constructor" 
            frameborder="0"></iframe>
        </div>
      </section>

      <section class="section">
        <div class="flex flex-col w-full" id="program">
          <h3 class="section-title">Рабочая программа:</h3>
          <object :data="createUrl('../assets/files/example.pdf')" type="application/pdf" class="w-full lg:w-3/4 h-96 self-center">
            <embed :src="createUrl('../assets/files/example.pdf')" type="application/pdf" class="pdf-reader"/>
            <p>Ваш браузер не поддерживает просмотр PDF-файлов.</p>
          </object>
        </div>
      </section>
    </div>
  </main>
</template>
<script lang="ts">
import { mapStores } from "pinia";
import { useElementsStore } from "../stores/elements";
import { SCROLL_TO_ANCHOR, SLIDER_CARDS, TABLE_LECTURES_FIRST_SEMESTER, TABLE_PRACTICALS_FIRST_SEMESTER, TABLE_PRACTICALS_SECOND_SEMESTER } from "@/helpers/constants";

export default {
  data(){
    return {
      selectedTaskIndex: -1,
      currentSliderID: 1,
      selectedSemester: 1,
    }
  },
  computed: {
    ...mapStores(useElementsStore),

    getMainHeight(){
      return this.elementsStore.windowHeight - this.elementsStore.headerHeight - this.elementsStore.footerHeight;
    },

    getTableLecturesFirstSemester(){
      return TABLE_LECTURES_FIRST_SEMESTER;
    },
    getTablePracticalsFirstSemester(){
      return this.selectedSemester === 1 ? TABLE_PRACTICALS_FIRST_SEMESTER : TABLE_PRACTICALS_SECOND_SEMESTER;
    },
    getsliderCards(){
      return SLIDER_CARDS;
    },
  },
  mounted(){

  },
  methods: {
    scrollToAnchor(anchor: string){
      SCROLL_TO_ANCHOR(anchor);
    },
    selectTask(index: number){
      this.selectedTaskIndex = this.selectedTaskIndex === index ? -1 : index;
    },
    createUrl(url: string){
      return new URL(url, import.meta.url).href;
    },
    sendAlert(){
      alert('Вы нажали на заголовок h1! Жеееесть!');
    },
    toggleSemester(){
      this.selectedSemester = this.selectedSemester === 1 ? 2 : 1;
    }
  }
};
</script>
