import { createRouter, createWebHashHistory, Router, RouteRecordRaw } from 'vue-router';
import { InjectionKey } from 'vue';
import { createStore, Store } from 'vuex';

import Login from '../pages/login.vue';
import Home from '../pages/home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/home',
    component: Home,
  }
]

const router: Router = createRouter({
  routes,
  history: createWebHashHistory()
})

export const key: InjectionKey<Store<State>> = Symbol()
export default router;
