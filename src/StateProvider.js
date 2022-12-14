import React, { createContext, useContext, useReducer } from "react";

//Prepares the dataLayer
export const StateContext = createContext();

//THis Wrap our App
export const StateProvider = ({ reducer, initialState, children
}) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
  
)

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);