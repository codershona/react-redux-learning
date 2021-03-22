import React, {createContext, useReducer} from 'react';


import reducer, {createActions} from '../reducers/count-reducer';

const CountContext = createContext();


const CountProvider = props => {
    const [counting, dispatch] = useReducer(reducer, 0)
    const actions = createActions(dispatch)

    return (
        <CountContext.Provider value={{counting, ...actions}} >
            {props.children}
        </CountContext.Provider>
    );
};

export {CountProvider, CountContext};