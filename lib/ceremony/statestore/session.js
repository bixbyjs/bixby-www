exports = module.exports = function() {
  var flowstate = require('flowstate');
  
  var store = new flowstate.SessionStore();
  return store;
};

//exports['@implements'] = 'http://i.bixbyjs.org/http/ua/flows/StateStore';
exports['@singleton'] = true;
