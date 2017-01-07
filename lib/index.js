exports = module.exports = {
  'client': require('./client'),
  'ceremony/dispatcher': require('./ceremony/dispatcher'),
  'ceremony/statestore': require('./ceremony/statestore')
};

exports.load = function(id) {
  try {
    return require('./' + id);
  } catch (ex) {
    if (ex.code == 'MODULE_NOT_FOUND') { return; }
    throw ex;
  }
};
