/**
 * Created by Yi on 2016/12/20.
 */
let http = require('http')
let koa = require('koa')
let app = koa()
let KoaRouter = require('koa-router')
let router = new KoaRouter()
let config = require('./config')

app.use(function *(next) {
  if (!this.config) this.config = config
  yield next
})

app.use(function *(next) {
  console.log(this.config.env)
  yield next
})

app.use(require('./handler/index').routes())
app.use(require('./handler/user').routes())

router.get('*', function *NotFound() {
  this.body = 'this is 404 page'
})
app.use(router.routes())

http.createServer(app.callback()).listen(3001)