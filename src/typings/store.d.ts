
declare namespace StoreState {
   // 用户数据
   export interface User {
    /** 唯一标识 */
    readonly _id: string,

    /** 名称 */
    name: string,

    /** 用户名 */
    username: string,

    /** 密码 */
    password?: string,

    /** 头像 */
    gravatar: string
  }
  // 路由meta
  interface Meta {
    icon?: string,
    title?: string,
    notCache?: boolean,
    hideInMenu?: boolean
  }
  // 头部面包屑列表
  export interface BreadCrumbList {
    name: string,
    icon?: string,
    to?: string,
    meta?: Meta
  }
  // 标签导航列表
  export interface TagNavList {
    name: string,
    path: string,
    meta: Meta,
    component?: any
  }
  // 菜单列表
  export interface MenuList {
    name: string,
    icon: string,
    meta: Meta,
    children: StoreState.MenuList[]
  }
}
