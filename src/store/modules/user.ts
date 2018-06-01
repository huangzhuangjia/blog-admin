import Vuex, { ActionTree, MutationTree } from 'vuex'
import API from '@/api/server'

interface IState {
  login: boolean,
  info: StoreState.User
}

const state: IState = {
  login: false,
  info: {
    _id: '',
    name: '',
    username: '',
    gravatar: ''
  }
}

const actions: ActionTree<IState, any>  = {
  async getUserInfo (
    {commit}
  ): Promise<Ajax.AjaxResponse> {
    const res: Ajax.AxiosResponse = await API.getUserInfo()
    if (res && res.data.success) {
      commit('GET_USER_INFO', res.data.list)
      console.log('success')
    } else {
      commit('GET_USER_INFO')
      console.log('error')
    }
    return res.data
  }
}

const mutations: MutationTree<IState>  = {
  'GET_USER_INFO' (state: IState, user): void {
    user ? state.login = true : state.login = false
    state.info = user
  }
}
export default {
  state,
  mutations,
  actions
}
