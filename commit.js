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
  "How many more of these can I 