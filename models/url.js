// This is the URL Model. 
// The CRUD functionalities of the Shortened Urls will live in here

// Require the DB as a dependency
const db = require("./db");

/* ~ CREATE ~ */
exports.create = (payload, err, success) => {
	db.url.create(payload).then(success).catch(err);
};
