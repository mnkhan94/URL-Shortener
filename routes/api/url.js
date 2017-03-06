const url = require("../../models/url");

// Export Express From Index.js

module.exports = function (express) {

  // Use Express' Router
  const router = express.Router();

  // Package for Random Alphanumeric String
  const randomstring = require('randomstring')

  // CREATE A Shortened URL
  router.post('/url', (req, res) => {
    
  // Create an Alphanumeric String
    url_short = randomstring.generate(6);
    req.body.short_url = url_short;
    
    url.create(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });


  // READ / Get all Shortened URLS
  router.get("/urls", (req, res) => {
    url.findAll((err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    })
  });

  // READ Specific Shortened URL by ID
  router.get("/urls/:id", (req, res) => {
    req.body.id = req.params.id;
    url.findID(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    })
  });

  // Update URL Based by ID

  router.post("/urls/:id", (req, res) => {
    req.body.id = req.params.id;
    url.update(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    })
  });

  // Delete URL Based On ID

  router.delete("/urls/:id", (req, res) => {
    req.body.id = req.params.id;
    url.destroy(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    })
  });

  return router;

};