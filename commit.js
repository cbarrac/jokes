var fs = require('fs');
var child_process = require('child_process')
var max_sleep = 300

if ( process.argv[ 2 ] && process.argv[ 3 ] ) {
  var inFile = process.ar