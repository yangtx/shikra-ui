<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1" @click="routeTo({name: 'Home'})">
       Home
      </el-menu-item>

      <el-menu-item index="7" @click="routeTo({name: 'Register'})" class="float-right">
        Sign Up
      </el-menu-item>
      <el-menu-item index="8" @click="routeTo({name: 'Login'})" class="float-right">
        Sign In
      </el-menu-item>

      <el-submenu index="9" @click="routeTo({name: 'Profile'})" class="float-right">
        <template slot="title">Me</template>
        <el-menu-item index="2-1">Profile</el-menu-item>
        <el-menu-item index="2-2">Logout</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'TopNavi',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    routeTo (param) {
      this.$router.push(param)
    },
    handleSelect (key, keyPath) {
      // console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
  .float-right {
    float: right;
  }
</style>
