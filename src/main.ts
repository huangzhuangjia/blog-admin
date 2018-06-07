// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

import './assets/scss/index.scss'
import modules from './store/modules'

import Meta from 'vue-meta'

if (store) { // 模块动态注册
  Object.keys(modules).forEach((item: any) => {
    store.registerModule(item, modules[item])
  })
}

Vue.use(Meta)
Vue.use(iView)

// import { Message } from 'iview'
// Vue.prototype.$message = Message

Vue.config.productionTip = false

/* eslint-disable no-new */
const app: Vue = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

export default app
