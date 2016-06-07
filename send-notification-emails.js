var http = require('http'); //importing http

var options = {
  host: 'http://localhost',
  port: '9000',
  path: '/api/projects/notifications'
};

console.log('===== SEND NOTIFICATION EMAILS =====');

http.get(options, function(res) {})
  .on('error', function(err) {
    console.log('Error: ', + err.message);
  });