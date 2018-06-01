<template>
  <div class="side-menu-wrapper">
    <slot></slot>
    <Menu ref="menu" v-show="!collapsed" :active-name="activeName" :open-names="openedNames" :accordion="accordion" :theme="theme" width="auto" @on-select="handleSelect">
      <template v-for="item in menuList">
        <side-menu-item v-if="showChildren(item)" :key="`menu-${item.name}`" :parent-item="item"></side-menu-item>
        <menu-item v-else :name="`${item.name}`" :key="`menu-${item.name}`"><Icon :type="item.icon"/><span>{{ showTitle(item) }}</span></menu-item>
      </template>
    </Menu>
    <div class="menu-collapsed" v-show="collapsed" :list="menuList">
      <collapsed-menu @on-click="handleSelect" hide-title :root-icon-size="rootIconSize" :icon-size="iconSize" :theme="theme" v-for="item in menuList" :parent-item="item" :key="`drop-menu-${item.name}`"></collapsed-menu>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch, Prop } from 'vue-property-decorator'
import sideMenuItem from './side-menu-item.vue'
import collapsedMenu from './collapsed-menu.vue'
import { getIntersection } from '@/config/tool'
import mixin from './mixin'
@Component({
   mixins: [ mixin ],
   props: {
    menuList: {
      type: Array,
      default () {
        return []
      }
    },
    collapsed: {
      type: Boolean
    },
    theme: {
      type: String,
      default: 'dark'
    },
    rootIconSize: {
      type: Number,
      default: 20
    },
    iconSize: {
      type: Number,
      default: 16
    }
  },
  components: {
    sideMenuItem,
    collapsedMenu
  }
})
export default class sideMenu extends Vue {
  $refs: {
    menu: any
  }
  @Prop({ default: false })
  private accordion: Boolean

  @Prop({ default: '' })
  private activeName: String

  @Prop({ default: () => [] })
  private openNames: any

  private openedNames: Array<any> = []
  private handleSelect (name: any): void {
    this.$emit('on-select', name)
  }
  private getOpenedNamesByActiveName (name: any): Array<any> {
    return this.$route.matched.map((item: any) => item.name).filter((item: any) => item !== name)
  }
  @Watch('activeName')
  private getActiveName (name: any): void {
    if (this.accordion) this.openedNames = this.getOpenedNamesByActiveName(name)
    else this.openedNames = getIntersection(this.openedNames, this.getOpenedNamesByActiveName(name))
  }
  @Watch('openNames')
  private getOpenNames (newNames: any): void {
    this.openedNames = newNames
  }
  @Watch('openedNames')
  private getOpenedNames (): void {
    this.$nextTick(() => {
      this.$refs.menu.updateOpened()
    })
  }
  private mounted (): void {
    this.openedNames = getIntersection(this.openedNames, this.getOpenedNamesByActiveName(name))
  }
}
</script>
<style lang="scss">
.side-menu-wrapper{
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  .menu-collapsed{
    padding-top: 10px;
    a.drop-menu-a{
      display: inline-block;
      padding: 6px 15px;
      width: 100%;
      text-align: center;
      color: #495060;
    }
    .ivu-dropdown{
      width: 100%;
      .ivu-dropdown-rel button{
        width: 100%;
      }
    }
    .menu-title{
      margin-left: 6px;
    }
    .ivu-select-dropdown{
      width: 160px;
      margin-left: 4px;
    }
  }
}
</style>
