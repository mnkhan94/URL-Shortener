module.exports = function(express) {
    const router = express.Router();
    // Package for Random Alphanumeric String
    const randomstring = require('randomstring')

    // Post 
    router.post('/v1/urls', (req, res) => {
        
        // Create an Alphanumeric String
        url_short = randomstring.generate(6);

        // Return The String
        res.status(200).json(url_short);

    });

    return router
}