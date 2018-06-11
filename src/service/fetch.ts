/*
 * @Author: huangzhuangjia
 * @Date: 2018-05-02 15:06:44
 * @Last Modified by: huangzhuangjia
 * @Last Modified time: 2018-06-11 18:18:46
 */
import axios from 'axios'
import env from '@/config/env'
import querystring from 'querystring'

import { success, error } from '../config/response'
import { loginIn } from '@/config/util'
import app from '../main'

// 创建一个axios实例
const ax: any = axios.create({
  baseURL: env.rootUrl
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
    if (window.localStorage.getItem('TOKEN')) {
      config.headers.Authorization = `Bearer ${JSON.parse(window.localStorage.getItem('TOKEN') || '').token}`
    }
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
  (err: any) => {
    if (!loginIn()) {
      error('登陆超时')
      app.$router.push({
        path: '/login',
        query: { redirect: app.$route.fullPath }
      })
    }
    return Promise.reject(err)
  }
)

export default ax
