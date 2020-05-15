import React from "react";

export const Transaction = ({ transaction }) => {
  // conditions that determine the transactions color and sign.
  const sign = transaction.amount < 0 ? "-" : "+";
  const classColor = sign === "-" ? "minus" : "plus";

  return (
    <div>
      <li className={classColor}>
        {transaction.transaction}
        <span>
          {sign}R{Math.abs(transaction.amount)}
        </span>
        <button className="delete-btn">X</button>
      </li>
    </div>
  );
};
