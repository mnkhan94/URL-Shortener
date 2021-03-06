// Require Express
const express = require('express');
const bodyParser = require('body-parser');

// Create an app using Express
const app = express();

const utility = require('utility-tool-mnkhan');

// Config the localhost port location
const port = process.env.PORT || 3000;

// Connect Body-Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Start the server
const server = app.listen(port, () => {
  utility.debug('The Server is running on port ' + port, 'success');
});

// Get The Api Routes from specified folder
app.use('/', require('./routes')(express));

// Export Module
module.exports = server;
