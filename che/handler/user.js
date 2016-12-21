/**
 * Created by Yi on 2016/12/20.
 */

let router = new require('koa-router')({
  prefix: '/user'
})

router.get('/list', function *userListHandler() {
  this.body = 'UserListHandler '
})


router.get('/detail/:id', function *userDetailHandler() {
  this.body = 'UserDetailHandler ' + this.params.id
})
  .param('id', function *useIdCheck(id, next) {
    if (!/^\d+$/.test(id)) return this.status = 404
    yield next
  })


module.exports = router