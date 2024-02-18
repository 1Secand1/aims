import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/registration",
    name: "registration",
    component: () => import("../views/AuthRegistration.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/AuthLogin.vue"),
  },
  {
    path: "/createaim",
    name: "createaim",
    component: () => import("../views/CreateAims.vue"),
  },
  {
    path: "/listAims",
    name: "listAims",
    component: () => import("../views/ListAims.vue"),
  },
  {
    path: "/ConfirmExecution",
    name: "ConfirmExecution",
    component: () => import("../views/ConfirmExecution.vue"),
    beforeEnter: (to, from, next) => {
      from.name === "listAims"
        ? next()
        : router.push("/listAims");
    }
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

const publiclyRoutes = ["login", "registration", "home"];

router.beforeEach((to) => {
  const thisUserAuthorized = !!localStorage.getItem("jwtToken");
  const thisRoutePublic = publiclyRoutes.includes(to.name);

  thisUserAuthorized || thisRoutePublic
    ? true
    : router.push("login");
});

export default router;
