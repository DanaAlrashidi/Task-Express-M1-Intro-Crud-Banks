const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB);
    console.log("Connect to DB!");
  } catch (error) {
    console.log("Could not connect to DB", error);
  }
};
module.exports = connectDB;
