<template>
  <el-card shadow="never">

    <el-alert v-if="hasSend" :closable="false" show-icon
              title="验证码已发送到此邮箱中，请登录邮箱获取"
              type="success">
    </el-alert>
    <el-form style="margin-top: 20px" :rules="emailRules" :inline="true" ref="emailForm" label-position="left" label-width="80px" :model="emailVerifyData" :status-icon="true">
      <el-form-item label="邮箱" prop="email">
        <el-input placeholder="邮箱"  v-model="emailVerifyData.email"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :disabled="sendButtonDisabled" @click.prevent="sendVerifyCode()">{{sendButtonText}}</el-button>
      </el-form-item>
    </el-form>

    <el-form :rules="verifyCodeRules" ref="verifyCodeForm" label-position="left" label-width="80px" :model="emailVerifyData" :status-icon="true">
      <el-form-item label="验证码" prop="verifyCode">
        <el-input style="width: 200px" placeholder="请输入邮箱中收到的验证码" v-model="emailVerifyData.verifyCode"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="next()">下一步</el-button>
      </el-form-item>
    </el-form>

  </el-card>
</template>

<script>
export default {
  computed: {
    sendButtonText () {
      return this.sendCountDown > 0 ? this.sendCountDown + '秒后可重新发送' : '发送验证码'
    },
    sendButtonDisabled () {
      return this.sendCountDown > 0
    }
  },
  data () {
    return {
      emailVerifyData: {
        email: '',
        verifyCode: ''
      },

      expectedVerifyCode: 'xxxx',
      hasSend: false,
      sendCountDown: 0,

      emailRules: {
        email: [
          {required: true, message: '请输入邮箱', trigger: 'blur'},
          {type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change']}
        ]
      },
      verifyCodeRules: {
        verifyCode: [
          {required: true, message: '请输入验证码', trigger: 'blur'},
          {min: 6, max: 6, message: '验证码无效', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    sendVerifyCode () {
      this.$refs['emailForm'].validate((valid) => {
        if (valid) {
          this.expectedVerifyCode = '123456'
          this.sendCountDown = 60
          this.hasSend = true
        } else {
          return false
        }
      })
    },
    next () {
      this.$refs['verifyCodeForm'].validate((valid) => {
        if (valid) {
          alert(this.emailVerifyData.verifyCode)
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
</style>
