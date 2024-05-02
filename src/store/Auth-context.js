import React, { useState } from 'react';
const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: () => { },
    logout: () => { },
});

const AuthContextProvider = (props) => {
    const [token, setToken] = useState(null)

    const userIsLoggedIn = !!token;

    const loginHandler = (newToken) => {

        setToken(newToken);
     };
    const logoutHandler = () => {
        setToken(null);
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
 
export {AuthContextProvider, AuthContext}