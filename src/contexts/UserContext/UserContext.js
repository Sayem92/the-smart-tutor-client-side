import React from 'react';
import { createContext } from 'react';


export const AuthContext = createContext();

const UserContext = ({ children }) => {
    const user = { name: 'sobuj' }

    const authInfo = {user}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;