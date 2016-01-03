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
  "Fi