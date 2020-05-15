import React from "react";

export const TransactionList = () => {
  return (
    <>
      <h3>History</h3>
      <ul className="list" id="list">
        <li className="minus">
          Cash <span>-R400</span> <button className="delete-btn">X</button>
        </li>
      </ul>
    </>
  );
};
