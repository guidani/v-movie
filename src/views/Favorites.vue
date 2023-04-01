<template>
  <div class="container mx-auto min-h-full dark:text-white px-2">
    <h1>Favoritos</h1>
    <hr />
    <div v-for="favorite in localFavorites" class="flex gap-1 items-center">
      <button
        @click="() => removeFromFavorite(favorite.id)"
        class="dark:text-white flex items-center gap-1"
      >
        <BookmarkFill />
      </button>
      <p>{{ favorite.name }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import BookmarkFill from "../components/icons/bookmarkFill.vue";
import { useFavoriteStore } from "../stores/useFavoriteStore";

const { localFavorites, removeFromFavorite } = useFavoriteStore();
</script>

<style scoped></style>
