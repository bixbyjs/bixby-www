var request = require('request');

exports.get = function(url, options, cb) {
  //console.log('HTTP GET: ' + url);
  
  var opts = {
    url: url,
    method: 'GET',
    headers: options.headers,
    followRedirect: true
  };
  request(opts, function(err, res, body) {
    if (err) { return cb(err); }
    return cb(null, res, body);
  });
}
