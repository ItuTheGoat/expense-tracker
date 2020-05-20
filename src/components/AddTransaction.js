import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  // Initialize hooks for thhis component.

  const [transaction, setTransaction] = useState("");
  const [amount, setAmount] = useState(0);

  // Dispatching actions
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      transaction,
      amount: +amount,
    };

    addTransaction(newTransaction);
  };
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="transaction">Transaction:</label>
          <input
            name="transaction"
            placeholder="Transction name..."
            type="text"
            value={transaction}
            onChange={(e) => setTransaction(e.target.value)}
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
        <button className="btn">Add Transaction</button>
      </form>
    </>
  );
};
