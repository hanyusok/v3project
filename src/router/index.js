import { createRouter, createWebHashHistory } from "vue-router"
import Default from '../views/Default.vue'

const routes = [
  {
    path: "/",
    component: Default  
  }
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
