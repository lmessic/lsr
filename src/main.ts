import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router.js";
import store from "./store";

import Modal from "./components/Modal/Modal.vue";

// 引入样式
import "ant-design-vue/dist/antd.css";

const app = createApp(App);
app.component("Modal", Modal);
app.use(router).use(store).mount("#app");
