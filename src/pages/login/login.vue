<style lang="less">
  @import './login.less';
</style>

<template>
  <div class="login" @keydown.enter="handleLogin">
    <div class="login-con">
      <Card icon="log-in" title="欢迎登录" :bordered="false">
        <div class="form-con">
          <login-form @on-success-valid="handleSubmit"></login-form>
          <p class="login-tip">输入任意用户名和密码即可</p>
        </div>
      </Card>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Action } from 'vuex-class'
import loginForm from '@/components/login-form'
import { mapActions } from 'vuex'

@Component({
  components: {
    loginForm
  }
})
export default class Login extends Vue {
  @Action('handleLogin') handleLogin: any
  @Action('getUserInfo') getUserInfo: any

  private async handleSubmit ({ username, password }: StoreState.Login) {
    const data: Ajax.AjaxResponse = await this.handleLogin({ username, password })
    if (data.code !== 1) return false
    this.$router.push(this.$route.query.redirect || '/home')
  }
}
</script>

<style>

</style>
