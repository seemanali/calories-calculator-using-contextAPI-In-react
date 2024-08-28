import React from 'react'
import UserContext from './UserContext'


const ContextProvider = ({children , value}) =>{

    return(
 <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>);
    
}

// const ContextProvider = UserContext.Provider;
export default ContextProvider
