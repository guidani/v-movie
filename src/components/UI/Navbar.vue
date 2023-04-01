<template>
  <nav class="flex justify-between py-4 px-2 items-center">
    <div class="flex gap-4">
      <RouterLink to="/" class="dark:text-white">V-Movies</RouterLink>
      <RouterLink to="/favorites" class="dark:text-white">Favoritos</RouterLink>
    </div>
    <button @click="toggleDark()">
      <span v-if="isDark">
        <MoonFill class="text-white" />
      </span>
      <span v-else>
        <SunFill />
      </span>
    </button>
  </nav>
</template>

<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";
import { RouterLink } from "vue-router";
import MoonFill from "../icons/MoonFill.vue";
import SunFill from "../icons/SunFill.vue";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<style scoped></style>
