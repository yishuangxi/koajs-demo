/**
 * Created by Yi on 02/10/2016.
 */

var sQuestion = require('../service/questions')

var router = new require('koa-router')({
  prefix: '/questions'
})

router.get('/', function *findQuestions(next) {
  this.body = {'rows': yield sQuestion.findQuestions()}
})

module.exports = router