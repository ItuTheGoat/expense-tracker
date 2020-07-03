const Transactions = require("../models/Transaction");
// @desc    Get all transactions
// @route   GET /api/v1/transactions
// @access  Public
exports.getTransactions = async (req, res, next) => {
  // get the transactions from the model
  try {
    const transactions = await Transactions.find();

    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server error",
    });
  }
};

// @desc    Add transaction
// @route   POST /api/v1/transactions
// @access  Public
exports.addTransaction = async (req, res, next) => {
  const { text, amount } = req.body;

  const transaction = await Transactions.create(req.body);

  try {
    return res.status(201).json({
      success: true,
      data: transaction,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      // Map through the error messages to clean it up to ensure it comes out correctly.
      const msgs = Object.values(error.errors).map((val) => val.message);

      return res.status(400).json({
        success: false,
        error: msgs,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "Server error",
      });
    }
  }
};

// @desc    Delete transaction
// @route   DELETE /api/v1/transactions/:id
// @access  Public
exports.deleteTransaction = async (req, res, next) => {
  try {
    const transaction = await Transactions.findById(req.params.id);

    if (!transaction) {
      return res.send(404).json({
        success: false,
        error: "No transaction with id " + req.params.id,
      });
    }

    await transaction.remove();

    return res.status(200).json({
      success: true,
      data: transaction,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server error",
    });
  }
};

// @desc    Update transaction
// @route   PUT /api/v1/transactions/:id
// @access  Public
exports.updateTransaction = async (req, res, next) => {
  res.send("Pro transaction");
};
