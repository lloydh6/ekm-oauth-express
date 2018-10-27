const DAL = require('../data-access/DAL');

const step1 = (req, res) => {
  if (req == null || Object.keys(req.query).length === 0) {
    throw new Error('Error: Request is null.');
  }

  DAL.executeNonQuery(`INSERT INTO tbl_InitialAuthorization (Code, Scope, State) VALUES ('${req.query.code}', '${req.query.scope}', '${req.query.state}');`);

  return res.send({ code: req.query.code, scope: req.query.scope, state: req.query.state });
};

module.exports = step1;
