// This is the index page!
// This holds the functions for what will happen when the user first visits the homepage.

// Import URLs model
const url = require('../models/url');
const utility = require('utility-tool-mnkhan');

// Export this module, so that server.js can import it
module.exports = (express) => {
  // Use Express to define routers
  const router = express.Router();

  // For the initial page of the API, welcome the user
  router.get('/', (req, res) => {
    res.json(
      {
        Hi: 'Welcome to the short.io URL-Shortener [Local Push + Deploy]',
        GET: {
          '/': 'Will take you to the Welcome Screen',
          '/go/:shortUrl': 'Will redirect you to the Original Url',
          '/api/v1/urls': 'Returns back all URLs in database',
        },
        POST: {
          '/api/v1/url': 'Saves a new shortened url like short.io/v97fhg',
          '/api/v1/url/:id': 'Finds & Updates the specified shortened Url',
        },
        DELETE: {
          '/api/v1/url/:id': 'Finds & Deletes the specified shortened Url',
        },
      });
  });

  router.get('/go/:shortURL', (req, res) => {
    const request = req;
    request.body.short_url = req.params.shortURL;
    url.findShortURL(req.body, (err) => {
      utility.debug('URL not found!', 'error');
      res.status(500).json(err);
    }, (data) => {
      utility.debug('Redirecting to http://www.' + data.original_url, 'success');
      res.redirect('http://www.' + data.original_url);
    });
  });

  // Import API Routes
  router.use('/api/v1', require('./api/url.js')(express));


  // Return The Built Router
  return router;
};
