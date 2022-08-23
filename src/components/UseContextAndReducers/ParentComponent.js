import React, {useState, useReducer, createContext} from 'react';
import ChildComponentA from './ChildComponentA';

const initialState = 0;
const reducer =(state, action)=> {
    switch(action) {
        case "increment":
          return state + 1;
          default: 
          return initialState
    }
}
export const ParentContext = createContext();
const ParentComponent = () => {    
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <>
          <ParentContext.Provider value={{count, dispatch}}>
                <ChildComponentA></ChildComponentA>
            </ParentContext.Provider>  
        </>
    );
};

export default ParentComponent;