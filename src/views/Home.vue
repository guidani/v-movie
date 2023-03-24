<template>
  <h1 class="text-2xl">Filmes Populares</h1>
  <div class="grade flex flex-wrap gap-2 justify-between">
    
      <router-link
        v-for="movie in movies"
        :to="{
          name: 'movie-details',
          params: {
            id: movie.id,
          },
        }"
      >
        <Portrait :title="movie?.title" :poster_path="movie?.poster_path" />
      </router-link>
    
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
