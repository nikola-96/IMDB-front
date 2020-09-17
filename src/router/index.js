import Vue from "vue";
import VueRouter from "vue-router";
import Register from "../views/auth/register/Register";
import Login from "../views/auth/login/Login";

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
    return next({ name: "/" });
  } else next();
});

export default router;
