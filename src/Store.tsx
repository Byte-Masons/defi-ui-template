import React, {createContext, useReducer} from "react";
import Reducer,  { defaultState } from './Reducer'

const Store = ({children}:any) => {
    const [state, dispatch] = useReducer(Reducer, defaultState);
    return (
      // @ts-expect-error
      <Context.Provider value={[state, dispatch]}>
        {children}
      </Context.Provider>
    )
};

export const Context = createContext(defaultState);
export default Store;