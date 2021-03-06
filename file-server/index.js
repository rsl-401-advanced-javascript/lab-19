'use strict';

const Q = require('@nmq/q/client');

const fs = require('fs');
const { promisify } = require('util');
const fsReadFile = promisify(fs.readFile);
const fsWriteFile = promisify(fs.writeFile);

const alterFile = async file => {
  try {
    if (!file) throw Error;
    let data = await fsReadFile(file);
    let text = data.toString().toUpperCase();
    await fsWriteFile(file, Buffer.from(text));
    Q.publish('files', 'save', `${file} saved!`);
  } catch (error) {
    Q.publish('files', 'error', 'Error in altering file.');
  }
};

let file = process.argv.slice(2).shift();
alterFile(file);

module.exports = { alterFile, Q };
