// This is the URL Model.
// The CRUD functionalities of the Shortened Urls will live in here

// Require the DB as a dependency
const db = require('./db');

// Requrie the utility
const utility = require('../lib/debug');


/* ~ CREATE ~ */
exports.create = (payload, err, success) => {
  utility.debug('Creating A Shortened Url');

  db.url.create(payload).then(success).catch(err);
};

/* ~ READ ~ */
exports.findAll = (err, success) => {
  db.url.findAll().then(success).catch(err);
};

/* ~ READ Shortened Url by ID ~ */
exports.findID = (payload, err, success) => {
  utility.debug('Fetching all Shortened Urls');

  db.url.find({
    where: {
      id: payload.id,
    },
    include: [{
      all: true,
      nested: true,
    }],
  }).then(success).catch(err);
};

/* READ  */
exports.findShortURL = (payload, err, success) => {
  utility.debug('Finding A Shortened Url By ID');

  db.url.find({
    where: {
      short_url: payload.short_url,
    },
    include: [{
      all: true,
      nested: true,
    }],
  }).then(success).catch(err);
};

/* ~ Delete ~ */
exports.destroy = (payload, err, success) => {
  utility.debug('Destroying A Shortened Url By ID');

  db.url.destroy({
    where: {
      id: payload.id,
    },
  }).then(success).catch(err);
};
