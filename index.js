
async function dbConnect(DB_URL) {
  try {
    await mongoose.connect(DB_URL, { useNewUrlParser: true });
    console.log("database connection successfully....");
  } catch (error) {
    console.log(error.message);
  }
}


export default dbConnect();
