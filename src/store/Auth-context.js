import React, { useState } from 'react';
const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: () => { },
    logout: () => { },
});

const AuthContextProvider = (props) => {
    const initialToken = localStorage.getItem('token');
    const [token, setToken] = useState(initialToken);
    const [logoutTimer, setLogoutTimer] = useState(null);

    const userIsLoggedIn = !!token;

    const loginHandler = (newToken) => {
        setToken(newToken);
        localStorage.setItem('token', token);
        setLogoutTimer(setTimeout(logoutHandler, 300000));
     };
    const logoutHandler = () => {
        setToken(null);
        localStorage.removeItem('token');
        clearTimeout(logoutTimer);
    };
    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
    }

    return <AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>
}
 
export  {AuthContextProvider, AuthContext}

