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
  var impl = this._protocols[l.protocol];
  if (!impl) {
    throw new Error('Unsupported protocol: ' + l.protocol);
  }
  return impl.get(url, options, cb);
}

Client.prototype.post = function(url, options, cb) {
  if (typeof options == 'function') {
    cb = options;
    options = undefined;
  }
  options = options || {};
  
  var l = uri.parse(url);
  var impl = this._protocols[l.protocol];
  if (!impl) {
    throw new Error('Unsupported protocol: ' + l.protocol);
  }
  return impl.post(url, options, cb);
}

module.exports = Client;