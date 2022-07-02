import { createRouter, createWebHashHistory } from 'vue-router';

import Login from '../pages/login.vue';
import Home from '../pages/home.vue';

const routes = [
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/home',
    component: Home,
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router;
