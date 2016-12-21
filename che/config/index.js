/**
 * Created by Yi on 2016/12/21.
 */

let _ = require('underscore')

let development = require('./development')
let production = require('./production')
let config = {}

if (process.env.NODE_ENV === 'production') {
  config = _.extend(config, production)
} else {
  config = _.extend(config, development)
}

module.exports = config


