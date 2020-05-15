// We will create our context. We only need one context due to the size of the appplication
import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial state
const initialState = {
  transactions: [
    { id: 1, transaction: "Car", amount: -6000 },
    { id: 2, transaction: "food", amount: -3000 },
    { id: 3, transaction: "clothes", amount: -1200 },
    { id: 4, transaction: "entertainment", amount: -1000 },
    { id: 5, transaction: "side hustle", amount: 8000 },
  ],
};

// Create the context
export const GlobalContext = createContext(initialState);

// We need to create a provider which will provide global context and wrap all the
// children components inside.

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider value={{ transactions: state.transactions }}>
      {children}
    </GlobalContext.Provider>
  );
};
