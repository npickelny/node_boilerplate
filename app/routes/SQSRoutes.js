'use strict';

let SQSController = require('../controllers/SQSController');

class SQSRouter {
  constructor () {}
  static init(app) {
    let baseRoute = '/api/sqs';

    // app.get(baseRoute, HealthCheckController.health)
  }
}

module.exports = SQSRouter;
