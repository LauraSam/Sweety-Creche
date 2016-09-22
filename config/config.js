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
    db: 'postgres://vvnhsxyelcnqzy:W6CrlFPZATmeyoGV2zgPMK7JI5@ec2-54-243-249-154.compute-1.amazonaws.com:5432/da7otcpqqe50e3'
  }
};

module.exports = config[env];
