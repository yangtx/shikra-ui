<template>
  <el-row style="margin-top: 30px">
    <el-col :xs="{span: 20, offset: 2}" :sm="{span: 10, offset: 7}" :md="{span: 8, offset: 8}" :lg="{span: 8, offset: 8}" :xl="{span: 8, offset: 8}">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>登录</span>
          <el-button style="float: right; padding: 3px 0" type="text">
            <router-link :to="{name: 'Register'}">Sign Up</router-link>
          </el-button>
        </div>

        <el-form :rules="rules" ref="registerForm" label-position="left" label-width="80px" :model="registerData" :status-icon="true">
          <el-form-item label="账号" prop="username">
            <el-input placeholder="用户名或密码" v-model="registerData.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input placeholder="密码" type="password" v-model="registerData.password"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitForm('registerForm')">登录</el-button>
            <el-button @click="resetForm('registerForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      registerData: {
        identity: '',
        password: ''
      },
      rules: {
        username: [
          {required: true, message: '请输入用户名或邮箱', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
      this.$refs[formName].clearValidate()
    }
  }
}
</script>

<style scoped>
</style>
