import fetch from '@/service/fetch'

let mockEnv: boolean = false // 判断当前是否开启mock数据模拟
let rootUrl: string = ''
const MOCK_PORT: string = '3000'
const cookieExpires: number = 1
const baseURL = 'https://iview.github.io/iview-admin/'

const NODE_ENV = process.env.NODE_ENV

switch (NODE_ENV) {
  // mock环境
  case 'mocking':
    mockEnv = true
    rootUrl = 'http://localhost' + ':' + MOCK_PORT // 模拟数据服务器上下文
    break
  // 开发环境
  case 'development':
    rootUrl = 'http://localhost:8082'
    break
  // 生产环境
  case 'production':
    rootUrl = ''
    break
}

export default {
  MOCK_PORT,
  mockEnv,
  rootUrl,
  cookieExpires,
  baseURL
}
