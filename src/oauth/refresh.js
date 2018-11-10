const fetch = require('node-fetch');

const config = require('../../config');
const urlHelper = require('../lib/urls');
const log = require('../lib/logger');

const refresh = (req, res) => {
  const body = urlHelper.convertObjectToFormUrlEncodedString({
    client_id: config.clientKey,
    client_secret: config.clientSecret,
    grant_type: 'refresh_token',
    refresh_token: req.body.refresh_token,
    scope: req.body.scope,
  });

  const tokenEndpoint = config.ekmOauthApiUri;
  const method = 'POST';

  log.toDatabase(`INSERT INTO tbl_RequestLogs (Endpoint, Verb, Body, Type) VALUES ('${tokenEndpoint}', '${method}', '${body}', 2);`);

  fetch(tokenEndpoint,
    {
      method,
      body,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    })
    .then(resp => resp.json())
    .then(resp => res.send(resp));
};

module.exports = refresh;
