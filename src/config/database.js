const connectToDb = async (mongoose, connectionString) => {
  mongoose.connect(connectionString);
}

module.exports = connectToDb;