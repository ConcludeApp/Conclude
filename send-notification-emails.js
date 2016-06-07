var http = require('http'); //importing http

var options = {
  host: 'localhost',
  port: process.env.port || '8080',
  path: '/api/projects/notifications'
};

console.log('===== SEND NOTIFICATION EMAILS =====');
console.log(process.env)

http.get(options, function(res) {})
  .on('error', function(err) {
    console.log('Error: ', + err.message);
  });