<template>
  <div class="container mx-auto min-h-full dark:text-white px-2">
    <h1>Favoritos</h1>
    <hr />
    <p v-for="favorite in localFavorites">{{ favorite.name }}</p>
  </div>
</template>

<script setup lang="ts">
import { useFavoriteStore } from "../stores/useFavoriteStore";

const { localFavorites } = useFavoriteStore();
</script>

<style scoped></style>
