'use strict';

jest.mock('@nmq/q/server');
require('@nmq/q/server');

const { dbQ, filesQ } = require('./index');

describe('The message queue', () => {
  it('should create the database and files namespaces', () => {
    expect(dbQ.namespace).toBe('database');
    expect(filesQ.namespace).toBe('files');
  });

  it('should monitor specified events', () => {
    expect(dbQ.monitorEvent).toHaveBeenCalledWith('create');
    expect(dbQ.monitorEvent).toHaveBeenCalledWith('read');
    expect(dbQ.monitorEvent).toHaveBeenCalledWith('update');
    expect(dbQ.monitorEvent).toHaveBeenCalledWith('delete');
  });
});