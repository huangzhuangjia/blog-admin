import fetch from '@/service/fetch'
import serverProvider from '@/api/mock/serverProvider'

let mockEnv: boolean = false // 判断当前是否开启mock数据模拟
let rootUrl: string = ''
const currentProvider: string = 'provider1' // 当前服务提供者
const MOCK_PORT: string = '3000'
const cookieExpires: number = 1
const baseURL = 'https://iview.github.io/iview-admin/'

if (process.env.NODE_ENV === 'mocking') {
  mockEnv = true
  rootUrl = 'http://localhost' + ':' + MOCK_PORT // 模拟数据服务器上下文
}

if (process.env.NODE_ENV === 'development') {
  rootUrl = 'http://' + serverProvider[currentProvider] // 当前服务提供者
}

export default {
  MOCK_PORT,
  mockEnv,
  rootUrl,
  cookieExpires,
  baseURL
}
