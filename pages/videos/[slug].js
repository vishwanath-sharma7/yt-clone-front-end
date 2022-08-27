import React, { useEffect, useRef } from 'react'

const Video = ({ videoData }) => {

    const videoRef = useRef(null)


    useEffect(() => {

    }, [])


    const {
        createdAt,
        description,
        dislikes,
        imageUrl,
        likes,
        tags,
        title,
        userId,
        videoUrl,
        views,
    } = videoData[0]

    const user = videoData[1]

    console.log(user)



    return (
        <div className='h-screen p-10 flex flex-col items-center text-white'>
            <div className='border-2'>
                <iframe width="720" height="420" src="https://www.youtube.com/embed/-ogpWD5BZc8" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
            </div>
            <div>
                {title}
            </div>
            <div className='flex gap-2'>
                <div>
                    {views} Views
                </div>
                <div>
                    {dislikes.length} Dislikes
                </div>
                <div>
                    {likes.length} Likes
                </div>
                <div>
                    {dislikes} Dislikes
                </div>

            </div>
            <hr className='w-full' />
            <div className='w-full border-2 items-center justify-center flex-col flex'>
                <div className='flex justify-around w-full my-5 '>
                    <div className=' p-1 border-2'>
                        {user.name}
                        <p>{user.subscribers} subscribers </p>
                    </div>
                    <div className='btn bg-red-500 rounded-lg cursor-pointer p-2 h-12  '>
                        Subscribe
                    </div>
                </div>
                <div className='my-10'>
                    {description}
                </div>

            </div>


        </div>
    )
}

export default Video



export async function getServerSideProps({ query }) {

    const { slug } = query

    const res = await fetch(`http://localhost:5000/videos/find/${slug}`)
    const videoData = await res.json()
    return {
        props: {
            videoData

        }
    }
}