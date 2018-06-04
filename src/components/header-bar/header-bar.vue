<template>
  <div class="header-bar">
    <sider-trigger :collapsed="collapsed" icon="navicon-round" @on-change="handleCollpasedChange"></sider-trigger>
    <custom-bread-crumb show-icon style="margin-left: 30px;" :list="breadCrumbList"></custom-bread-crumb>
    <div class="custom-content-con">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import siderTrigger from './sider-trigger'
import customBreadCrumb from './custom-bread-crumb'
import './header-bar.less'
@Component({
  name: 'headerBar',
  components: {
    siderTrigger,
    customBreadCrumb
  }
})
export default class HeaderBar extends Vue {

  @Prop({ default: false })
  private collapsed: boolean

  private get breadCrumbList (): StoreState.BreadCrumbList[] {
    return this.$store.state.app.breadCrumbList
  }
  private handleCollpasedChange (state: boolean): void {
    this.$emit('on-coll-change', state)
  }
}
</script>
