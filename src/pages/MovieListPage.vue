<template>
  <q-page padding>
    <div class="text-h4 q-mb-md">Movie Explorer</div>

    <q-input v-model="search" label="Search Movies" filled @keyup.enter="loadMovies" />

    <q-btn label="Search" color="primary" class="q-mt-md" @click="loadMovies" />

    <div class="movie-grid-container">
      <div class="row q-col-gutter-md q-mt-lg">
        <div
          v-show="!loading"
          class="col-12 col-sm-6 col-md-3"
          v-for="movie in movies"
          :key="movie.imdbID"
        >
          <MovieCard :movie="movie" />
        </div>
        <div class="col-12" v-show="movies.length === 0 && !loading">
          <div class="text-subtitle1">No movies found. Try searching for something else.</div>
        </div>
      </div>
      <q-inner-loading
        :showing="loading"
        label="Loading movies..."
        label-class="text-primary"
        size="50px"
      />
    </div>

    <router-view v-slot="{ Component }">
      <q-dialog :model-value="Boolean(route.params.id)" @hide="closeDialog">
        <component :is="Component" />
      </q-dialog>
    </router-view>
  </q-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import MovieCard from '../components/MovieCard.vue';
import { searchMovies } from '../api/movieService';
import type { Movie } from '../types/movie';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const closeDialog = async () => {
  await router.push('/movie-list');
};

const loading = ref<boolean>(false);
const search = ref<string>('');
const movies = ref<Movie[]>([]);

const loadMovies = async (): Promise<void> => {
  loading.value = true;
  try {
    const data = await searchMovies(search.value);
    movies.value = data || [];
  } catch (error) {
    console.error('Error fetching movies:', error);
  } finally {
    loading.value = false;
  }
};

onMounted(loadMovies);
</script>

<style scoped>
.movie-grid-container {
  position: relative;
  min-height: 300px;
}
</style>
