// This is the index page! This holds the functions for what will happen when the user first visits the homepage.

// Import URLs model
const url = require("../models/url");

// Export this module, so that server.js can import it
module.exports = function (express) {

	// Use Express to define routers
	const router = express.Router();

	// For the initial page of the API, welcome the user
	router.get('/', function(req, res) {
		res.json(
			{
				Hi: "Welcome to the short.io URL-Shortener",
				GET: {
					"/": "Will take you to the Welcome Screen",
					"/go/:shortUrl": "Will redirect you to the Original Url",
					"/api/v1/url": "Returns back all URLs in database'"
				},
				POST: {
					"/api/v1/url": "Saves a new url like short.io/v97fhg'",
					"/api/v1/url/:id": "Finds & Updates the specified shortened Url"
				},
				DELETE: {
					"/api/v1/url/:id": "Finds & Deletes the specified shortened Url",
				}
			}
		);

	});

	// Return The Built Router
	return router;
}
