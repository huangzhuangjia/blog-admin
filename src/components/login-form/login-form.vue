<template>
  <Form ref="loginForm" :model="form" :rules="rules">
    <FormItem prop="userName">
      <Input v-model="form.username" placeholder="请输入用户名">
        <span slot="prepend">
          <Icon :size="16" type="person"></Icon>
        </span>
      </Input>
    </FormItem>
    <FormItem prop="password">
      <Input type="password" v-model="form.password" placeholder="请输入密码">
        <span slot="prepend">
          <Icon :size="14" type="locked"></Icon>
        </span>
      </Input>
    </FormItem>
    <FormItem>
      <Button @click="handleSubmit" type="primary" long>登录</Button>
    </FormItem>
  </Form>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

interface IForm {
  username: string | any[],
  password: string | any[]
}

@Component({
  name: 'loginForm'
})
export default class LoginForm extends Vue {
  $refs: {
    loginForm: any
  }
  @Prop({
    default: () => {
      return [
        { required: true, message: '账号不能为空', trigger: 'blur' }
      ]
    }
  })
  private userNameRules: any[]

  @Prop({
    default: () => {
      return [
        { required: true, message: '密码不能为空', trigger: 'blur' }
      ]
    }
  })
  private passwordRules: any[]

  private form: IForm = {
    username: '',
    password: ''
  }

  private get rules (): IForm {
    return {
      username: this.userNameRules,
      password: this.passwordRules
    }
  }

  private handleSubmit () {
    this.$refs.loginForm.validate((valid: any) => {
      if (valid) {
        this.$emit('on-success-valid', {
          username: this.form.username,
          password: this.form.password
        })
      }
    })
  }
}
</script>
