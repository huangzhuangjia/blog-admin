/*
 * @Author: huangzhuangjia
 * @Date: 2018-05-02 14:16:35
 * @Last Modified by: huangzhuangjia
 * @Last Modified time: 2018-06-01 11:54:33
 */

import Vue from 'vue'
import Vuex, { ActionTree, MutationTree } from 'vuex'
import 'babel-polyfill'

import API from '@/api/server'

import user from './modules/user'
import app from './modules/app'

Vue.use(Vuex)

// interface IState {
//   login: boolean,
//   user: StoreState.User
// }

// const state: IState = {
//   login: false,
//   user: {
//     _id: '',
//     name: '',
//     username: '',
//     gravatar: ''
//   }
// }

// const actions: ActionTree<IState, any>  = {
//   async login (
//     {commit}
//   ): Promise<Ajax.AjaxResponse> {
//     commit('USER_LOGIN')
//     const res: Ajax.AxiosResponse = await API.login()
//     if (res && res.data.success) {
//       console.log('success')
//     } else {
//       console.log('error')
//     }
//     return res.data
//   }
// }

// const mutations: MutationTree<IState>  = {
//   'USER_LOGIN' (state: IState): void {
//     state.login = true
//   }
// }

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
