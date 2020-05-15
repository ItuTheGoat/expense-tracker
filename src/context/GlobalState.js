// We will create our context. We only need one context due to the size of the appplication
import React, { createContext, useReducer } from "react";

// Initial state
const initialState = {
  transactions: [
    { id: 1, transaction: "Car", amount: -6000 },
    { id: 2, transaction: "food", amount: -3000 },
    { id: 3, transaction: "clothes", amount: -1200 },
    { id: 4, transaction: "entertainment", amount: -1000 },
  ],
};

// Create the context
export const GlobalContext = createContext(initialState);
