const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const step1 = require('./src/oauth/step-1');
const refresh = require('./src/oauth/refresh');

app.use(bodyParser.json({ extended: true }));

app.get('/', (req, res) => res.send({ Status: { online: true } }));

app.get('/oauth', (req, res) => step1(req, res));

app.post('/oauth/refresh', (req, res) => refresh(req, res));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
