var fs = require('fs');
var child_process = require('child_process')
var max_sleep = 300

if ( process.argv[ 2 ] && process.argv[ 3 ] ) {
  var inFile = process.argv[ 2 ]
  var outFile = process.argv[ 3 ]
  if (process.argv [ 4 ]) max_sleep = process.argv [ 4 ]
  console.info("Writing from %s to %s, with up to %s seconds 