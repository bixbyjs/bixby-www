var request = require('request');


exports.get = function(url, options, cb) {
  var params = {
    headers: options.headers,
    followRedirect: false
  };
  
  return request.get(url, params, cb);
}
