<template>
  <div>{{ title }}</div>
  <button @click="openDefaultModal">defalut modal</button>
  <button @click="openConfirmModal">confirm modal</button>
  <button @click="open">打开</button>
  <button @click="add">计数</button>
  <div>{{ count }}</div>
  <Modal v-model="visible" title="提示信息" content="打开了一个弹框">
    <form>
      <label>姓名:</label>
      <input v-model="name" placeholder="请输入姓名" />

      <label>年龄:</label>
      <input v-model="age" placeholder="请输入姓名" />
    </form>
  </Modal>
</template>
<script setup lang="ts">
import { ref, provide, computed } from "vue";
import { useStore } from "vuex";
import Modal from "../components/Modal/Modal.vue";
import openDialog from "../components/Modal/index.js";

let name = ref("");
let age = ref();
const store = useStore();
let count = computed(() => store.state.count);

let title = ref("这里是home页面");
let visible = ref(false);

const openDefaultModal = () => {
  let modalType = ref("default");
  provide("modalType", modalType);
  visible.value = true;
};

const openConfirmModal = () => {
  let modalType = ref("confirm");
  provide("modalType", modalType);
  visible.value = true;
};

const handleCancel = (status) => {
  visible.value = status;
};

const handleOk = (status) => {
  visible.value = status;
};

const open = () => {
  openDialog({
    title: "标题",
    content: "内容",
  });
};

const onOk = () => {
  props.close();
};
const add = () => {
  store.commit("add");
};
</script>
<style lang="scss" scoped></style>
