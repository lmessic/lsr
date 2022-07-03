<template>
  <div class="modal" v-if="props.modelValue">
    <div class="modal-content">
      <div class="modal-header">{{props.title}}</div>
      <div class="modal-body">
        <div>{{props.content}}</div>
        <slot></slot>
      </div>
      <!-- <FooterVue @onOk="onOk" /> -->
      <button @click="onCancel">取消</button>
      <button @click="onOk">确定</button>
    </div>
  </div>
</template>
<script setup>
  import { defineProps, defineEmits } from 'vue';
  import FooterVue from './Footer.vue';

  const props = defineProps({
    title: String,
    content: String,
    modelValue: {
      type: Boolean,
      default: false,
    }
  })

  const emit = defineEmits(['update:modelValue', 'handleCancel', 'handleOk'])

  const onCancel = () => {
    // emit('handleCancel', false)
    emit('update:modelValue', false)
  }
  const onOk = () => {
    emit('update:modelValue', false)
  }
</script>
<style scoped>
.modal {
  width: 100%;
  height: 100vh;
  background: #ccc;
  position: relative
}
.modal-content {
  width: 500px;
  background: #fff;
  position: absolute;
  top: 10%;
  left: 50%;
  margin-left: -250px;
  border-radius: 4px;
}
.modal-header {
  border-bottom: 1px solid rgb(163, 158, 158);
}
.modal-header,
.modal-footer {
  line-height: 30px;
}
.modal-body {
  border-bottom: 1px solid rgb(163, 158, 158);
  min-height: 250px;
}
</style>