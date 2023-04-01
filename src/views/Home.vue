<template>
  <!-- <Hero/> -->
  <Section :title="'Filmes Populares'">
    <PopularMoviesCarrousel />
  </Section>
  <Section :title="'Melhores Avaliados'">
    <TopRatedMoviesCarrousel />
  </Section>
</template>

<script setup lang="ts">
import PopularMoviesCarrousel from "../components/PopularMoviesCarrousel.vue";
import Section from "../components/Section.vue";
import TopRatedMoviesCarrousel from "../components/TopRatedMoviesCarrousel.vue";
</script>

<style scoped></style>
