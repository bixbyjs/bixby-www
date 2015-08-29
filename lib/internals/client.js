var uri = require('url');


function Client() {
  this._protocols = {};
}

Client.prototype.use = function(scheme, impl) {
  this._protocols[scheme] = impl;
}

Client.prototype.get = function(url, options, cb) {
  if (typeof options == 'function') {
    cb = options;
    options = undefined;
  }
  options = options || {};
  
  var l = uri.parse(url);
  //console.log(l);
  
  var impl = this._protocols[l.protocol];
  if (!impl) {
    return cb(new Error('Unsupported protocol: ' + l.protocol));
  }
  impl.get(url, options, cb);
}

module.exports = Client;