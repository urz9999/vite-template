<script setup lang="ts">
defineProps<{ title: string }>();
</script>

<template>
  <header title="{{ title }}">
    <h1>{{ title }}</h1>
    <h1>{{ title }}</h1>
    <p>
      <strong>Current route path:</strong> {{ $route.fullPath }}
    </p>
    <nav>
      <RouterLink to="/">
        Go to First Page
      </RouterLink>
      <RouterLink to="/2">
        Go to Second Page
      </RouterLink>
      <RouterLink to="/3">
        Go to Third Page
      </RouterLink>
    </nav>
  </header>
</template>