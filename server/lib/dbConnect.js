const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "login-project-with-mern",
    });
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.log("failed to connect to database!");
  }
};

module.exports = dbConnect;
