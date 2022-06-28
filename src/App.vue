<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import MouseMoveVue from './components/MouseMove.vue';

const person = {
  name: '小明',
  age: 18
}
const personProxy = new Proxy(person, {
  get: function(target, prop) {
    console.log(`获取了${prop}`, target[prop])
    return target[prop]
  },
  set: function(target, prop, value) {
    console.log(`修改了${prop}`, value)
    target[prop] = value
  }
})
console.log('name', personProxy.name)
// personProxy.age = 20
person.sex = 'male'
console.log('sex', personProxy.sex)
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
  <MouseMoveVue />
  <div>test origin</div>
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
