import fetch from '@/service/fetch'
import * as serverProvider from '@/api/mock/serverProvider'

let mock_env = false // 判断当前是否开启mock数据模拟
let rootUrl = ''
let currentProvider = 'provider1' // 当前服务提供者
let MOCK_PORT = '3000'


if (process.env.NODE_ENV == 'mocking') {
  mock_env = true
  rootUrl = 'http://localhost' + ':' + MOCK_PORT // 模拟数据服务器上下文
}

if (process.env.NODE_ENV == 'development') {
  rootUrl = 'http://' + serverProvider[currentProvider] // 当前服务提供者
}

export default {
  MOCK_PORT,
  mock_env,
  rootUrl
}