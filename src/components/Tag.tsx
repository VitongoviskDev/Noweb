import React, { type ReactNode } from 'react'
import ImageContainer from './ImageContainer';

interface TagProps {
    image: string;
    children: ReactNode;
}

const Tag: React.FC<TagProps> = ({ image, children }) => {
    return (
        <div className='flex flex-col items-center aspect-7/8 w-full max-w-48 md:msx-w-none'>
            <div className='z-1 p-2'>
                <ImageContainer img={image} object='cover' className='flex justify-center items-center w-full aspect-square rounded-full overflow-hidden'/>
            </div>
            <div className='flex items-center justify-center w-full -mt-[50%] pt-[25%] h-full bg-accent rounded-3xl'>
                <p className='text-center font-bold'>{children}</p>
            </div>
        </div>
    )
}

export default Tag