<template>
  <a @click="handleChange" type="text" :class="['sider-trigger-a', collapsed ? 'collapsed' : '']"><Icon :type="icon" :size="size" /></a>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'siderTrigger',
})
export default class SiderTrigger extends Vue {
  @Prop({ default: false })
  private collapsed: boolean
  @Prop({ default: 'navicon-round' })
  private icon: string
  @Prop({ default: 26 })
  private size: number

  private handleChange (): void {
    this.$emit('on-change', !this.collapsed)
  }
}
</script>
<style lang="less">
@import './sider-trigger.less';
</style>
