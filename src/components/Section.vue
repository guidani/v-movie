<template>
  <section>
    <h2 class="text-2xl dark:text-white">{{ title }}</h2>
    <slot></slot>
  </section>
</template>

<script setup lang="ts">
defineProps(["title"]);
</script>

<style scoped></style>
