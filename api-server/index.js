'use strict';

const express = require('express');
const app = express();
const Q = require('@nmq/q/client');

app.use(express.urlencoded({ extended: true }));

app.get('/read', (req, res) => {
  Q.publish('read', req.query);
});

app.post('/create', (req, res) => {
  Q.publish('create', req.body);
});

app.put('/update', (req, res) => {
  Q.publish('update', req.body);
});

app.delete('/delete', (req, res) => {
  Q.publish('delete', req.body);
});

module.exports = {
  start: port => {
    app.listen(port, () => console.log(`API Server listening on port ${port}`));
  }
};