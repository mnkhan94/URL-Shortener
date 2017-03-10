///////////////
// The Debugger
///////////////

// Use Colors Package
const colors = require('colors');
const fs = require('fs');
const stamp = require('log-timestamp');


// console.log(colors.green(message));
function debug (info, status, error) {
  if(process.env.DEBUG == 'true') {

  	if (status == "success") {

  		console.log(colors.green(info)) 

  	} else if (status == "error") {

  		console.log(colors.red(info)); 


  	}

  	date = new Date();
	timestamp = "[" + date.toISOString() + "] ";
    
    fs.appendFile('src/logs/log.log', '\n' + timestamp + info, function (err) {
	});
  };
}

exports.debug = debug;

