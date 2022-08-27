import React, { useContext, useState } from 'react'
import { LayoutContext } from '../Context/Context'
import VideoCard from './VideoCard'


const Main = () => {

    const { videoData } = useContext(LayoutContext)

    const videos = videoData.map(video => {
        return (
            <VideoCard
                title={video.title}
                userId={video.userId}
                views={video.views}
                uploadDate={video.createdAt}
                slug={video._id}
            />

        )
    })


    return (
        <div className='text-white h-full w-full flex flex-wrap gap-6 justify-center items-center py-10 px-2 '>
            {/* <div className='grid grid-cols-2  place-items-center place-content-center '> */}
            {videos}

        </div >
    )
}

export default Main