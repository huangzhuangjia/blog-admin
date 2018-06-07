import Vuex, { ActionTree, MutationTree } from 'vuex'
import API from '@/api/server'
// import { success, error } from '../../config/response'

interface IState {
  login: boolean,
  token: string,
  userInfo: StoreState.User
}

const state: IState = {
  login: false,
  token: '',
  userInfo: {
    _id: '',
    username: '',
    gravatar: ''
  }
}

const actions: ActionTree<IState, any>  = {
  async handleLogin (
    {commit},
    data: StoreState.Login
  ): Promise<Ajax.AjaxResponse> {
    const res: Ajax.AjaxResponse = await API.User.handleLogin(data)
    if (res && res.code === 1) {
      commit('USRE_LOGIN', res.result.token)
      window.localStorage.setItem('TOKEN', JSON.stringify(res.result))
      console.log('登录成功')
    } else {
      console.log(res.message)
    }
    return res
  },

  async getUserInfo (
    {commit}
  ): Promise<Ajax.AjaxResponse> {
    const res: Ajax.AjaxResponse = await API.User.getUserInfo()
    if (res && res.code === 1) {
      commit('GET_USER_INFO', res.result)
      console.log('success')
    }
    return res
  }

  // async handleLogOut (
  //   {commit}
  // ): Promise<Ajax.AjaxResponse> {
  //   const res: Ajax.AxiosResponse = await API.handleLogOut()
  //   commit('USRE_LOGOUT')
  //   return res.data
  // }
}

const mutations: MutationTree<IState>  = {
  'GET_USER_INFO' (state: IState, user): void {
    state.login = true
    state.userInfo = user
  },
  'USRE_LOGOUT' (state: IState, user) {
    state.login = false
  },
  'USRE_LOGIN' (state: IState, token) {
    state.token = token
  }
}
export default {
  state,
  mutations,
  actions
}
