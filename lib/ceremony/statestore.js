exports = module.exports = function(container) {
  return container.create('./statestore/session');
};

exports['@implements'] = 'http://i.bixbyjs.org/www/ceremony/StateStore';
exports['@singleton'] = true;
exports['@require'] = [ '!container' ];
