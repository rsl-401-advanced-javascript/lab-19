'use strict';

jest.mock('@nmq/q/client');
require('@nmq/q/client');
const { alterFile, Q } = require('./index');

describe('AlterFile', () => {
  it('should publish an event on save', async () => {
    await alterFile('test.txt');
    expect(Q.publish).toHaveBeenCalledWith('save', 'test.txt saved!');
  });

  it('should publish an event on error', async () => {
    await alterFile();
    expect(Q.publish).toHaveBeenCalledWith('error', 'Error in altering file.');
  });
});