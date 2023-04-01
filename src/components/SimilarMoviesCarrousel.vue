<template>
  <Carrousel>
    <router-link
      v-for="movie in similar_movies"
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
import { useRoute } from "vue-router";
import Carrousel from "../components/Carrousel.vue";
import Portrait from "../components/UI/Portrait.vue";
import { Movie } from "../types/Movie";
import getSimilarMovies from "../utils/getSimilarMovies";

defineProps(["movie_id"]);
const movie_id = ref<number>(0);
const similar_movies = ref<Movie[]>();

onMounted(async () => {
  const route = useRoute();
  const id = route.params.id;
  const similar_movies_response = await getSimilarMovies(Number(id));
  similar_movies.value = similar_movies_response?.results;
});
</script>

<style scoped></style>
