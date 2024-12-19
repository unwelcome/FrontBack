import { defineStore } from "pinia";

export const useElementsStore = defineStore('elements', {
  state() {
    return{
      headerHeight: 0,
      footerHeight: 0,
      windowHeight: 0,
    }
  },
  actions: {
    updateWindowHeight(){
      this.windowHeight = window.innerHeight;
    },
    addWindowListener(){
      this.updateWindowHeight();

      window.addEventListener('resize', this.updateWindowHeight);
    },
    removeWindowListener(){
      window.removeEventListener('resize', this.updateWindowHeight);
    }
  }
});