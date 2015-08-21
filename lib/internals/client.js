function Client() {
  this._protocols = {};
}

Client.prototype.use = function(protocol, plugin) {
  
}

Client.prototype.get = function(url, options, cb) {
  console.log('client get: ' + url);
}

module.exports = Client;