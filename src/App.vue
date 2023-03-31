<script setup lang="ts">
import Navbar from "./components/UI/Navbar.vue";
</script>

<template>
  <div class="w-full min-h-screen dark:bg-slate-900">
    <div class="container mx-auto">
      <Navbar />
      <RouterView></RouterView>
    </div>
  </div>
</template>

<style scoped></style>
