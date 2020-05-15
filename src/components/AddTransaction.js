import React, { useState } from "react";

export const AddTransaction = () => {
  // Initialize hooks for thhis component.

  const [transaction, setTransaction] = useState("");
  const [amount, setAmount] = useState(0);

  return (
    <>
      <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="transaction">Transaction:</label>
          <input
            name="transaction"
            placeholder="Transction name..."
            type="text"
            value={transaction}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount:</label>
          <input
            name="amount"
            type="number"
            placeholder="Enter amount..."
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
      </form>
    </>
  );
};
