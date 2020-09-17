import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Regiter from "../views/auth/register/Register";
import MoviesList from "../views/movies/MoviesList";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {

    path: "/register",
    name: "Register",
    component: Regiter,
  }
  {
    path: "/movies",
    name: "Movies",
    component: MoviesList,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
