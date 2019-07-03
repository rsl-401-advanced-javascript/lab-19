'use strict';

const Q = require('@nmq/q/server');
Q.start();

const dbQ = new Q('database');
dbQ.monitorEvent('create');
dbQ.monitorEvent('update');
dbQ.monitorEvent('delete');