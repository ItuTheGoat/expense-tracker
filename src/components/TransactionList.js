import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "./Transaction";

export const TransactionList = () => {
  // Set up the context hook to use the global context
  const { transactions } = useContext(GlobalContext);

  console.log(transactions);
  return (
    <>
      <h3>History</h3>
      <ul className="list" id="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};
