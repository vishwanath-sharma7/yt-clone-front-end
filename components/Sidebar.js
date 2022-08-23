import React, { useContext } from 'react'
import { LayoutContext } from '../Context/Context'


const Sidebar = () => {

    const { toggleSidebar, showSidebar } = useContext(LayoutContext)

    return (

        // Header
        <div className={!showSidebar ? 'absolute top-0 left-[-15rem] z-100  flex flex-col text-white h-screen transition translate-x-[-15rem] ease-out duration-75' : 'absolute top-0 left-[-15rem] z-100 backdrop-blur-sm flex flex-col text-white h-screen w-full transition-all ease-in translate-x-60 duration-75'}>

            <div className='scrollbar w-60 flex flex-col overflow-y-scroll shadow-2xl h-full bg-[#282828]'>

                <div className='pl-5 flex gap-5 items-center bg-[#282828] sticky top-0 left-0 '>
                    <div onClick={toggleSidebar} className=' btn cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </div>
                    <div className='flex w-24 h-14 items-center justify-center'>
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
                        <h1 className='cursor-pointer'>MeTube</h1>
                    </div>
                </div>



                <div className='container flex flex-col justify-around h-full text-slate-200 w-full pt-14'>
                    <ul className=' flex flex-col h-full'>
                        <li>Home</li>
                        <li>Explore</li>
                        <li>Subscriptions</li>
                    </ul>
                    <hr />
                    <ul className=' flex flex-col h-full'>
                        <li>Library</li>
                        <li>Your Videos</li>
                        <li>Liked Videos</li>
                    </ul>
                    <hr />

                    <ul className='flex flex-col h-full'>
                        <li className='text-[#999]'>Explore </li>
                        <li>
                            Movies
                        </li>
                        <li>
                            Gaming
                        </li>
                        <li>
                            Live
                        </li>
                        <li>
                            Fashion & Beauty
                        </li>
                        <li>
                            Learning
                        </li>
                        <li>
                            Sports                    </li>  <li>
                        </li>
                    </ul>
                    <hr />
                    <div className=' '>
                        <ul>
                            <li>Settings</li>
                            <li>Help</li>
                            <li>Send feedback</li>
                            <li>Settings</li>
                            <li>Help</li>
                            <li>Send feedback</li>
                        </ul>
                    </div>

                </div>

            </div >
        </div>


    )
}

export default Sidebar