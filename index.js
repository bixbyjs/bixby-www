exports = module.exports = {
  'client': require('./xom/client'),
};

exports.load = function(id) {
  try {
    return require('./xom/' + id);
  } catch (ex) {
    if (ex.code == 'MODULE_NOT_FOUND') { return; }
    throw ex;
  }
};



return;

/**
 * Expose component suite.
 */
exports = module.exports = function www(id) {
  var map = {
    'client': './client',
  };
  
  var mid = map[id];
  if (mid) {
    return require(mid);
  }
};

exports.used = function(container) {
  // Register specs so objects can be auto-wired by interface.
  container.register('client');
}
