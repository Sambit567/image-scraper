var AWS = require('aws-sdk');


var s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

//  Change the credentials if running on local machine
//AWS.config.loadFromPath('./config.json');

var myBucket = 'lipu78';

module.exports.Upload = (data,myKey,path) =>{
  var params = {
    'Bucket': myBucket,
    'Key': `${path}/${myKey}`,
    'Body': data,
    ACL:'public-read'
  };

  s3.upload(params, function(err, data) {

    if (err) {

      console.log(err)

    } else {

      console.log(data.Location);

    }

  });

};
