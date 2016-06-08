var http = require('http'); //importing http

var options = {
  host: 'localhost',
  port: '9000',
  path: '/api/projects/notifications'
};

http.get(options, function(res) {})
  .on('error', function(err) {
    console.log('Error: ', + err.message);
  });