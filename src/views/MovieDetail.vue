<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import MovieCard from "../components/MovieDetails.vue";
import Bookmark from "../components/icons/bookmark.vue";
import BookmarkFill from "../components/icons/bookmarkFill.vue";
import { useFavoriteStore } from "../stores/useFavoriteStore";
import { Movie } from "../types/Movie";
import getData from "../utils/fetch";

const route = useRoute();
const movie = ref<Movie>();
const movie_id = route.params.id;
const URL = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${
  import.meta.env.VITE_API_KEY
}`;
const { addToFavorite, removeFromFavorite, isFavorite } = useFavoriteStore();

onMounted(async () => {
  const resp = await getData(URL);
  movie.value = resp;
});
</script>

<template>
  <div class="container mx-auto min-h-full dark:text-white px-2">
    <h1 class="text-4xl">{{ movie?.title }}</h1>
  </div>
  <div class="my-2">
    <button
      @click="() => addToFavorite(movie?.title!)"
      class="dark:text-white flex items-center gap-1"
      v-if="isFavorite(movie?.title!) === false"
    >
      <Bookmark />
      Favoritar
    </button>
    <button
      @click="() => removeFromFavorite(movie?.title!)"
      class="dark:text-white flex items-center gap-1"
      v-if="isFavorite(movie?.title!)"
    >
      <BookmarkFill />
      Favoritado
    </button>
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
