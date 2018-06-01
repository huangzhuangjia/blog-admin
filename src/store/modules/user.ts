import Vuex, { ActionTree, MutationTree } from 'vuex'
import API from '@/api/server'

interface IState {
  login: boolean,
  user: StoreState.User
}

const state: IState = {
  login: false,
  user: {
    _id: '',
    name: '',
    username: '',
    gravatar: ''
  }
}

const actions: ActionTree<IState, any>  = {
  async login (
    {commit}
  ): Promise<Ajax.AjaxResponse> {
    commit('USER_LOGIN')
    const res: Ajax.AxiosResponse = await API.login()
    if (res && res.data.success) {
      console.log('success')
    } else {
      console.log('error')
    }
    return res.data
  }
}

const mutations: MutationTree<IState>  = {
  'USER_LOGIN' (state: IState): void {
    state.login = true
  }
}
export default {
  state,
  mutations,
  actions
}
