exports = module.exports = function(store) {
  var flowstate = require('flowstate');
  
  var dispatcher = new flowstate.Manager(store);
  return dispatcher;
};

exports['@implements'] = 'http://i.bixbyjs.org/www/ceremony/Dispatcher';
exports['@singleton'] = true;
exports['@require'] = [
  'http://i.bixbyjs.org/www/ceremony/StateStore'
];
