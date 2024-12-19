<template>
  <StatusWindow />
  <Header/>
  <div class="flex flex-col w-full h-full">
    <div class="w-full flex-grow flex flex-row items-start">
      <RouterView/>
    </div>
  </div>
  <Footer/>
</template>
<script lang="ts">
import { mapStores } from "pinia";
import { useElementsStore } from "./stores/elements";

import StatusWindow from "./entities/statusWindow.vue";
import Header from "./entities/header.vue";
import Footer from "./entities/footer.vue";

export default {
  components: {
    StatusWindow,
    Header,
    Footer,
  },
  computed: {
    ...mapStores(useElementsStore),
  },
  mounted(){
    this.elementsStore.addWindowListener();
  },
  unmounted() {
    this.elementsStore.removeWindowListener();
  },
};
</script>
<style v-global>

.v-enter-active,
.v-leave-active {
  transition: opacity 200ms ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.list-enter-active,
.list-leave-active {
  transition: all .5s ease-out;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>