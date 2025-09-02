<script setup>

import { onMounted, onUnmounted, onUpdated } from 'vue';
import HeaderComponent from '../components/HeaderComponent.vue';
import { useMovieStore } from '../stores/movie';

const movieStore = useMovieStore();

onMounted(() => {
  movieStore.fetchMovies();
});

onUpdated(() => {
  movieStore.fetchMovies();
});

onUnmounted(() => {
  movieStore.fetchMovies();
});

</script>

<template>

    <HeaderComponent />
    <div>
    <h1> Movies </h1>
    <ul>
        <li v-for="movie in movieStore.movies" :key="movie.title">
            <router-link :to="`/movies/${movie.title}`">{{ movie.title }}</router-link>
            ({{ movie.year }})
        </li>
    </ul>
</div>
</template>

<style>

</style>