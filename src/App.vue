<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Root from '@/components/layout/Root.vue'
export default {
  name: 'App',
  components: {Root}
}
</script>

<style>
  .active{
    background-color: yellow;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  body {
    margin: 0;
  }
</style>
