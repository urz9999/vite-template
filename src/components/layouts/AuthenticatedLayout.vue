<script setup lang="ts">
import FooterPartial from "../partials/FooterPartial.vue";
import HeaderPartial from "../partials/HeaderPartial.vue";
</script>

<template>
  <HeaderPartial title="Vite + Vue Template" />
  <p>Authenticated Layout</p>
  <RouterView />
  <FooterPartial />
</template>

<style scoped lang="scss">

</style>