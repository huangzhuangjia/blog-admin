<template>
  <Layout style="height: 100%" class="main">
    <Sider breakpoint="md" hide-trigger collapsible :width="210" :collapsed-width="64" v-model="collapsed">
      <side-menu accordion :active-name="$route.name" :collapsed="collapsed" @on-select="turnToPage" :menu-list="menuList">
        <!-- 需要放在菜单上面的内容，如Logo，写在side-menu标签内部，如下 -->
        <div class="logo-con">
          <img v-show="!collapsed" :src="maxLogo" key="max-logo" />
          <img v-show="collapsed" :src="minLogo" key="min-logo" />
        </div>
      </side-menu>
    </Sider>
    <Layout>
      <Header class="header-con">
        <header-bar :collapsed="collapsed" @on-coll-change="handleCollapsedChange">
          <user :user-avator="userAvator"/>
        </header-bar>
      </Header>
      <Content>
        <Layout>
          <div class="tag-nav-wrapper">
            <tags-nav :value="$route" @input="handleClick" :list="tagNavList" @on-close="handleCloseTag"/>
          </div>
          <Content>
            <keep-alive :include="cacheList">
              <router-view/>
            </keep-alive>
          </Content>
        </Layout>
      </Content>
    </Layout>
  </Layout>
</template>

<script lang="ts">
  import { Component, Vue, Watch } from 'vue-property-decorator'
  import { Route } from 'vue-router'
  import { getNewTagList } from '@/config/util'
  import {
    State,
    Getter,
    Action,
    Mutation
  } from 'vuex-class'
  import sideMenu from '@/components/side-menu/index.vue'
  import headerBar from '@/components/header-bar'
  import tagsNav from '@/components/tags-nav'
  import user from '@/components/user'

  interface IState {
    breadCrumbList: StoreState.BreadCrumbList[],
    tagNavList: StoreState.TagNavList[],
    homeRoute: StoreState.TagNavList
  }

  @Component({
    name: 'Main',
    metaInfo: {
      title: 'iview-ts-template'
    },
    components: {
      sideMenu,
      headerBar,
      tagsNav,
      user
    }
  })
  export default class Main extends Vue {
    @State('app') app: IState
    @Getter('menuList') _menuList:  StoreState.MenuList[]
    @Action('setTagNavList') setTagNavList: any
    @Action('setBreadCrumb') setBreadCrumb: any
    @Action('addTag') addTag: any

    private collapsed: boolean = false
    private maxLogo: string = require('@/assets/images/logo.jpg')
    private minLogo: string = require('@/assets/images/logo-min.jpg')

    private get tagNavList (): StoreState.TagNavList[] {
      return this.app.tagNavList
    }
    private get userAvator (): string {
      return this.$store.state.user.userInfo.gravatar
    }
    private get cacheList (): StoreState.TagNavList[] {
      return this.tagNavList.length ? this.tagNavList.filter(item => !(item.meta && item.meta.notCache)) : []
    }
    private get menuList (): StoreState.MenuList[] {
      return this._menuList
    }

    private turnToPage (name: string): void {
      this.$router.push({
        name: name
      })
    }
    private handleCollapsedChange (state: boolean): void {
      this.collapsed = state
    }
    private handleCloseTag (res: StoreState.TagNavList[], type: string): void {
      this.setTagNavList(res)
      if (type === 'all') this.turnToPage('home')
    }
    private handleClick (item: StoreState.TagNavList): void {
      this.turnToPage(item.name)
    }
    @Watch('$route')
    private routeChange (newRoute: Route): void {
     this.setBreadCrumb(newRoute.matched)
     this.setTagNavList(getNewTagList(this.tagNavList, newRoute))
    }
    private mounted (): void {
      /**
       * @description 初始化设置面包屑导航和标签导航
       */
      this.setTagNavList()
      this.addTag(this.$store.state.app.homeRoute)
      this.setBreadCrumb(this.$route.matched)
    }
  }
</script>

<style lang="scss" scoped>
.main{
  .logo-con{
    height: 64px;
    padding: 10px;
    img{
      height: 44px;
      width: auto;
      display: block;
      margin: 0 auto;
    }
  }
  .header-con{
    background: #fff;
    padding: 0 20px;
  }
  .tag-nav-wrapper{
    padding: 0;
    height:40px;
    background:#F0F0F0;
    overflow: hidden;
  }
}
</style>
