const mongoose = require("mongoose");

const dbConnect = (DB_URL) => {
  try {
    mongoose.connect(DB_URL, {
      useNewUrlParser: true,
    });
    console.log("database connection successfully....");
  } catch (error) {
    console.log("connection error: ", error.message);
  }
};

module.exports = dbConnect;
