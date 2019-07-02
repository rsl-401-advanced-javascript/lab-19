'use strict';

const apiServer = require('./index');

describe('The API Server', () => {
  it('should have a way to start', () => {
    expect(apiServer.start).toBeDefined();
  });
});