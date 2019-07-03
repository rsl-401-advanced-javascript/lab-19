'use strict';

const express = require('express');
const app = express();
const Q = require('@nmq/q/client');

app.use(express.urlencoded({ extended: true }));

app.get('/read', (req, res) => {
  Q.publish('database', 'read', req.query);
});

app.post('/create', (req, res) => {
  Q.publish('database', 'create', req.body);
});

app.put('/update', (req, res) => {
  Q.publish('database', 'update', req.body);
});

app.delete('/delete', (req, res) => {
  Q.publish('database', 'delete', req.body);
});

module.exports = {
  start: port => {
    app.listen(port, () => console.log(`API Server listening on port ${port}`));
  }
};