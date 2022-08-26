const connectToDb = require('./config/database');
const {database} = require('./config');
const mongoose = require("mongoose");
const app = require('./app');
const config = require('./config')


connectToDb(mongoose, database.MONGO_URI)
  .then(() => {
    console.log("Database connection established");
    app.listen(config.PORT, () => {
      console.log(`server running on port 3000`);
    });
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  })
