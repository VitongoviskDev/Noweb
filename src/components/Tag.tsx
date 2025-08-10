import React, { type ReactNode } from 'react'

interface TagProps {
    image: string;
    children: ReactNode;
}

const Tag: React.FC<TagProps> = ({ image, children }) => {
    return (
        <div className='flex flex-col items-center aspect-7/8 w-full'>
            <div className='z-1 p-2'>
                <div className='flex justify-center items-center w-full aspect-square rounded-full overflow-hidden '>
                    <img src={image} alt={image} className='w-full h-full object-cover' />
                </div>
            </div>
            <div className='flex items-center justify-center w-full -mt-[50%] pt-[25%] h-full bg-accent rounded-3xl'>
                <p className='text-center font-bold'>{children}</p>
            </div>
        </div>
    )
}

export default Tag