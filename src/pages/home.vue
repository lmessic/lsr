<template>
  <div>{{title}}</div>
  <button @click="openDefaultModal">defalut modal</button>
  <button @click="openConfirmModal">confirm modal</button>
  <Modal
    v-model="visible"
    title="提示信息"
    content="打开了一个弹框"
  />
</template>
<script setup>
  import { ref, provide } from 'vue'
  import Modal from '../components/Modal/Modal.vue'

  let title = ref('这里是home页面');
  let visible = ref(false);

  const openDefaultModal = () => {
    provide('modalType', 'default')
    visible.value = true;
  }

  const openConfirmModal = () => {
    provide('modalType', 'confirm')
    visible.value = true;
  }

  const handleCancel = (status) => {
    visible.value = status
  }

  const handleOk = (status) => {
    visible.value = status;
  }
  
</script>