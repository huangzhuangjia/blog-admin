import Vue , { AsyncComponent } from 'vue'
import Router, { RouteConfig, Route, NavigationGuard, RawLocation } from 'vue-router'

// 首页
const home: AsyncComponent = () => import(/* webpackChunkName: "home" */ '@/pages/home.vue') 
// 视频分类
const videoSort: AsyncComponent = () => import(/* webpackChunkName: "videoSort" */ '@/pages/videoSort/index.vue') 
// 学院公告
const schoolAnnouncement: AsyncComponent = () => import(/* webpackChunkName: "schoolAnnouncement" */ '@/pages/schoolAnnouncement/index.vue') 
// 解封申诉
const unsealAppeal: AsyncComponent = () => import(/* webpackChunkName: "unsealAppeal" */ '@/pages/unsealAppeal/index.vue') 

Vue.use(Router)

// 路由信息
const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: home
  },
  {
    path: '/videoSort',
    name: 'VideoSort',
    component: videoSort
  },
  {
    path: '/schoolAnnouncement',
    name: 'SchoolAnnouncement',
    component: schoolAnnouncement
  },
  {
    path: '/unsealAppeal',
    name: 'UnsealAppeal',
    component: unsealAppeal
  }
]

const router: Router = new Router({
  mode: 'history',
  base: __dirname,
  routes
})

export default router
