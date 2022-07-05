import { createRouter, createWebHashHistory, Router, RouteRecordRaw } from 'vue-router';
import { InjectionKey } from 'vue';
import { createStore, Store } from 'vuex';

import Login from '../pages/login.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/',
    name: 'Home',
    redirect: '/home',
    meta: {
      title: '首页',
      keepAlive: false,
    },
    component: import('@pages/home.vue')
  },
]

const router: Router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router;
