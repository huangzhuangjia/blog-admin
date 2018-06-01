let Mock = require('mockjs')
let Random = Mock.Random

let user = Mock.mock({
  _id: Random.natural(),
  name: Random.cword(3, 6),
  username: Random.cword(3, 6),
  gravatar: "https://adminlte.io/themes/AdminLTE/dist/img/user2-160x160.jpg",
})

exports.user = {
  list: user,
  success: true,
  message: '获取成功'
}

