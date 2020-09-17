import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import MoviesList from "../views/movies/MoviesList";
import SingleMovie from "../views/movies/SingleMovie";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/movies",
    name: "Movies",
    component: MoviesList,
  },
  {
    path: "/movie/:id",
    name: "SingleMovie",
    component: SingleMovie,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
