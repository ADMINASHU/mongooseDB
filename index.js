import { connect } from "mongoose";

const dbConnect = (DB_URL) => {
  try {
    connect(DB_URL, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log("database connection successfully....");
  } catch (error) {
    console.log("connection error: ", error.message);
  }
};

export default dbConnect;
