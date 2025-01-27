<script setup lang="ts">
import { Button } from "../../ui/button";

defineProps<{ msg: string }>(); // define input for the component
</script>

<template>
  <div class="">
    <h3 class="">{{ msg }}</h3>
    <div class="">
      <p>Welcome to Page 1!</p>
      <Button class="primary" size="sm" variant="default">Button</Button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
