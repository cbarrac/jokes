var fs = require('fs');
var child_process = require('child_process')
var max_sleep = 300
var step = 10
//Added a comment that achieves no real goal.
//Non-blocking loop
//Adjustable step
//Status line
//Add a rough time indicator

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
  "Logic error",
  "Almost there",
  "Nearly got it",
  "Not quite working",
  "Ooops!",
  "Did I do that?",
  "Commit all the required changes",
  "Really commit all the required changes",
  "Should work now",
  "Back out the last commit",
  "Reverting changes",
  "One more time...",
  "Re-commiting last"
]

if ( process.argv[ 2 ] && process.argv[ 3 ] ) {
  var inFile = process.argv[ 2 ]
  var outFile = process.argv[ 3 ]
  if (inFile == outFile) {
    console.error("Aborted: infile and outfile must be different")
    return(-1);
  }
  if (process.argv [ 4 ]) max_sleep = process.argv [ 4 ]
  if (process.argv [ 5 ]) step = parseInt(process.argv [ 5 ])
  console.info("Writing from %s to %s, with up to %s seconds between commits of %s bytes", inFile, outFile, max_sleep, step)
  var outFD = fs.openSync(outFile, 'w')
  fs.readFile(inFile, function(err,data) {
    var length = data.length
    var commit_count = Math.ceil(length / step)
    var commit_time = commit_count * max_sleep / 2
    var commit_time_hour = Math.floor(commit_time / 3600)
    var commit_time_rem = commit_time - (commit_time_hour * 3600)
    var commit_time_min = Math.floor(commit_time_rem / 60)
    var commit_time_sec = commit_time_rem - (commit_time_min * 60)
    console.info("Input file is %s Bytes, this will generate %s commits and take approximately %s hours %s minutes %s seconds", length, commit_count, commit_time_hour, commit_time_min, commit_time_sec)
    try {
      child_process.execFileSync('/usr/bin/git', ['add', outFile])
    } catch (e) {
      console.error("Couldn't add %s to git: %s", outFile, e)
    }
    var timeout = randomIntFromInterval(0, max_sleep) * 1000
    var counter = 0
    process.stdout.write("Queueing up the first commit...\r");
    setTimeout(commit, timeout, outFD, outFile, data, counter, length);
  })
} else {
  console.info("Usage:")
  console.info("node commit.js infile outfile [max_time_in_seconds] [step]")
}

function sleep(seconds) {
  var endTime = new Date().getTime() + (seconds * 1000);
  while (new Date().getTime() <= endTime) {;}
}

function randomIntFromInterval(min,max)
{
   return Math.floor(Math.random()*(max-min+1)+min);
}

function commit(outFD, outFile, data, counter, length)
{
  if (counter < length)
  {
    var message = commit_messages[randomIntFromInterval(0, commit_messages.length - 1)]
    var args = ['commit', outFile, '-m', message]
    if (counter + step >= length) step = length - counter
    process.stdout.write("\033[2K Writing " + counter + "/" + length + " bytes: " + message + "\r");
    fs.writeSync(outFD, data.slice(counter, counter+step), 0, step)
    child_process.execFileSync('/usr/bin/git', args)
    var timeout = randomIntFromInterval(0, max_sleep) * 1000
    counter = counter + step
    setTimeout(commit, timeout, outFD, outFile, data, counter, length);
  } else {
    var args = ['push']
    child_process.execFileSync('/usr/bin/git', args)
    console.info("Finis