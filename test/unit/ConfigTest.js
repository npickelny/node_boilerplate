'use strict'

let assert = require('chai').assert;

process.env.AE_LOG_LEVEL = 'debug'

let Config = require('../../app/config/Config')

describe('Config test', function () {
  it('should set PORT configuration', function () {
    assert.isTrue(Config.PORT == 3000)
  })

  it('should set PORT configuration', function () {
    assert.isTrue(Config.LOG_LEVEL == 'debug')
  })
})
