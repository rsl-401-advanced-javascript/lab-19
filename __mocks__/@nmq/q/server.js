'use strict';

function Server(namespace) {
  this.namespace = namespace;
  this.monitorEvent = jest.fn();
}

Server.start = jest.fn();

module.exports = Server;