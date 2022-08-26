const dotenv = require('dotenv');

dotenv.config();

const configuration = {
  database: {
    MONGO_URI: process.env.MONGODB_URI
  },
  PORT: process.env.PORT,
  APP_ID: process.env.APP_ID,
  APP_CERTIFICATE: process.env.APP_CERTIFICATE
}

module.exports = configuration;