'use strict';

jest.mock('@nmq/q/client');
require('@nmq/q/client');
const db = require('./index');

describe('The logger', () => {

  it('should be able to join a namespace', () => {
    expect(db.namespace).toBe('database');
  });

  it('should be able to subscribe to certain events', () => {
    expect(db.subscribe).toHaveBeenCalled();
  });
});