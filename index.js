const config = require('./config/protractor_shared').config;

config.suites = ["./testScript/angular.js"]

exports.config = config;
