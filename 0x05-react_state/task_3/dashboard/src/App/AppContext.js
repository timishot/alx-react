import React from 'react'

export const defaultUser = {
    email: '',
    password: '',
    isLoggedIn: false,
};

export const defaultLogout = ()=> {
    defaultUser.isLoggedIn  = false;
};

export const AppContext = React.createContext({
    user: defaultUser,
    logOut: defaultLogout,
})

