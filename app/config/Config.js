'use strict'

let fs = require('fs')

class Config {
  constructor(){
    let envFile = process.env.ENV_FILE || './.env'
    if (fs.existsSync(envFile)) {
      require('dotenv').config({path: envFile})
    } else {
      console.warn('Env file not found')
    }
    return this._initialize()
  }
  _initialize() {
    return {
      PORT: process.env.PORT || 3000,
      LOG_LEVEL: process.env.LOG_LEVEL || 'info',
      FILE_LOG_LEVEL: process.env.FILE_LOG_LEVEL || process.env.LOG_LEVEL || 'info'
    }
  }
}

module.exports = new Config()
