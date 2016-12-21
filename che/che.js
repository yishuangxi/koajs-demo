/**
 * Created by Yi on 2016/12/20.
 */
let http = require('http')
let app = require('koa')()
let router = new require('koa-router')()
let config = require('./config')
let logger = require('./helper/logger')


app.use(function *configMiddleware(next) {
  if (!this.config) this.config = config
  yield next
})

app.use(function *configTestMiddleware(next) {
  console.log(this.config.env)
  yield next
})

app.use(function *loggerMiddleware(next) {
  if (!this.logger) this.logger = logger
  yield next
})

app.use(function *loggerTestMiddleware(next) {
  this.logger.handler(this.path)
  yield next
})

app.use(require('./handler/index').routes())
app.use(require('./handler/user').routes())

router.get('*', function *NotFound() {
  this.body = 'this is 404 page'
})
app.use(router.routes())

http.createServer(app.callback()).listen(3001)