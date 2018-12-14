'use strict'

let fs = require('fs')
let _ = require('lodash')
let Logger = require('../utils/Logger')
let ErrorHandler = require('../middlewares/ErrorHandler')

class Router {
  initializeApp(app) {
    _.each(fs.readdirSync(__dirname), filePath => {
      if (filePath.match(/.*Routes.js/)) {
        require('./' + filePath).init(app)
      }
    })

    app.use(ErrorHandler.handle)

    app.get('/doc', function (req, res) {
      //Expose api doc
      res.sendFile('doc/index.html', {root: process.cwd()})
    })
  }
}

module.exports = new Router()
