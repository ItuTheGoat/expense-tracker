const path = require("path");
const express = require("express");
/* dotenv allows us to create global variables */
const dotenv = require("dotenv");
/* colors allows us to add colors to the console *(optional)* */
const colors = require("colors");
/* 'morgan' is a logger middleware for HTTP requests */
const morgan = require("morgan");
/* cors middleware that tells the server to allow requests from different origins */
const cors = require("cors");

const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });

connectDB();

/* Get the export */
const transactions = require("./routes/transactions");

const app = express();

// Body parser in order to use req.* in tController
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  app.use(cors());
} else if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

/* Link the exported file to the route */
app.use("/api/v1/transactions", transactions);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode and port: ${PORT}`.yellow
      .bold
  )
);
