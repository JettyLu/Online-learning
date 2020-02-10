<template>
  <div id="app" >
    <router-view/>
  </div>
</template>

<script>
// import store from './store/store.js'
export default {
  name: 'App',
  data () {
    return {
      srceenHeight: ''
    }
  },
  created () {
    this.srceenHeight = document.body.offsetHeight
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 14px;
  /*background-color: #f1f1f1;*/
}
</style>
