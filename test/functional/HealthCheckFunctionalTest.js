'use strict'

let assert = require('chai').assert;
let request = require('supertest');
let app = require('../../App')
let pjson = require('../../package.json')
let HealthCheckController = require('../../app/controllers/HealthCheckController')

let res;

describe('HealthCheck functional test', function () {
  it('should return correct parameters', function () {
    request(app)
      .get('/api/health')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        assert.isNull(err)
        assert.isTrue(res.body.status == 'OK')
        assert.isTrue(res.body.version == pjson.version)
      })
  })
})
