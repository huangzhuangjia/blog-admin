import Vue , { AsyncComponent } from 'vue'
import Router, { RouteConfig, Route, NavigationGuard, RawLocation } from 'vue-router'

const home: AsyncComponent = () => import(/* webpackChunkName: "home" */ '@/pages/home.vue')

Vue.use(Router)

// 路由信息
const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: home
  }
]

const router: Router = new Router({
  mode: 'history',
  base: __dirname,
  routes
})

export default router
