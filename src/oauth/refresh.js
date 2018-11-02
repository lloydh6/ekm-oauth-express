const fetch = require('node-fetch');

const config = require('../../config');
const urlHelper = require('../lib/urls');

const refresh = (req, res) => {
  const body = {
    client_id: config.clientKey,
    client_secret: config.clientSecret,
    grant_type: 'refresh_token',
    refresh_token: req.body.refresh_token,
    scope: req.body.scope,
  };

  fetch('https://api.ekm.net/connect/token',
    {
      method: 'POST',
      body: urlHelper.convertObjectToFormUrlEncodedString(body),
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    })
    .then(resp => resp.json())
    .then(resp => res.send(resp));
};

module.exports = refresh;
