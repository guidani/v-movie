<template>
  <nav class="flex justify-between py-4 px-2">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/movie-details">Movie Details</RouterLink>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<style scoped></style>
