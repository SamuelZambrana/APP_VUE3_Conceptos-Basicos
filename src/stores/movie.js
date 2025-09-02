import { defineStore } from "pinia";

export const useMovieStore = defineStore('movie', {
  state: () => ({
    movies: [
      { title: "El Padrino", year: 1972 },
      { title: "The Dark Knight", year: 2008 },
      { title: "Pulp Fiction", year: 1994 }
    ],
    loading: false,
  }),
  actions: {
    async fetchMovies() {
      this.loading = true;
      try {
        const response = await fetch('/api/movies');
        const data = await response.json();
        this.movies = data;
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        this.loading = false;
      }
    },
    addMovie(movie) {
      this.movies.push(movie);
    },
    getMovieByTitle(title) {
      return this.movies.find(movie => movie.title === title);
    }
  },
    persist: true
});
