// The Debugger

// Use Colors Package
const colors = require('colors');
const fs = require('fs');

// console.log(colors.green(message));
function debug(info, status) {
  if (process.env.DEBUG === 'true') {
    if (status === 'success') {
      console.log(colors.green(info));
    } else if (status === 'error') {
      console.log(colors.red(info));
    }

    const date = new Date();
    const timestamp = '[' + date.toISOString() + '] ';

    fs.appendFile('src/logs/log.log', '\n' + timestamp + info, (err) => {
      if (err !== null) { // If there is an error, write the error to the log.
        fs.appendFile('src/logs/log.log', '\n' + err);
      }
    });
  }
}

exports.debug = debug;
