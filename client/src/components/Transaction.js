import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ transaction }) => {
  // conditions that determine the transactions color and sign.
  const sign = transaction.amount < 0 ? "-" : "+";
  const classColor = sign === "-" ? "minus" : "plus";

  // Function that allows us to delete
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <div>
      <li className={classColor}>
        {transaction.transaction}
        <span>
          {sign}R{Math.abs(transaction.amount)}
        </span>
        <button
          className="delete-btn"
          onClick={() => deleteTransaction(transaction._id)}
        >
          X
        </button>
      </li>
    </div>
  );
};
