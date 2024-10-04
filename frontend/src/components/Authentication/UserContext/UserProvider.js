import React, { createContext, useState } from 'react';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        userId: localStorage.getItem('userId') || null,
        userType: localStorage.getItem('userType') || null,
        token: localStorage.getItem('token') || null,
    });

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
