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
  "Updated the