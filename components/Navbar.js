import React, { useContext } from 'react'
import { LayoutContext } from '../Context/Context'

const Navbar = (props) => {


    const { toggleSidebar, showSidebar } = useContext(LayoutContext)

    return (
        <div className=' h-14 flex  text-slate-50 bg-[#282828] bg-opacity-95  items-center justify-between shadow-xl relative p-2'>
            <div className='ml-5 flex h-full w-full items-center '>

                <div onClick={toggleSidebar} className='mr-5 btn cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </div>
                <div className='flex w-30 h-14 items-center justify-center cursor-pointer'>
                    <svg
                        viewBox="0 -15 32 50"
                        className="style-scope yt-icon"
                        style={{
                            pointerEvents: "none",
                            display: "block",
                            width: "100%",
                            height: "100%",
                        }}
                    >
                        <g className="style-scope yt-icon">
                            <g className="style-scope yt-icon">
                                <path
                                    d="M27.973 3.123A3.578 3.578 0 0 0 25.447.597C23.22 0 14.285 0 14.285 0S5.35 0 3.123.597A3.578 3.578 0 0 0 .597 3.123C0 5.35 0 10 0 10s0 4.65.597 6.877a3.578 3.578 0 0 0 2.526 2.526C5.35 20 14.285 20 14.285 20s8.935 0 11.162-.597a3.578 3.578 0 0 0 2.526-2.526C28.57 14.65 28.57 10 28.57 10s-.002-4.65-.597-6.877Z"
                                    fill="red"
                                    className="style-scope yt-icon"
                                />
                                <path
                                    d="M11.425 14.285 18.848 10l-7.423-4.285v8.57Z"
                                    fill="#fff"
                                    className="style-scope yt-icon"
                                />
                            </g>
                        </g>
                    </svg>
                    <h1>MeTube</h1>
                </div>
            </div>
            {/* Search Bar */}
            <div className='w-full cursor-pointer'>
                <form className='flex border border-gray-600 items-center justify-between ml-30 w-5/6 '>
                    <input className='border-gray h-8 btn w-full bg-black text-slate-300 px-2' placeholder='Search'></input>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-16 p-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </form>
            </div>
            {/* topright icons */}
            <div className='flex gap-3 ml-20 '>
                <div className=''>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
            </div>

        </div>
    )
}

export default Navbar