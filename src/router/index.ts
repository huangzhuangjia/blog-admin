import Vue , { AsyncComponent } from 'vue'
import Router, { RouteConfig, Route, NavigationGuard, RawLocation } from 'vue-router'
import routers from './routers'

Vue.use(Router)

// 路由信息
const routes: RouteConfig[] = routers

const router: Router = new Router({
  mode: 'history',
  base: __dirname,
  routes
})

export default router
