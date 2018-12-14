'use strict'

let assert = require('chai').assert;
let sinon = require('sinon')
let pjson = require('../../package.json')
let HealthCheckController = require('../../app/controllers/HealthCheckController')

let res;

describe('HealthCheckController test', function () {
  beforeEach(function () {
      res = {json: sinon.spy()}
  })

  it('should have called res.json once', function () {
    let req = {}
    HealthCheckController.health(req, res)
    assert.isTrue(res.json.calledOnce);
  })

  it('should have called res.json with correct parameters', function () {
    let req = {}
    HealthCheckController.health(req, res)
    assert.isTrue(res.json.calledWithMatch({status: 'OK', version: pjson.version}))
  })
})
