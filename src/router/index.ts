import Vue from 'vue'
import iView from 'iview'
import Router, { RouteConfig } from 'vue-router'
import routers from './routers'

Vue.use(Router)

// 路由信息
const routes: RouteConfig[] = routers

const router: Router = new Router({
  mode: 'history',
  base: __dirname,
  routes
})

router.afterEach(to => {
  iView.LoadingBar.finish()
  window.scrollTo(0, 0)
})

export default router
