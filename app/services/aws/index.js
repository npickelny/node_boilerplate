'use strict';

let _ = require('lodash');
let Promise = require('bluebird');
let AWS     = require('aws-sdk');

class AWSInitializer {
  constructor() {}

  static init() {
    console.log("AWS Init");
    const myConfig = new AWS.Config();
    myConfig.update({region: 'us-east-1'});
    console.log(myConfig);
    return myConfig
  }

}
module.exports = AWSInitializer;
