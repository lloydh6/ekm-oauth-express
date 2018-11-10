const fetch = require('node-fetch');

const log = require('../lib/logger');
const config = require('../../config');
const urlHelper = require('../lib/urls');

const step1 = (req, res) => {
  if (req == null || Object.keys(req.query).length === 0) {
    throw new Error('Error: Request is null.');
  }

  log.toDatabase(`INSERT INTO tbl_InitialAuthorization (Code, Scope, State) VALUES ('${req.query.code}', '${req.query.scope}', '${req.query.state}');`);

  const body = urlHelper.convertObjectToFormUrlEncodedString({
    client_id: config.clientKey,
    client_secret: config.clientSecret,
    code: req.query.code,
    grant_type: 'authorization_code',
    redirect_uri: config.redirectUri,
  });

  const tokenEndpoint = config.ekmOauthApiUri;
  const method = 'POST';

  log.toDatabase(`INSERT INTO tbl_RequestLogs (Endpoint, Verb, Body, Type) VALUES ('${tokenEndpoint}', '${method}', '${body}', 1);`);

  fetch(tokenEndpoint,
    {
      method,
      body,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    })
    .then(resp => resp.json())
    .then(resp => res.send(resp));
};

module.exports = step1;
