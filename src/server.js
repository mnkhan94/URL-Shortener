// Require Express
const express = require('express');
const bodyParser = require('body-parser')

// Create an app using Express
const app = express();

// Config the localhost port location
const port = 3000;

// Connect Body-Parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Start the server 
const server = app.listen(port, function() {
	  console.log('The Server is running on port ' + port, "success");
});

// Get The Api Routes from specified folder 
app.use('/api', require('../routes/api.js')(express));

// Export Module
module.exports = server;
