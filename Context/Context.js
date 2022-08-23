import { createContext, useState } from 'react';


export const LayoutContext = createContext(null);


import React from 'react'

const Context = ({ children }) => {

    const [showSidebar, setShowSidebar] = useState(false)


    const toggleSidebar = () => {
        setShowSidebar(prev => !prev)
    }








    return (
        <LayoutContext.Provider value={
            {
                toggleSidebar,
                showSidebar
            }













        }>
            {children}
        </LayoutContext.Provider>
    )
}

export default Context