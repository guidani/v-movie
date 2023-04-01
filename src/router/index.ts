import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import MovieDetail from "../views/MovieDetail.vue";
import Favorites from "../views/Favorites.vue";


const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/favorites",
    name: "favories",
    component: Favorites,
  },
  {
    path: "/movie-details/:id",
    name: "movie-details",
    component: MovieDetail,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
