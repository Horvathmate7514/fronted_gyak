import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MobileView from "../views/MobileView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/mobilok",
      name: "mobilok",
      component: MobileView,
    },
  ],
});

export default router;
