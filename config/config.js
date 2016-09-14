var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'server'
    },
    port: process.env.PORT || 3000,
    db: 'postgres://Laura:adneom2016@localhost/sweetyCreche'
  },

  test: {
    root: rootPath,
    app: {
      name: 'server'
    },
    port: process.env.PORT || 3001,
    db: 'postgres://Laura:adneom2016@localhost/sweetyCreche'
  },

  production: {
    root: rootPath,
    app: {
      name: 'server'
    },
    port: process.env.PORT || 3002,
    db: 'postgres://Laura:adneom2016@localhost/sweetyCreche'
  }
};

module.exports = config[env];
