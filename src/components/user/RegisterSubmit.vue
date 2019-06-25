<template>
  <el-card shadow="never">
    <el-form :rules="rules" ref="registerForm" label-position="right" label-width="80px" :model="registerData" :status-icon="true">
      <el-form-item label="邮箱">
        <el-input disabled placeholder="邮箱" :value="email"></el-input>
      </el-form-item>
      <el-form-item label="用户名" prop="username">
        <el-input placeholder="用户名" v-model="registerData.username"></el-input>
      </el-form-item>
      <el-form-item label="昵称" prop="nickname">
        <el-input placeholder="昵称" v-model="registerData.nickname"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input placeholder="密码" type="password" show-password v-model="registerData.password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="passwordConfirm">
        <el-input placeholder="确认密码" type="password" show-password v-model="registerData.passwordConfirm"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('registerForm')">注册</el-button>
        <el-button @click="resetForm('registerForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  props: [
    'verifiedEmail'
  ],
  data () {
    var validateConfirmPassword = (rule, value, callback) => {
      if (value !== this.registerData.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }

    return {
      registerData: {
        username: '',
        nickname: '',
        password: '',
        passwordConfirm: ''
      },

      rules: {
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
          {min: 3, max: 16, message: '长度在 3 到 16 个字符', trigger: 'blur'}
        ],
        nickname: [
          {min: 1, max: 16, message: '长度在 1 到 16 个字符', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {min: 3, max: 16, message: '长度在 3 到 16 个字符', trigger: 'blur'}
        ],
        passwordConfirm: [
          {required: true, message: '请再次输入密码', trigger: 'blur'},
          { validator: validateConfirmPassword, trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    email () {
      return this.verifiedEmail
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
