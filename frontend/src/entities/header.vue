<template>
  <header class="flex flex-row justify-between items-center w-full" id="header">
    <div class="my-1 ml-5 flex-shrink-0">
      <img class="w-12 aspect-square" alt="Logo" src="../assets/icons/icon-logo.svg"/>
    </div>
    <div class="flex flex-col mr-5">
      <p>Группа ЭФБО-01-23</p>
      <p>Жаров Степан Дмитриевич</p>
    </div>
  </header>
  <nav class="w-full header-shadow" id="nav">
    <div class="flex flex-row items-center self-start h-10 gap-x-7 w-full justify-around ml-0 md:justify-start md:w-auto md:ml-5">
      <div
        @click="$router.push({name: 'MainPage'})" 
        class="nav-link" 
        :class="{'nav-clicked':$route.path === '/'}">
        
        <a>Главная</a>
      </div>
      <div
        @click="$router.push({name: 'FirstSemesterPage'})" 
        class="nav-link" 
        :class="{'nav-clicked':$route.path === '/first-semester'}">
        
        <a>Первый семестр</a>
      </div>
      <div
        
        class="nav-link nav-link-disabled" 
        :class="{'nav-clicked':$route.path === '/second-semester'}">
        
        <a>Второй семестр</a>
      </div>
      <div
        @click="$router.push({name: 'ServicePage'})" 
        class="nav-link" 
        :class="{'nav-clicked':$route.path === '/service'}">
        
        <a>Услуги</a>
      </div>
      <div
        @click="$router.push({name: 'LoginPage'})" 
        class="nav-link" 
        :class="{'nav-clicked':$route.path === '/login'}">
        
        <a>Авторизация</a>
      </div>
    </div>
  </nav>
</template>
<script lang="ts">
import { mapStores } from "pinia";
import { useElementsStore } from "../stores/elements";
export default {
  computed: {
    ...mapStores(useElementsStore),
  },
  mounted(){
    this.elementsStore.headerHeight = document.getElementById('header')!.offsetHeight + document.getElementById('nav')!.offsetHeight;
  },
};
</script>
