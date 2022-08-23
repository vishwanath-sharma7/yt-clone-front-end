import React, { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Layout = () => {

    const [showSidebar, setShowSidebar] = useState(false)


    const toggleSidebar = () => {
        setShowSidebar(prev => !prev)
    }
    return (
        <div>
            <Navbar toggleSidebar={toggleSidebar} showSidebar={showSidebar} />
            <Sidebar toggleSidebar={toggleSidebar} showSidebar={showSidebar} />
        </div>
    )
}

export default Layout