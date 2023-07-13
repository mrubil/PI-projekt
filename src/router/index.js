import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import store from "@/store";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/Login",
    name: "Login",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
  {
    path: "/SignUp",
    name: "SignUp",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SignUp.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  console.log("stara ruta", from.name, "->", to.name, "korisnik");

  const noUser = store.currentUser === null;

  if (noUser && to.meta.needsUser) {
    next("login");
  } else {
    next();
  }
});

export default router;
