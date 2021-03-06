'use strict';

const buildException = require('../exceptions/exception_factory').buildException,
    exceptions = require('../exceptions/exception_factory').exceptions;

const options = {
  files: [],
  db: false,
  type: '',
  force: false,
  dto: false,
  pagination: false,
  service: false,
  skipClient: false,
  skipServer: false,
  angularSuffix: false,
  microserviceName: false,
  searchEngine: false,
  displayHelp: false,
  displayVersion: false
};

module.exports = {
  parseOptions: parseOptions
};

function parseOptions(args) {
  if (!args || args.length < 3) {
    throw new buildException(
        exceptions.IllegalArgument, 'The passed args must be valid.');
  }
  for (var i = 2; i < args.length; i++) {
    switch (args[i]) {
      case '-db':
        options.db = true;
        options.type = args[i + 1];
        i++;
        break;
      case '-f':
      case '-force':
        options.force = true;
        break;
      case '-dto':
        options.dto = true;
        break;
      case '-paginate':
        options.paginate = true;
        break;
      case '-service':
        options.service = true;
        break;
      case '-skip-client':
        options.skipClient = true;
        break;
      case '-skip-server':
        options.skipServer = true;
        break;
      case '-angular-suffix':
        options.angularSuffix = true;
        break;
      case '-microservice-name':
        options.microserviceName = true;
        break;
      case '-search-engine':
        options.searchEngine = true;
        break;
      case '-h':
      case '-help':
        options.displayHelp = true;
        return options;
      case '-v':
      case '-version':
        options.displayVersion = true;
        return options;
      default:
        options.files.push(args[i]);
    }
  }
  return options;
};