const Item = require('../models/item');

module.exports = function() {
  if (process.env.NODE_ENV === 'test') {
    return Item
      .deleteMany({})
  }
}