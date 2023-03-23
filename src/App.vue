<script setup lang="ts">
import { onMounted, ref } from "vue";
import MovieCard from "./components/MovieCard.vue";
import { Movie } from "./types/Movie";
import getData from "./utils/fetch";

const movie = ref<Movie>();

onMounted(async () => {
  const resp = await getData(
    "https://api.themoviedb.org/3/movie/550?api_key=eab74dfeeef5ea34b530f7322b1d4ef7"
  );
  console.log("🚀 ~ file: App.vue:8 ~ onMounted ~ resp:", resp);
  movie.value = resp;
});
</script>

<template>
  <div class="container mx-auto min-h-full bg-slate-400">
    <h1 class="text-4xl">Hello</h1>
  </div>
  <div>
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
