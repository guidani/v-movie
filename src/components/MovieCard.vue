<template>
  <div>
    <div class="movie-card">
      <img
        :src="`https://image.tmdb.org/t/p/w500/${poster_path}`"
        alt="Movie poster"
        width="128"
      />
      <div class="movie-info">
        <h2>{{ title }}</h2>
        <p>{{ release_date }}</p>
        <p>{{ overview }}</p>
        <p>Rating: {{ vote_average }}</p>
      </div>
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
