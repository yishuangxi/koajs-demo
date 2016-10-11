/**
 * Created by Yi on 02/10/2016.
 */


var router = new require('koa-router')({
  prefix: '/'
})

router.get('/', function *hello(next){
  this.body = yield this.render('index', {name: 'koajs'})
})

module.exports = router