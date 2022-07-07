<template>
  <button @click="addCount">+</button>
</template>
<script setup>
import { useLocalStorage } from "../utils/tool";

let count = useLocalStorage("count", 0);

const addCount = () => {
  count.value++;
};
</script>
