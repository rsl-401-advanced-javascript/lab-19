'use strict';

function Client(namespace) {
  this.namespace = namespace;
  this.subscribe = jest.fn();
}

Client.publish = jest.fn();

module.exports = Client;
