const express = require('express');

const app = express();
const port = 3000;

const step1 = require('./src/oauth/step-1');

app.get('/', (req, res) => res.send({ Status: { online: true } }));

app.get('/oauth', (req, res) => step1(req, res) );

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
