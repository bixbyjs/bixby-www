exports = module.exports = function() {
  var Client = require('./internals/client');
  
  var client = new Client();
  
  // FIXME: Errors if these are commented out
  client.use('http:', require('./internals/protocols/http'));
  client.use('https:', require('./internals/protocols/http'));
  
  return client;
}


exports['@provides'] = 'io.modulate.www.Client';
exports['@require'] = [];
exports['@singleton'] = true;
