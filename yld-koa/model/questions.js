/**
 * Created by Yi on 04/10/2016.
 */
var mysql = require('../database/mysql')

exports.createQuestion = function *createQuestion() {

}

exports.findQuestions = function *findQuestions() {
  var pool = mysql.getPool()
  if (!pool) {
    throw new Error('findQuestions getPoll error')
  }

  var rows = yield pool.query('select * from question')
  return rows
}

exports.findQuestionById = function *findQuestionById() {

}