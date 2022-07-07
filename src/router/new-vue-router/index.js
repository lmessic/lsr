import { ref } from "vue";

function createRouter(params) {
  const history = params.history;
  const routes = params.routes;
  const router = {
    history,
    routes,
    // 增加当前路径hash的响应式变量
    hash: ref(window.location.hash.slice(1)),
  };

  // 监听hash改变事件
  if (history === "webHashHistory") {
    window.addEventListener("hashchange", () => {
      router.hash.value = window.location.hash.slice(1);
    });
  }
  return router;
}

function createWebHashHistory() {
  return "webHashHistory";
}

export { createRouter, createWebHashHistory };
