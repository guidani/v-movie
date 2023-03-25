<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import MovieCard from "../components/MovieDetails.vue";
import { Movie } from "../types/Movie";
import getData from "../utils/fetch";

const route = useRoute();
const movie = ref<Movie>();
const movie_id = route.params.id;
const URL = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${
  import.meta.env.VITE_API_KEY
}`;

onMounted(async () => {
  const resp = await getData(URL);
  movie.value = resp;
});
</script>

<template>
  <div class="container mx-auto min-h-full bg-slate-400">
    <h1 class="text-4xl">Detalhes</h1>
  </div>
  <div>
    <p>{{ $route.params.id }}</p>
    <MovieCard
      :overview="movie?.overview"
      :release_date="movie?.release_date"
      :title="movie?.title"
      :vote_average="movie?.vote_average"
      :poster_path="movie?.poster_path"
    />
  </div>
</template>

<style scoped></style>
