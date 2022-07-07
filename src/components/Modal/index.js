import { createApp, provide } from "vue";
import Modal from "./Modal.vue";

function openModal(options = {}) {
  // 创建弹框组件实例
  const modalApp = createApp(Modal, {
    // 控制显示隐藏
    modelValue: true,
    // 标题
    title: options.title || "title",
    // 内容
    content: options.content || "content",
    // 关闭方法
    close: () => {
      // 卸载实例
      modalApp.unmount(dom);
      // 移除页面节点
      document.body.removeChild(dom);
    },
  });

  // 渲染
  const dom = document.createElement("div");
  document.body.appendChild(dom);

  // 挂载
  modalApp.mount(dom);
}

export default openModal;
