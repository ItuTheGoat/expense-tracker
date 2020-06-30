const express = require("express");
/* dotenv allows us to create global variables */
const dotenv = require("dotenv");
/* colors allows us to add colors to the console *(optional)* */
const colors = require("colors");
/* 'morgan' is a logger middleware for HTTP requests */
const morgan = require("morgan");

dotenv.config({ path: "./config/config.env" });

const app = express();

app.get("/", (req, res) => res.send("Hello"));

app.listen();
