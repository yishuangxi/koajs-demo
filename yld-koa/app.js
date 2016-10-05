/**
 * Created by Yi on 02/10/2016.
 */

var koa = require('koa')
var app = koa()

var logger = require('koa-logger')
var parse = require('co-body')
var render = require('co-views')(__dirname + '/front/src', {
  map: {
    'html': 'swig'
  }
})


app.use(logger())

var questionRouter = require('./handler/questions')
var commentRouter = require('./handler/comments')
var orderRouter = require('./handler/orders')
var userRouter = require('./handler/users')

app.use(questionRouter.routes())
app.use(commentRouter.routes())
app.use(orderRouter.routes())
app.use(userRouter.routes())
//
// require('./router')(app)
//
// var posts = []
//
// function *list() {
//   this.body = yield render('list', {posts: posts})
// }
//
// function *create(){
//   var post = yield parse(this)
//   post.id = posts.push(post) - 1
//   post.created_at = new Date
//   this.redirect('/')
// }
//
// function *add(){
//   this.body = yield render('add')
// }
//
// function *show(id){
//   var post = posts[id]
//   this.body = yield render('show', {post: post})
// }

app.listen(8888)