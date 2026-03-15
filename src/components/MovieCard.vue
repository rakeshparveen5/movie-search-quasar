<template>
  <q-card class="movie-card" @click="goToDetail">
    <q-img :src="movie.Poster" />

    <q-card-section>
      <div class="text-subtitle1">
        {{ movie.Title }}
      </div>

      <div class="text-caption">
        {{ movie.Year }}
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import type { Movie } from '../types/movie';

const props = defineProps<{
  movie: Movie;
}>();

const goToDetail = () => {
  console.log('Go to detail page for movie:', props.movie);
};
</script>

<style scoped>
.movie-card {
  cursor: pointer;
  transition: transform 0.2s;
}

.movie-card:hover {
  transform: scale(1.05);
}
</style>
