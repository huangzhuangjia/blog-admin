import fetch from '@/service/fetch'
import env from '@/config/env'
import API from '@/api/server/api'
import MOCK_API from '@/api/mock/mockAPI'

let User: any  = {
  // 登陆
  handleLogin: (
    param: any
  ): Promise<Ajax.AxiosResponse> => {
    return fetch.post(API.User.Login, param)
                .then((res: Ajax.AxiosResponse) => res.data)
                .catch((e: any) => console.error(e))
  },
  // 获取用户信息
  getUserInfo: (): Promise<Ajax.AxiosResponse>  => {
    return fetch.get(API.User.userInfo)
                .then((res: Ajax.AxiosResponse) => res.data)
                .catch((e: any) => console.error(e))
  }
}

// mock环境
if (env.mockEnv) {
  User = {
    // 登陆
    handleLogin: (
      param: any
    ): Promise<Ajax.AxiosResponse> => {
      return fetch.post(MOCK_API.User.login, param)
    },
     // 获取用户信息
    getUserInfo: (): Promise<Ajax.AxiosResponse>  => {
      return fetch.get(MOCK_API.User.userInfo)
                  .then((res: Ajax.AxiosResponse) => res.data)
                  .catch((e: any) => console.error(e))
    }
  }
}
export default User
