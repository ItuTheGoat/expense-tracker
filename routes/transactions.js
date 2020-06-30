const express = require("express");
const router = express.Router();
const {
  getTransactions,
  addTransaction,
  deleteTransaction,
} = require("../controllers/transactionController");

/* Router to get all transactions and to add a transaction */
router.route("/").get(getTransactions).post(addTransaction);

/* Router for delete transaction  */
router.route("/:id").delete(deleteTransaction);

module.exports = router;
