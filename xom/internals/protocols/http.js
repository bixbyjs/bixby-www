var request = require('request');


exports.get = function(url, options, cb) {
  var params = {
    headers: options.headers,
    followRedirect: false
  };
  
  return request.get(url, params, cb);
}

exports.post = function(url, options, cb) {
  var params = {
    headers: options.headers,
    body: options.body,
    followRedirect: false
  };
  
  return request.post(url, params, cb);
}
