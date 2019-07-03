'use strict';

const Q = require('@nmq/q/client');

const db = new Q('database');
const files = new Q('files');

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

files.subscribe('save', payload => {
  console.log('FILES SAVE', payload);
});

files.subscribe('error', error => {
  console.log('FILES ERROR', error);
});

module.exports = db;
