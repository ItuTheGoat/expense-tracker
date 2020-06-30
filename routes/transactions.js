const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.send("Transaction file"));

module.exports = router;
