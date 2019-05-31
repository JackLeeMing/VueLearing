<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Demo></Demo>
    <HelloWorld :val="val" msg="Welcome to Your Vue.js App" @change="handleChange"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Demo from './components/Demo'
export default {
  name: 'app',
  components: {
    HelloWorld,
    Demo
  },
  data(){
    return {
      value2:true,
      val:''
    }
  },
  methods: {
    handleChange(val){
      this.val = val;
      return "lijiakui"
    }
  },
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
