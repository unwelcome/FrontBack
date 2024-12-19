<template>
  <StatusWindow />
  <Header />
  <RouterView />
  <p>ну типа тест текст</p>
</template>
<script lang="ts">
import StatusWindow from "./entities/statusWindow.vue";
import Header from "./entities/header.vue";

export default {
  components: {
    StatusWindow,
    Header,
  },
};
</script>
