<template>
  <footer class="flex flex-row b-top w-full h-10 flex-shrink-0 justify-center items-center cursor-default header-shadow" id="footer">
    <div class="mr-10">
      <p>&copy; Жаров Степан Дмитриевич, 2024</p>
    </div>
    <img class="w-8 h-8 cursor-pointer" alt="Telegram" src="../assets/icons/icon-telegram.svg">
  </footer>
</template>
<script lang="ts">
import { mapStores } from "pinia";
import { useElementsStore } from "../stores/elements";
export default {
  computed: {
    ...mapStores(useElementsStore),
  },
  mounted(){
    this.elementsStore.footerHeight = document.getElementById('footer')!.offsetHeight;
  }
};
</script>