import fetch from '@/service/fetch'
import env from '@/config/env'
import API from '@/api/server/api'
import MOCK_API from '@/api/mock/mockAPI'

let service: any = {}

service = {
  login: (_data: any) => fetch({
    methods: 'get',
    data: _data,
    url: API.User.Login
  })
}

if (env.mock_env) {
  service = {
    login : (_data: any) => {
      return fetch({ url: MOCK_API.User.Login, data: _data })
    }
  }
}
export default service
