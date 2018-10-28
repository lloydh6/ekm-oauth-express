const fetch = require('node-fetch');

const DAL = require('../data-access/DAL');
const config = require('../../config');
const urlHelper = require('../lib/urls');

const step1 = (req, res) => {
  console.log('step hit');
  
  if (req == null || Object.keys(req.query).length === 0) {
    throw new Error('Error: Request is null.');
  }

  DAL.executeNonQuery(`INSERT INTO tbl_InitialAuthorization (Code, Scope, State) VALUES ('${req.query.code}', '${req.query.scope}', '${req.query.state}');`);

  const body = {
    client_id: config.clientKey,
    client_secret: config.clientSecret,
    code: req.query.code,
    grant_type: 'authorization_code',
    redirect_uri: 'http://localhost:3000/oauth',
  };

  fetch('https://api.ekm.net/connect/token',
    {
      method: 'POST',
      body: urlHelper.convertObjectToFormUrlEncodedString(body),
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    })
    .then(resp => resp.json())
    .then((resp) => {
      console.log(resp);
    //   if (json != null || json.error != null) {
    //     throw json.error;
    //   }
      return res.send(resp);
    });
    //.catch(error => res.send(JSON.stringify({ Error: error })));
};

module.exports = step1;
