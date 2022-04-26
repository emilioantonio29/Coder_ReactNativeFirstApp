import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalProvider = ({children}) => {

    const [showLoading, setShowLoading] = React.useState(false);

    return  <GlobalContext.Provider 
                value={{showLoading, setShowLoading}}
            >
                {children}
            </GlobalContext.Provider>

}

