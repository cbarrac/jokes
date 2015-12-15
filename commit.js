var fs = require('fs');
var child_process = require('child_process')
var max_sleep = 300

if ( process.argv[ 2 ] && process.argv[ 3 ] ) {
  var inFile = process.argv[ 2 ]
  var outFile = process.argv[ 3 ]
  if (process.argv [ 4 ]) max_sleep = process.argv [ 4 ]
  console.info("Writing from %s to %s, with up to %s seconds between commits", inFile, outFile, max_sleep)
  var outFD = fs.openSync(outFile, 'w')
  fs.readFile(inFile, function(err,data) {
    var length = data.length
    console.info("Bytes: %s", length)
    try {
      child_process.execFileSync('/usr/bin/git', ['add', outFile])
    } catch (e) {
      console.error("Couldn't add %s to git: %s", outFile, e)
    }
    var args = ['commit', outFile, '-m', 'Update character']
    for (var c