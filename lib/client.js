exports = module.exports = function() {
  var Client = require('./internals/client');
  
  var client = new Client();
  return client;
}


exports['@provides'] = 'io.modulate.www.Client';
exports['@require'] = [];
