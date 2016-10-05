/**
 * Created by Yi on 04/10/2016.
 */

var mysql = require('koa-mysql')
var config = require('../config/mysql')
var pool = mysql.createPool({user: config.user, password: config.password, database: config.database, host: config.host});

module.exports = function getPool() {
  return pool
}