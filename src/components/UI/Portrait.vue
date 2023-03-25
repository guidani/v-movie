<template>
  <div
    class="movie-card border text-center flex flex-col justify-center items-center w-40"
  >
    <img
      :src="`https://image.tmdb.org/t/p/w500/${poster_path}`"
      alt="Movie poster"
      width="256"
    />
  </div>
</template>

<script setup lang="ts">
defineProps(["poster_path"]);
</script>

<style scoped></style>
