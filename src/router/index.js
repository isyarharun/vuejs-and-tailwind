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
      name: "About",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/our-product",
      name: "Our Product",
      component: () => import("../views/OurProductView.vue"),
    },
    {
      path: "/contact-us",
      name: "Contact Us",
      component: () => import("../views/ContactUsView.vue"),
    },
  ],
});

export default router;
