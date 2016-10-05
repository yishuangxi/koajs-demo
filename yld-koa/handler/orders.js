/**
 * Created by Yi on 02/10/2016.
 */


var router = new require('koa-router')({
  prefix: '/test'
})

router.get('/', function *hello(next){
  this.body = 'hello world xxx'
})

module.exports = router