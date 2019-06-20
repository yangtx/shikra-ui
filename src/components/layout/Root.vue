<template>
  <div>
    <top-navi/>
    <router-view>
    </router-view>
  </div>
</template>

<script>
import TopNavi from '@/components/TopNavi.vue'
export default {
  name: 'Root',
  data () {
    return {
      msg: 'Welcome to My Vue.js App'
    }
  },
  components: {
    TopNavi
  }
}
</script>

<style scoped>
</style>
