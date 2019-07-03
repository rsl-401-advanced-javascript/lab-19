'use strict';

function Client(namespace) {
  this.namespace = namespace;
  this.subscribe = jest.fn();
  this.publish = jest.fn();
}

module.exports = Client;
