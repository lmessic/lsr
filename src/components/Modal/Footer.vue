<template>
  <div class="modal-footer">
    <button v-if="type === 'confirm'" @click="onCancel">取消</button>
    <button @click="onOk">确定</button>
  </div>
</template>
<script setup>
import { ref, inject, defineEmits } from 'vue'

  const emit = defineEmits(['update:modelValue', 'handleCancel', 'handleOk'])
  let modalType = ref('default')
  const type = inject('modalType', modalType)

  const onCancel = () => {
    emit('update:modelValue', false)
  }

  const onOk = () => {

  }
</script>