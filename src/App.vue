<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div style="width:400px">
    <Example></Example>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import  Example from './views/example/index'

export default {
  name: "App",
  components: {
    HelloWorld,
    Example
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
