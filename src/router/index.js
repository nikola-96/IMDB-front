import Vue from "vue";
import VueRouter from "vue-router";
import Register from "../views/auth/register/Register";
import Login from "../views/auth/login/Login";
import MoviesList from "../views/movies/MoviesList";
import SingleMovie from "../views/movies/SingleMovie";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
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

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem("loginToken");
  if (to.name !== "Login" && to.name !== "Register" && !isAuthenticated) {
    next({ name: "Login" });

    return;
  } else if (
    (to.name === "Login" || to.name === "Register") &&
    isAuthenticated
  ) {
    return next({ name: "Movies" });
  } else next();
});

export default router;
