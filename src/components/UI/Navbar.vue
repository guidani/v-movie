<template>
  <nav class="flex justify-between py-4 px-2">
    <RouterLink to="/" class="dark:text-white">V-Movies</RouterLink>
    <RouterLink to="/favorites" class="dark:text-white">Favoritos</RouterLink>
    <button @click="toggleDark()">{{ isDark ? "light" : "dark" }}</button>
  </nav>
</template>

<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";
import { RouterLink } from "vue-router";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<style scoped></style>
