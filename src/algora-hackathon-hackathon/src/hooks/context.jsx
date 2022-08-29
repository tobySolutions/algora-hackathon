import { useState } from "react";
import { createContext } from "react";

const initialState = {
  name: null,
  Address: null,
};

export const StateContext = createContext(initialState)


export function StateContextProvider({ children }) {
    const [user, setUser] = useState("Clement")
    return (
        <StateContext.Provider value ={user}>
            {children}
        </StateContext.Provider>
    )
}