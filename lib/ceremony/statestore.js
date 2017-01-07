exports = module.exports = function(container) {
  return container.create('./statestore/session');
};

exports['@implements'] = 'http://i.bixbyjs.org/http/ua/flows/StateStore';
exports['@singleton'] = true;
exports['@require'] = [ '!container' ];
