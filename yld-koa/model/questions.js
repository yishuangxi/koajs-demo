/**
 * Created by Yi on 04/10/2016.
 */
var getPool = require('../database/mysql')

exports.createQuestion = function *createQuestion() {

}

exports.findQuestions = function *findQuestions() {
  var pool = getPool()
  if (!pool) {
    throw new Error('')
  }

  var rows = yield pool.query('select * from question')
  return rows
}

exports.findQuestionById = function *findQuestionById() {

}