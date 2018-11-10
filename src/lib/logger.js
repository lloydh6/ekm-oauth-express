const DAL = require('../data-access/DAL');
const config = require('../../config');

const logger = {
  toDatabase: (query) => {
    if (config.enableLogs) {
      DAL.executeNonQuery(query);
    }
  },
};

module.exports = logger;
