/**
 * Created by Yi on 2016/12/20.
 */

let router = new require('koa-router')()

router.get('/', function *indexHandler() {
  this.body = 'this is index page'
})

router.get('/hot', function *hotHandler() {
  this.body = 'this is hot page'
})

module.exports = router


