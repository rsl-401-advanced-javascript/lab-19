'use strict';

const Q = require('@nmq/q/server');
Q.start();

const dbQ = new Q('database');
dbQ.monitorEvent('create');
dbQ.monitorEvent('read');
dbQ.monitorEvent('update');
dbQ.monitorEvent('delete');

const filesQ = new Q('files');
filesQ.monitorEvent('save');
filesQ.monitorEvent('error');

module.exports = { dbQ, filesQ };