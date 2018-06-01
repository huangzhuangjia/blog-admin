import { getBreadCrumbList, setTagNavListInLocalstorage, getMenuByRouter, getTagNavListFromLocalstorage, getHomeRoute } from '@/config/util'
import routers from '@/router/routers'
import { ActionTree, MutationTree, GetterTree } from 'vuex'

interface IState {
  breadCrumbList: StoreState.BreadCrumbList[],
  tagNavList: StoreState.TagNavList[],
  homeRoute: any
  // menuList: StoreState.MenuList[]
}

const state: IState = {
  breadCrumbList: [],
  tagNavList: [],
  homeRoute: getHomeRoute(routers)
}

const getters: GetterTree<IState, any> = {
  menuList: (state: IState, getters: any, rootState: any): StoreState.MenuList[] => getMenuByRouter(routers, rootState.user.access)
}

const actions: ActionTree<IState, any> = {
  setBreadCrumb ({commit}, list) {
    commit('SET_BREADCRUMB', list)
  },
  setTagNavList ({ commit }, list) {
    let tagNavList: StoreState.TagNavList[]
    if (list) {
      tagNavList = [...list]
      setTagNavListInLocalstorage(tagNavList)
    } else {
      tagNavList = getTagNavListFromLocalstorage()
    }
    commit('SET_TAG_NAVLIST', tagNavList)
  },
  addTag ({ commit }, item) {
    commit('ADD_TAG', item)
  }
}

const mutations: MutationTree<IState> = {
  'SET_BREADCRUMB' (state: IState, routeMetched) {
    state.breadCrumbList = getBreadCrumbList(routeMetched)
  },
  'SET_TAG_NAVLIST' (state: IState, list: StoreState.TagNavList[]) {
    state.tagNavList = [...list]
  },
  'ADD_TAG' (state: IState, item, type: string = 'unshift') {
    if (state.tagNavList.findIndex((tag: any) => tag.name === item.name) < 0) {
      if (type === 'push') state.tagNavList.push(item)
      else state.tagNavList.unshift(item)
      setTagNavListInLocalstorage([...state.tagNavList])
    }
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
