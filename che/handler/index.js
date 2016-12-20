/**
 * Created by Yi on 2016/12/20.
 */

let KoaRouter = require('koa-router')
let router = new KoaRouter()

router.get('/', function*IndexHandler() {
  this.body = 'this is index page'
})

router.get('/hot', function*HotHandler() {
  this.body = 'this is hot page'
})

module.exports = router


