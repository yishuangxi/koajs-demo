/**
 * Created by Yi on 02/10/2016.
 */
var koa = require('koa')
var app = koa()

//模块挂载
var onerror = require('koa-onerror')
var config = require('./config/site')
var debug = require('debug')('app')
var Logger = require('mini-logger');
var logger = Logger({
  dir: config.logDir,
  categories: ['handler', 'service', 'model'],
  format: 'YYYY-MM-DD-[{category}][.log]',
  stdout: false,
  mkdir: true
});

// var parse = require('co-body')
var render = require('co-views')(__dirname + '/front/src', {
  map: {
    'html': 'swig'
  }
})

//模块挂载
app.use(function *(next) {
  this.logger = logger
  this.render = render
  yield next
})

//路由配置
app.use(require('./handler/index').routes())
app.use(require('./handler/questions').routes())
app.use(require('./handler/comments').routes())
app.use(require('./handler/orders').routes())
app.use(require('./handler/users').routes())

//错误处理
onerror(app)
app.listen(8888)