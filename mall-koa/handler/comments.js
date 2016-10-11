/**
 * Created by Yi on 02/10/2016.
 */


var router = new require('koa-router')({
  prefix: '/api/comments'
})

router.get('/', function *getComments(next) {
  this.body = 'comments'
})

router.post('/', function *postComments() {
  this.body = 'postComments'
})

router.put('/', function *putComments() {
  this.body = 'putComments'
})

router.delete('/', function *deleteComments() {

})

router.get('/:id', function *comment(next) {
  this.body = 'comment ' + this.params.id
})


module.exports = router