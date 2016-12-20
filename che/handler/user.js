/**
 * Created by Yi on 2016/12/20.
 */

let KoaRouter = require('koa-router')
let router = new KoaRouter({
  prefix: '/user'
})

router.get('/list', function*UserListHandler() {
  this.body = 'UserListHandler '
})


router.get('/detail/:id', function*UserDetailHandler() {
  this.body = 'UserDetailHandler ' + this.params.id
})
  .param('id', function*(id, next) {
    if (!/^\d+$/.test(id)) return this.status = 404
    yield next
  })


module.exports = router