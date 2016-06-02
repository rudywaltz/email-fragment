'use strict';

var config = require('./');
module.exports = {
  open: false,
  port: 3333,
  notify: true,
  logLevel: 'silent',
  server: {
    baseDir: [config.dest]
  }
};
