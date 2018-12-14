'use strict'

let pjson = require('../../package.json');

class HealthCheckController {
  constructor() {}
  static health(req, res) {
    // Edit this to check health
    res.json({status: 'OK', version: pjson.version})
  }
}

module.exports = HealthCheckController
