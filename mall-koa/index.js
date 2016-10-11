/**
 * Created by Yi on 02/10/2016.
 */

var koa = require('koa')
var app = koa()

var logger = require('koa-logger')
var route = require('koa-route')
var parse = require('co-body')
var render = require('co-views')(__dirname + '/front/src', {
  map: {
    'html': 'swig'
  }
})

var question = require('./handler/question')
var questionList = question.questionList

app.use(logger())
app.use(route.get('/', questionList))
app.use(route.get('/post/new', add))
app.use(route.get('/post/:id', show))
app.use(route.post('/post', create))


var posts = []

function *list() {
  this.body = yield render('list', {posts: posts})
}

function *create(){
  var post = yield parse(this)
  post.id = posts.push(post) - 1
  post.created_at = new Date
  this.redirect('/')
}

function *add(){
  this.body = yield render('add')
}

function *show(id){
  var post = posts[id]
  this.body = yield render('show', {post: post})
}

app.listen(8888)