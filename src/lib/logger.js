const DAL = require('../data-access/DAL');

const logger = {
  toDatabase: (query) => {
    DAL.executeNonQuery(query);
  },
};

module.exports = logger;
