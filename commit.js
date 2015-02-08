var child_process = require('child_process')
var fs = require('fs');
var max_sleep = 300
var step = 10
//Added a comment that achieves no real goal.
//Non-blocking loop
//Adjustable step
//Status line
//Add a rough time indicator
//First cut at libfaketime support

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
  "Re-commiting last",
  "One more User Story done",
  "Can work my way through the Kanban",
  "Sprint complete",
  "Well that seemed pretty easy",
  "What do you mean you can't pack up the commit?",
  "Merge in master",
  "Fast-forwarding changes"
]

if ( process.argv[ 2 ] && process.argv[ 3 ] ) {
  var inFile = process.argv[ 2 ]
  var outFile = process.argv[ 3 ]
  if (inFile == outFile) {
    console.error("Aborted: infile and outf