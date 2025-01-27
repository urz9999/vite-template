<script setup lang="ts">

import {ref} from "vue";

defineProps<{ msg: string }>();
const testVarValue = ref<number>(100);

</script>

<template>
  <div class="mx-auto flex max-w-sm items-center">
    <h1 class="text-4xl font-bold text-black dark:text-white">{{ msg }}</h1>
    <p>This is a welcome component to verify that all the features are running correctly.</p>

    <h3 class="text-3xl font-light text-black dark:text-white">Typescript</h3>
    <code class="code">
      // If you see this variable value, then Typescript is enable correctly:
      const testVar = {{testVarValue}}
    </code>
  </div>

  <div class="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
    <img class="size-12 shrink-0" src="../../../assets/vue.svg" alt="ChitChat Logo" />
    <div>
      <div class="text-xl font-medium text-black dark:text-white">ChitChat</div>
      <p class="text-gray-500 dark:text-gray-400">You have a new message!</p>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
