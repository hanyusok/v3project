import { createRouter, createWebHashHistory } from "vue-router"
import Default from '../views/Default.vue'
import Signin from '../views/Signin.vue'

const routes = [
  {
    path: "/",
    name: "Default",
    component: Default  
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin 
  }
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
