/*
 * @Author: huangzhuangjia
 * @Date: 2018-05-02 15:06:44
 * @Last Modified by: huangzhuangjia
 * @Last Modified time: 2018-06-01 15:21:53
 */
import axios from 'axios'
import env from '@/config/env'
import querystring from 'querystring'

// 创建一个axios实例
const ax: any = axios.create({
  timeout: 30 * 1000, // 30秒超时
  responseType: "json",
  withCredentials: true, // 是否允许带cookie
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
  }
})

// POST传参序列化(添加请求拦截器)
ax.interceptors.request.use(
  (config: any) => {
    if (
      config.method === 'post' ||
      config.method === 'put' ||
      config.method === 'delete' ||
      config.method === 'patch'
    ) {
      config.data = querystring.stringify(config.data)

    }
    // 用户token验证
    // if (window.localStorage.getItem('TOKEN')) {
    //   config.headers.Authorization = `Bearer ${JSON.parse(window.localStorage.getItem('TOKEN') || '').token}`
    // }
    return config
  },
  (error: string) => {
    return Promise.reject(error)
  }
)
// 响应拦截器
ax.interceptors.response.use(
  (response: any) => {
    return response
  },
  (error: any) => {
    return Promise.reject(error)
  }
)
/**
 *
 * @param options
 * {
 *  url: '',
 *  method: 'post',
 *  data: {}
 * }
 */
const fetch: any = (options: any) => {
  const defaultOption = { // 默认参数
    url: '',
    data: {},
    method: 'post'
  }
  const settings = Object.assign(true, defaultOption, options)

  if (env.mockEnv) {
    settings.method = 'get'
  }
  settings.url = env.rootUrl + settings.url
  const promise = new Promise((resolve, reject) => {
      ax(settings).then((response: any) => {
        resolve(response)
      })
      .catch((error: any) => {
        reject(error)
      })
  })
  return promise
}

export default fetch
