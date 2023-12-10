const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);

    console.log(`Connect to MongoDb database: ${connection.connection.host}`);
  } catch (error) {
    console.error(error);
  }
};

module.exports = connectDb;
