<template>
  <q-card style="min-width: 500px">
    <q-card-section class="row items-center">
      <div class="text-h6">
        {{ movie?.Title }}
      </div>

      <q-space />

      <q-btn icon="close" flat round @click="close" />
    </q-card-section>

    <q-separator />

    <q-card-section class="row q-col-gutter-md">
      <div class="col-4">
        <q-img :src="movie?.Poster" />
      </div>

      <div class="col-8">
        <div><b>Year:</b> {{ movie?.Year }}</div>
        <div><b>Genre:</b> {{ movie?.Genre }}</div>
        <div><b>Actors:</b> {{ movie?.Actors }}</div>

        <div class="q-mt-md">
          {{ movie?.Plot }}
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getMovieDetails } from 'src/api/movieService';
import type { MovieDetail } from 'src/types/movie';

const route = useRoute();
const router = useRouter();

const movie = ref<MovieDetail | null>(null);

const close = () => {
  router.back();
};

onMounted(async () => {
  const id = route.params.id as string;

  movie.value = await getMovieDetails(id);
});
</script>
