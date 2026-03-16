<template>
  <q-page padding>
    <div class="text-h4 q-mb-md">About Movie Explorer</div>

    <div class="text-body1 q-mb-lg">
      Movie Explorer is a sample movie browsing application that allows users to search for movies
      and view detailed information about them. The application fetches movie data dynamically from
      the OMDb API and presents it in a responsive and user-friendly interface.
    </div>

    <q-card flat bordered class="q-pa-md">
      <div class="text-h6 q-mb-md">Features</div>

      <q-list dense>
        <q-item>
          <q-item-section avatar>
            <q-icon name="search" />
          </q-item-section>

          <q-item-section> Search movies by title </q-item-section>
        </q-item>

        <q-item>
          <q-item-section avatar>
            <q-icon name="movie" />
          </q-item-section>

          <q-item-section> Browse movie posters in a responsive grid layout </q-item-section>
        </q-item>

        <q-item>
          <q-item-section avatar>
            <q-icon name="info" />
          </q-item-section>

          <q-item-section> View movie details including genre, actors and plot </q-item-section>
        </q-item>

        <q-item>
          <q-item-section avatar>
            <q-icon name="router" />
          </q-item-section>

          <q-item-section> Route-driven movie detail dialog with cached movie list </q-item-section>
        </q-item>
      </q-list>
    </q-card>

    <q-card flat bordered class="q-pa-md q-mt-lg">
      <div class="text-h6 q-mb-md">Technologies Used</div>

      <q-list dense>
        <q-item>
          <q-item-section> Vue 3 (Composition API) </q-item-section>
        </q-item>

        <q-item>
          <q-item-section> Quasar Framework </q-item-section>
        </q-item>

        <q-item>
          <q-item-section> TypeScript </q-item-section>
        </q-item>

        <q-item>
          <q-item-section> Vue Router </q-item-section>
        </q-item>

        <q-item>
          <q-item-section> OMDb API for movie data </q-item-section>
        </q-item>
      </q-list>
    </q-card>

    <div class="text-caption text-grey q-mt-lg">
      This project demonstrates building a modern Vue application using component-based
      architecture, API integration, and responsive UI design.
    </div>
  </q-page>
</template>

<script setup lang="ts"></script>
