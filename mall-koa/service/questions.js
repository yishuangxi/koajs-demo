/**
 * Created by Yi on 04/10/2016.
 */
var mQuestions = require('../model/questions')

exports.findQuestions = function *findQuestions() {
  return yield mQuestions.findQuestions()
}

exports.createQuestion = function *createQuestion() {
  return yield mQuestions.createQuestion()
}

exports.findQuestionById = function *findQuestionById(){
  return yield mQuestions.findQuestionById()
}
