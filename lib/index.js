/**
 * Expose component suite.
 */
exports = module.exports = function oauth2(id) {
  var map = {
    'client': './client',
  };
  
  var mid = map[id];
  if (mid) {
    return require(mid);
  }
};


exports.http = require('./internals/protocols/http');
