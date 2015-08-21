var uri = require('url');


function Client() {
  this._protocols = {};
}

Client.prototype.use = function(protocol, impl) {
  console.log('USE: ' + protocol);
  this._protocols[protocol] = impl;
}

Client.prototype.get = function(url, options, cb) {
  if (typeof options == 'function') {
    cb = options;
    options = undefined;
  }
  options = options || {};
  
  console.log('client get: ' + url);
  
  var l = uri.parse(url);
  console.log(l);
  
  var impl = this._protocols[l.protocol];
  if (!impl) {
    return cb(new Error('Unsupported protocol: ' + l.protocol));
  }
  impl.get(url, options, cb);
}

module.exports = Client;