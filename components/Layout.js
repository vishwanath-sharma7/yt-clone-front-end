import React, { useContext } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { LayoutContext } from '../Context/Context'

const Layout = ({ children }) => {

    const { toggleSidebar, showSidebar } = useContext(LayoutContext)


    return (
        <div className={showSidebar ? 'bg-[#181818] relative h-screen overflow-y-hidden' : ' bg-[#181818] relative overflow-y-scroll h-screen'}>
            <div className='h-auto w-full'>
                <Navbar />
                {children}
                <Sidebar />
            </div>
        </div>
    )
}

export default Layout