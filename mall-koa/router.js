/**
 * Created by Yi on 02/10/2016.
 */

var route = require('koa-route')
var question = require('./handler/question')


module.exports = function (app) {
  app.use(route.get('/', questionList))
  // app.use(route.get('/', list))
  // app.use(route.get('/post/new', add))
  // app.use(route.get('/post/:id', show))
  // app.use(route.post('/post', create))
}