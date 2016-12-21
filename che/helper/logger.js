/**
 * Created by Yi on 2016/12/21.
 */
var path = require('path')
var miniLogger = require('mini-logger')
var baseDir = path.resolve(__dirname, '..')

var config = {
  dir: path.join(baseDir, 'log'),
  categories: ['handler', 'model', 'controller', 'service'],
  format: 'YYYY-MM-DD-[{category}][.log]'
}

module.exports = miniLogger(config)