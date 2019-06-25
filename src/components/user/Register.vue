<template>
  <el-row style="margin-top: 30px">
    <el-col :xs="{span: 20, offset: 2}" :sm="{span: 10, offset: 7}" :md="{span: 8, offset: 8}" :lg="{span: 8, offset: 8}" :xl="{span: 8, offset: 8}">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>用户注册</span>
          <el-button style="float: right; padding: 3px 0" type="text">
            <router-link :to="{name: 'Login'}">Sign In</router-link>
          </el-button>
        </div>

        <el-steps :space="200" :active="progressStep" finish-status="success" align-center>
          <el-step title="验证邮箱"></el-step>
          <el-step title="完成注册"></el-step>
        </el-steps>

        <email-verify v-if="progressStep===0" @onEmailVerified="toFillFormStep($event)"/>
        <register-submit :verifiedEmail="verifiedEmail" v-if="progressStep===1"/>

      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import RegisterSubmit from '@/components/user/RegisterSubmit.vue'
import EmailVerify from '@/components/user/EmailVerify.vue'

export default {
  data () {
    return {
      progressStep: 0,
      verifiedEmail: ''
    }
  },
  methods: {
    toFillFormStep (data) {
      this.progressStep = 1
      this.verifiedEmail = data.email
      debugger
      console.log('verified email: ' + this.verifiedEmail)
    }
  },
  components: {
    RegisterSubmit,
    EmailVerify
  }
}
</script>

<style scoped>
</style>
