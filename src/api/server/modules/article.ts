import fetch from '@/service/fetch'
import env from '@/config/env'
import API from '@/api/server/api'
import MOCK_API from '@/api/mock/mockAPI'

let Aritcle: any = {
  postArt (data: StoreState.Article) {
   return fetch.post(API.Article.postArt, data)
              .then((res: Ajax.AxiosResponse) => res.data)
              .catch((e: any) => console.error(e))
  }
}

// mock环境
if (env.mockEnv) {
  Aritcle = {}
}

export default Aritcle
