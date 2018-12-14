'use strict'

var winston = require('winston')
var fs = require('fs')
var Config = require('../config/Config')

var logDir = './logs'

winston.cli()

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir)
}

var Logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({json: false, timestamp: true, level: Config.LOG_LEVEL}),
    new winston.transports.File({filename: logDir + '/app_debug.log', json: false, timestamp: true, level: Config.FILE_LOG_LEVEL})
  ],
  exceptionHandlers: [
    new (winston.transports.Console)({
      json: false,
      timestamp: true,
      humanReadableUnhandledException: true,
      colorize: true
    }),
    new winston.transports.File({
      filename: logDir + 'app_exceptions.log',
      json: false,
      humanReadableUnhandledException: true
    })
  ]
})

module.exports = Logger
