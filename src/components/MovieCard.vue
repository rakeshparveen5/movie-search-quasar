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
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps<{
  movie: Movie;
}>();

const goToDetail = async () => {
  await router.push({ name: 'movie-detail', params: { id: props.movie.imdbID } });
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
