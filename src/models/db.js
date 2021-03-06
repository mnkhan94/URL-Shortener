// This is the DB Model.
// We'll use Sequelize to connect to the database.

// Dependencies

const Sequelize = require('sequelize');
require('dotenv').config();

// Use Sequelize To Connect To Database
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_SCHEMA,
  port: process.env.DB_PORT,
  // How many connections are happening?
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
  // Prevent overloading the database
  logging: false,
});

// Have Sequelize Create The Table
const url = sequelize.define('url', {
  original_url: {
    type: Sequelize.STRING,
  },
  short_url: {
    type: Sequelize.STRING,
  },
});

// Reach out to the database and sync the changes.
sequelize.sync();

exports.sequelize = sequelize;
exports.url = url;
