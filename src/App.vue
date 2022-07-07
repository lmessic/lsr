<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import MouseMoveVue from "./components/MouseMove.vue";
import SyncLocalStorageVue from "./components/SyncLocalStorage.vue";

const person = {
  name: "小明",
  age: 18,
};
const personProxy = new Proxy(person, {
  get: function (target, prop) {
    console.log(`获取了${prop}`, target[prop]);
    return target[prop];
  },
  set: function (target, prop, value) {
    console.log(`修改了${prop}`, value);
    target[prop] = value;
  },
});
// console.log('name', personProxy.name)
// personProxy.age = 20
person.sex = "male";
// console.log('sex', personProxy.sex)
</script>

<template>
  <!-- <div>
    <router-link to="/login">login</router-link>
    <router-link to="/home">home</router-link>
  </div> -->
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
