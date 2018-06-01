declare namespace Ajax {

  // axios 返回数据
  export interface AxiosResponse {
    data: AjaxResponse
  }

  // 请求接口数据
  export interface AjaxResponse {
    /**
     * 状态
     * @type { boolean }
     */
    success: boolean,

    /**
     * 数据
     * @type { any }
     */
    list: any,

    /**
     * 消息
     * @type { string }
     */
    message: string
  }
}
