const fetch = require('node-fetch');

const DAL = require('../data-access/DAL');
const config = require('../../config');

const step1 = (req, res) => {
  if (req == null || Object.keys(req.query).length === 0) {
    throw new Error('Error: Request is null.');
  }

  DAL.executeNonQuery(`INSERT INTO tbl_InitialAuthorization (Code, Scope, State) VALUES ('${req.query.code}', '${req.query.scope}', '${req.query.state}');`);

  fetch('https://api.ekm.net/connect/token',
    {
      method: 'POST',
      body: {
        client_id: config.clientKey,
        client_secret: config.clientSecret,
        code: req.query.code,
        grant_type: 'authorization_code',
        redirect_uri: 'http://localhost:3000/oauth',
      },
    })
    .then(resp => resp.json())
    .then(json => console.log(json));


  return res.send({ code: req.query.code, scope: req.query.scope, state: req.query.state });
};

module.exports = step1;
