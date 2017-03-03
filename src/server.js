// Require Express
const express = require('express');
const bodyParser = require('body-parser')
const randomstring = require('randomstring')

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

// Post 
app.post('/api/v1/urls', (req, res) => {
	
	url_short = randomstring.generate(6);

    res.status(200).json(url_short);

});