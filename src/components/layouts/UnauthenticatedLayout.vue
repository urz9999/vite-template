<script setup lang="ts">
import MinimalFooterPartial from "../partials/MinimalFooterPartial.vue";
</script>

<template>
  <div class="container">
    <RouterView />
  </div>
  <MinimalFooterPartial />
</template>

<style scoped lang="scss">
.container {
  width: 100%;
  max-width: 400px;
  margin: 60px auto;
}
</style>