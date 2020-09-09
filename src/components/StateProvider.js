import React, { createContext, useContext, useReducer } from 'react'

// prepare the data
export const StateContext = createContext();

// wrap our app and provide the data
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext)
