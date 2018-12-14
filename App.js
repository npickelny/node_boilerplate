'use strict';

let express = require('express');
let Promise = require('bluebird');
let Logger  = require('./app/utils/Logger');
let Router  = require('./app/routes/Router');
let SQSService = require('./app/services/SQSService')

let app = express();
app.use(require('body-parser').json());
app.use(require('winston-request-logger').create(Logger));
app.use(require('cors')());

Router.initializeApp(app);

// Add promises that need to be completed before starting the server here
app.initialization = [
 new SQSService().lala(),
  console.log("App.initialization ...")
];

module.exports = app;
