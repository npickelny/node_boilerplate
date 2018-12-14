'use strict'

let Promise = require('bluebird')
let app = require('./App')
let Logger = require('./app/utils/Logger')
let Config = require('./app/config/Config')

Promise.all(app.initialization)
  .then(() => {
    let port = Config.PORT
    app.listen(port, () => {
      Logger.info(`App listening on port ${port}!`)
    })
  })
  .catch(err => {
    Logger.error('Failed initializing app', err)
  })
