<template>
  <h1 class="text-2xl">Filmes Populares</h1>
  <div class="grade flex flex-wrap gap-2 justify-between">
    <div v-for="movie in movies">
      <p>{{ movie.id }}</p>
      <!-- <RouterLink to="/movie-details/movie.id">see more</RouterLink>
      <RouterLink :to=`"/movie-details/"${movie.id}`>see more</RouterLink> -->
      <Portrait :title="movie?.title" :poster_path="movie?.poster_path" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import Portrait from "../components/Portrait.vue";
import { Movie } from "../types/Movie";
import getPopularMovies from "../utils/getPopularMovies";

const movies = ref<Movie[]>();

onMounted(async () => {
  const moviesList = await getPopularMovies();
  movies.value = moviesList?.results;
});
</script>

<style scoped></style>
