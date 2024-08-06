import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/blogs",
      name: "blogs",
      component: () => import("../views/BlogView.vue"),
    },
    {
      path: "/blogs/:id",
      name: "blog-detail",
      component: () => import("../views/BlogDetailView.vue"),
      props: true,
    },
  ],
});

export default router;
