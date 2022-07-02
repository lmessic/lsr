import { ref, watchEffect } from 'vue'

const useLocalStorage = (name, value = {}) => {
  const localData = ref(JSON.parse(localStorage.getItem(name) || value))
  watchEffect(() => {
    // 监听本地localStorage数据对应的响应式变量改变
    localStorage.setItem(name, JSON.stringify(localData.value))
  })

  return localData
}

export { useLocalStorage }