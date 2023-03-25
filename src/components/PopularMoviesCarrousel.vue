<template>
  <Carrousel>
    <router-link
      v-for="movie in popular_movies"
      :to="{
        name: 'movie-details',
        params: {
          id: movie.id,
        },
      }"
    >
      <Portrait :title="movie?.title" :poster_path="movie?.poster_path" />
    </router-link>
  </Carrousel>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import Carrousel from "../components/Carrousel.vue";
import Portrait from "../components/UI/Portrait.vue";
import { Movie } from "../types/Movie";
import getPopularMovies from "../utils/getPopularMovies";

const popular_movies = ref<Movie[]>();

onMounted(async () => {
  const popular_movies_response = await getPopularMovies();
  // @ts-expect-error
  popular_movies.value = popular_movies_response?.results;
});
</script>

<style scoped></style>
