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
}