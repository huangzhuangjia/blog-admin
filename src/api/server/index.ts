import fetch from '@/service/fetch'
import env from '@/config/env'
import API from '@/api/server/api'
import MOCK_API from '@/api/mock/mockAPI'

let service: any = {}

service = {
  getUserInfo: (_data: any) => fetch({
    methods: 'get',
    data: _data,
    url: API.User.userInfo
  }),
  handleLogOut: () => fetch({
    methods: 'get',
    url: API.User.userLogout
  })
}

if (env.mockEnv) {
  service = {
    getUserInfo : (_data: any) => {
      return fetch({ url: MOCK_API.User.userInfo, data: _data })
    },
    handleLogOut: () => fetch({
      methods: 'get',
      url: MOCK_API.User.userLogout
    })
  }
}
export default service
