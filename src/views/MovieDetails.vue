<script setup>
import HeaderComponent from '../components/HeaderComponent.vue';
import { useRoute } from 'vue-router';
import { useMovieStore } from '../stores/movie';
import { watch } from 'vue';

const route = useRoute();
const movieStore = useMovieStore();

let movieTitle = route.params.title;
let movie = movieStore.getMovieByTitle(movieTitle);

watch(() => route.params.title, (newTitle) => {
    movie = movieStore.getMovieByTitle(newTitle);
});

</script>

<template>
    <HeaderComponent />

    <h2 v-if="!movie">La pelicula no existe</h2>
    <div v-else>
        <h1>Movie Details</h1>
        <h2> Title: {{ movie.title }}</h2>
        <h3> Year: {{ movie.year }}</h3>
    </div>
    
</template>

<style></style>