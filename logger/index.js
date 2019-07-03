'use strict';

const Q = require('@nmq/q/client');

const db = new Q('database');

db.subscribe('create', payload => {
  console.log('DB CREATE', payload);
});

db.subscribe('read', payload => {
  console.log('DB READ', payload);
});

db.subscribe('update', payload => {
  console.log('DB UPDATE', payload);
});

db.subscribe('delete', payload => {
  console.log('DB DELETE', payload);
});

module.exports = db;
