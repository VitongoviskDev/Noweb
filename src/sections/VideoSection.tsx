import React, { useState, useRef } from 'react';
import video from "../assets/video/Insta_botira.mp4";

const VideoSection: React.FC = () => {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleToggleVideo = () => {
        if (videoRef.current) {

            if (playing) {
                videoRef.current.pause();
                setPlaying(false);
            }
            else {
                videoRef.current.play();
                setPlaying(true);
            }
        }
    }

    return (
        <section className="w-full">
            <div className="relative w-full h-[60vh] overflow-hidden">
                <video
                    ref={videoRef}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src={video}
                    loop
                    playsInline
                ></video>


                <div className={`
                    absolute inset-0 flex items-center justify-center transition duration-300 ease-in-out
                    ${playing ? 'hover:bg-black/40 [&>*]:hidden hover:[&>*]:flex' : 'bg-black/40'}
                `}
                    onClick={() => handleToggleVideo()}>
                    <button
                        onClick={() => handleToggleVideo()}
                        className="cursor-pointer flex justify-center items-center w-[8rem] aspect-square bg-white rounded-full"
                    >
                        <p>{playing ? "Pause Video" : "Play Video"}</p>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
