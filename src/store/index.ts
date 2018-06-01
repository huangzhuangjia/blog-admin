/*
 * @Author: huangzhuangjia
 * @Date: 2018-05-02 14:16:35
 * @Last Modified by: huangzhuangjia
 * @Last Modified time: 2018-06-01 13:52:18
 */

import Vue from 'vue'
import Vuex from 'vuex'
import 'babel-polyfill'

import API from '@/api/server'


import app from './modules/app'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //
  },
  mutations: {
    //
  },
  actions: {
    //
  },
  modules: {
    user,
    app
  }
})
