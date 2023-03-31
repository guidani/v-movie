<template>
  <div class="container mx-auto px-2">
    <img
      :src="`https://image.tmdb.org/t/p/w500/${poster_path}`"
      alt="Movie poster"
      width="128"
    />
    <div class="movie-info dark:text-white">
      <h2>{{ title }}</h2>
      <p>Release Date: {{ release_date }}</p>
      <p>Overview: {{ overview }}</p>
      <p>Rating average: {{ vote_average }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps([
  "poster_path",
  "title",
  "release_date",
  "overview",
  "vote_average",
]);
</script>

<style scoped></style>
