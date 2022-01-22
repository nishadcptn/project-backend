// config.js
require('dotenv').config();
const { DATABASE_URL } = process.env;

module.exports = {
  development: {
    url: DATABASE_URL,
    dialect: 'postgres',
    logging: false,
  },
  test: {
    url: DATABASE_URL,
    dialect: 'postgres',
    logging: false,
  },
  production: {
    url: DATABASE_URL,
    dialect: 'postgres',
    logging: false,
  },
};