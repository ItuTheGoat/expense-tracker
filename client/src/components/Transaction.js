import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";

export const Transaction = ({ transaction }) => {
  // conditions that determine the transactions color and sign.
  const sign = transaction.amount < 0 ? "-" : "+";
  const classColor = sign === "-" ? "minus" : "plus";

  // Function that allows us to delete
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <div>
      <li className={classColor}>
        {transaction.text}
        <span>
          {sign}R{numberWithCommas(Math.abs(transaction.amount))}
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
