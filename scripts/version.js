#!/usr/bin/env node
var path = '../' + process.argv[2] + '/package.json'
var package = require(path)
console.log(package.name + ':', package.version)
