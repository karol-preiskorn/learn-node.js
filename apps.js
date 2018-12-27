// Learning javascript
// @ts-check
// @author: Karol Preiskorn
//
// jshint esversion:6, maxparams:3

const log = require('./logger');
const path = require('path');
const os = require('os');
const fs = require('fs');

var pathObj = path.parse(__filename);
var totalMemory = os.totalMemory;
var freeMemory = os.freeMemory;

console.log(`TotalMemory: ${totalMemory}, freeMemory: ${freeMemory}`);

// fs testing
var files = fs.readdirSync('./');
var files_async = fs.readdir('./', (err, files) => {
   files.forEach(file => {
      log(file);
    });
})

log(files);
log(pathObj);
