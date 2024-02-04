import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/createaim",
    name: "createaim",
    component: () => import("../views/create-aims.vue"),
  },
  {
    path: "/listAims",
    name: "listAims",
    component: () => import("../views/list-aims.vue"),
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
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

const publiclyRoutes = ["login", "registration", "home"];

router.beforeEach((to) => {
  const thisUserAuthorized = !!localStorage.getItem("jwtToken");
  const thisRoutePublic = publiclyRoutes.includes(to.name);

  return thisUserAuthorized || thisRoutePublic;
});

export default router;
