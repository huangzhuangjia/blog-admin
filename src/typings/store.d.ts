
declare namespace StoreState {
  export type State = 0 | 1 | 2 | 3 | string
  // 公用
  interface Common {
    /** 唯一标识 */
    readonly _id?: string,

    /** 发布日期 */
    readonly create_at?: Date,

    /** 修改日期 */
    readonly update_at?: Date,
  }

   // 用户数据
   export interface User {
    /** 唯一标识 */
    readonly _id: string,

    /** 用户名 */
    username: string,

    /** 密码 */
    password?: string,

    /** 头像 */
    gravatar: string
  }
   // 登录
   export interface Login {
    /** 用户名 */
    username: string,

    /** 密码 */
    password: string
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
  // 文章
  export interface Article extends Common {

    /** 标题 */
    title: string,

    /** 内容 */
    content?: string,

    /** 状态 */
    state: State,

    /** 公开状态 */
    publish: State,

    /** 其他 */
    [propName: string]: any
  }
}
