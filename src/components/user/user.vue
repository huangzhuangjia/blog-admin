<template>
  <div class="user-avator-dropdown">
    <Dropdown @on-click="handleClick">
      <Avatar :src="userAvator"/>
      <Icon :size="12" type="arrow-down-b"></Icon>
      <DropdownMenu slot="list">
        <DropdownItem name="logout">退出登录</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { Action } from 'vuex-class'
import './user.less'
import { mapActions } from 'vuex'

@Component({
  name: 'user'
})
export default class User extends Vue {
  @Prop({ default: '' })
  private userAvator: string

  @Action('handleLogOut') handleLogOut: any

  private async handleClick (name: string): Promise<void> {
    switch (name) {
      case 'logout':
        const res = await this.handleLogOut()
        res.success && this.$router.push({
          name: 'login'
        })
        break
    }
  }
}
</script>
