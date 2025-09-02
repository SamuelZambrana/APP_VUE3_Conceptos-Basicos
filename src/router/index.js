import { createRouter, createWebHistory } from "vue-router";
import Home  from "../views/Home.vue";
import  CreateMovie  from "../views/CreateMovie.vue";
import  Movies  from "../views/Movies.vue";
import  ConceptosBasicos  from '../views/ConceptosBasicos.vue';
import  MovieDetails  from '../views/MovieDetails.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/create",
      name: "createMovie",
      component: CreateMovie
    },
    {
      path: "/movies",
      name: "movie",
      component: Movies
    },
    {
      path: "/movies/:title",
      name: "movieDetails",
      component: MovieDetails
    },
    {
      path: "/conceptos-basicos",
      name: "ConceptosBasicos",
      component: ConceptosBasicos
    }
    
  ]
});

export default router;