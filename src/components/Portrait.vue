<template>
  <div
    class="movie-card border text-center flex flex-col justify-center items-center"
  >
    <img
      :src="`https://image.tmdb.org/t/p/w500/${poster_path}`"
      alt="Movie poster"
      width="256"
    />

    <p>{{ title }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps(["poster_path", "title"]);
</script>

<style scoped></style>
