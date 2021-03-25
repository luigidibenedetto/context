import {createContext, useState} from 'react';
import React from 'react';

const initialState = 'Forza Milan';

export const StringContext = createContext(initialState);

export const StringProvider = ({children}) => {
    const [name, setName] = useState(initialState);

    return (
        <StringContext.Provider value={[name, setName]}>
            {children}
        </StringContext.Provider>
    )
}