import React, { useContext } from 'react'
import Context from '../Context/Context'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { LayoutContext } from '../Context/Context'

const Layout = () => {

    const { toggleSidebar, showSidebar } = useContext(LayoutContext)


    return (
        <div className='relative'>
            <Navbar toggleSidebar={toggleSidebar} showSidebar={showSidebar} />
            <Sidebar toggleSidebar={toggleSidebar} showSidebar={showSidebar} />
        </div>
    )
}

export default Layout