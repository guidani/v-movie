<template>
  <nav class="flex justify-between py-4 px-2">
    <RouterLink to="/" class="dark:text-white text-2xl">V-Movies</RouterLink>
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
