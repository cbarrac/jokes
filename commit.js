var fs = require('fs');
var child_process = require('child_process')
var max_sleep = 300
//Added a comment that achieves no real goal.

var commit_messages = [
  "Fixing an important issue with the universe.",
  "Someone poisoned the waterhole!",
  "You feeling lucky punk?",
  "Five bullets or six?",
  "Fixed memory parsing error #1337",
  "Cleaned out the intertubes",
  "AAAAAAAAAAARGH!",
  "Fixed a typo",
  "Updated the readme",
  "Fixing a typo added in the last readme update",
  "GET A HAIRCUT!",
  "Updated the readme again",
  "Found an issue with the letter 'a', so I fixed it.",
  "Incompatible dimensions found, Cthuhlu Error 666",
  "Who you calling a fool?",
  "How many more of these can I make?",
  "Fixing an error introduced in the last commit",
  "Re-updating the readme.",
  "Work in Progress",
  "WIP",
  "Quick fix",
  "Grammar fix",
  "Fixing punctuation",
  "Correcting style",
  "Logic error"
]

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
    var message = commit_messages[randomIntFromInterval(0, commit_messages.length - 1)]
    var args = ['commit', outFile, '-m', message]
    for (var counter = 0; counter < length; counter++)
    {
      var message = commit_messages[rando