
const log = require('./logger');
const path = require('path');

var pathObj = path.parse(__filename);

log(log);
log(pathObj);
