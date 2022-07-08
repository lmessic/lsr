import {
  createRouter,
  createWebHashHistory,
  Router,
  RouteRecordRaw,
  createWebHistory,
} from "vue-router";
import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    component: import("@/pages/login.vue"),
  },
  {
    path: "/",
    name: "Home",
    redirect: "/home",
    meta: {
      title: "首页",
      keepAlive: false,
    },
    component: import("@/pages/home.vue"),
  },
];

const router: Router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
