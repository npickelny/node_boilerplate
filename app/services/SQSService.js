'use strict'
let AWS = require('aws-sdk');

class SQSService {
  constructor() { }

  lala(){
    // Create an SQS service object
    console.log("lala")
    var sqs = new AWS.SQS({apiVersion: '2012-11-05', region: 'us-east-1'});

    var params = {};

    sqs.listQueues(params, function(err, data) {
      if (err) {
        console.log("Error", err);
      } else {
        console.log("Success", data.QueueUrls);
      }
    });
  }

  lalwa () {
    var params = {
      QueueUrl: 'STRING_VALUE', /* required */
      AttributeNames: [
        All | Policy | VisibilityTimeout | MaximumMessageSize | MessageRetentionPeriod | ApproximateNumberOfMessages | ApproximateNumberOfMessagesNotVisible | CreatedTimestamp | LastModifiedTimestamp | QueueArn | ApproximateNumberOfMessagesDelayed | DelaySeconds | ReceiveMessageWaitTimeSeconds | RedrivePolicy | FifoQueue | ContentBasedDeduplication | KmsMasterKeyId | KmsDataKeyReusePeriodSeconds,
        /* more items */
      ],
      MaxNumberOfMessages: 0,
      MessageAttributeNames: [
        'STRING_VALUE'
      ],
      ReceiveRequestAttemptId: 'STRING_VALUE',
      VisibilityTimeout: 0,
      WaitTimeSeconds: 0
    };

    sqs.receiveMessage(params, function(err, data) {
      if (err) {
        console.log(err, err.stack);
      } // an error occurred
      else{
        console.log(data);           // successful response
      }
    });
  }
}

module.exports = SQSService;
