import React from 'react';
// import video from "../assets/video/video.mp4";

import thumbnail from "../assets/images/thumbnail.jpg";
import ImageContainer from '../components/ImageContainer';

const VideoSection: React.FC = () => {
    return (
        <section className="">
            <div className='relative flex justify-center items-center w-full h-[40vw] overflow-hidden'>
                <ImageContainer img={thumbnail} object='contain' className='absolute w-full'/>
                <button className='z-1 text-xs w-[20vw] sm:text-sm sm:w-[15vw] lg:w-[10vw]  aspect-square rounded-full bg-white'>Play Video</button>
            </div>
        </section>
    );
};

export default VideoSection;
