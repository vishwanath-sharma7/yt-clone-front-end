import { createContext, useEffect, useState } from 'react';


export const LayoutContext = createContext(null);


import React from 'react'

const Context = ({ children }) => {

    const [showSidebar, setShowSidebar] = useState(false)


    const toggleSidebar = () => {
        setShowSidebar(prev => !prev)
    }


    const [videoData, setVideoData] = useState([])

    useEffect(() => {
        async function fetchVideoData() {
            const res = await fetch('http://localhost:5000/videos/random')
            const data = await res.json()

            setVideoData(data)
        }
        fetchVideoData()

    }, [])







    return (
        <LayoutContext.Provider value={
            {
                toggleSidebar,
                showSidebar,
                setShowSidebar,
                videoData
            }













        }>
            {children}
        </LayoutContext.Provider>
    )
}

export default Context