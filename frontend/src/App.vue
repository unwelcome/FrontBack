<template>
  <StatusWindow />
  <Header />
  <RouterView />
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
