// This is the URL Model. 
// The CRUD functionalities of the Shortened Urls will live in here

// Require the DB as a dependency
const db = require("./db");

/* ~ CREATE ~ */
exports.create = (payload, err, success) => {
	db.url.create(payload).then(success).catch(err);
};

/* ~ READ ~ */
exports.findAll = (err, success) => {
  	db.url.findAll().then(success).catch(err);
};

/* ~ READ Shortened Url by ID ~ */
exports.findID = (payload, err, success) => {
  db.url.find({
    where: {
      id: payload.id,
    },
    include: [{
      all: true,
      nested: true,
    }]
  }).then(success).catch(err);
};