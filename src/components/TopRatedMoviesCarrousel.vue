<template>
  <Carrousel>
    <router-link
      v-for="movie in top_rated_movies"
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
import getTopRated from "../utils/getTopRated";

const top_rated_movies = ref<Movie[]>();

onMounted(async () => {
  const top_rated_movies_response = await getTopRated();
  top_rated_movies.value = top_rated_movies_response?.results;
});
</script>

<style scoped></style>
