import Vuex, { ActionTree, MutationTree } from 'vuex'
import API from '@/api/server'
import { success, error } from '../../config/response'

interface IState {
  posting: boolean,
  list: StoreState.Article[]
  total: number,
  detail: StoreState.Article
}
const state: IState = {
  posting: false,
  list: [],
  total: 0,
  detail: {
    title: '',
    state: 0,
    publish: 0,
    tag: []
  }
}
const actions: ActionTree<IState, any>  = {
  // 添加文章
  async postArt (
    { commit },
    article: StoreState.Article
  ): Promise<Ajax.AjaxResponse> {
    commit('POST_ARTICLE')
    const res = await API.Article.postArt(article)
    if (res && res.code === 1) success('添加文章成功')
    else error('添加文章失败')
    commit('POST_ARTICLE_FINAL')
    return res
  }
}

const mutations: MutationTree<IState>  = {
  'POST_ARTICLE' (state: IState) {
    state.posting = true
  },

  'POST_ARTICLE_FINAL' (state: IState) {
    state.posting = false
  }
}

export default {
  state,
  mutations,
  actions
}
