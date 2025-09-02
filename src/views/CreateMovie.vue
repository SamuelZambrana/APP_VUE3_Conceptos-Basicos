<script setup>
import { reactive } from 'vue';
import HeaderComponent from '../components/HeaderComponent.vue';
import { useMovieStore } from '../stores/movie';
import router from '../router';

const movieStore = useMovieStore();

const movie = reactive({
  title: '',
  year: ''
});

const handleSubmit = () => {
    if (!movie.title || !movie.year) {
        alert('Rellena todos los campos, por favor!');
        return
    } 
    movieStore.addMovie({ ...movie });
    movie.title = '';
    movie.year = '';
    alert('Película añadida con éxito!');
    router.push({name: "movie"})
}

</script>

<template>

    <HeaderComponent />
    <h1>Create Movie</h1>
    <form @submit.prevent="handleSubmit">
        <div>
            <label for="title">Title:</label>
            <input v-model="movie.title" type="text" id="title" required />
        </div>
        <div>
            <label for="year">Year:</label>
            <input v-model="movie.year" type="number" id="year" required />
        </div>
        <button type="submit">Add Movie</button>
    </form>
</template>

<style></style>