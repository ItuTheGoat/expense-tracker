const mongoose = require("mongoose");

/* Function that connects db to application. We use an async method because the 
app must be able to run while data is being retreived */
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopolgy: true,
    });
    console.log(
      `Mongodb Connected: ${conn.connection.host}`.cyan.underline.bold
    );
  } catch (error) {
    console.log("Error".red);
    process.exit(1);
  }
};

module.exports = connectDB;
