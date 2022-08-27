import Link from 'next/link'

const VideoCard = (props) => {


    return (
        <Link href={`/videos/${props.slug}`}>
            <div className='border-2 h-80 w-72 text-white'>

                <div className='w-full h-48 bg-red-400'>

                </div>
                <div className=''>
                    {props.title}
                </div>
                <div className=' '>
                    Views : {props.views}
                </div>
                <div className=' '>
                    userId : {props.userId}
                </div>
                <div className=' '>
                    {props.uploadDate}

                </div>

            </div>
        </Link>
    )
}





export default VideoCard