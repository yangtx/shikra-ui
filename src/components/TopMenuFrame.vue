<template>
  <div>
    <slot name="menu">
      <div>menu</div>
    </slot>
    <slot>
      <div>body</div>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'TopMenuFrame',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
</style>
