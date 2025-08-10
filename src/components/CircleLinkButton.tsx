import React, { type ReactNode } from 'react'
import { MdArrowOutward } from 'react-icons/md'

interface CircleLinkButtonProps {
    children: ReactNode;
    accent?: boolean;
    url: string;
}

const CircleLinkButton: React.FC<CircleLinkButtonProps> = ({ children, accent, url }) => {
    return (
        <a href={url}
            className={`
                flex justify-center items-center gap-2 w-[6rem] sm:w-[8rem] md:w-[9.5rem] aspect-square rounded-full text-black 
                ${accent ? 'bg-accent' : 'ring ring-black'}
            `}>
            <p className='text-[.6rem] sm:text-base'>{children}</p>
            <MdArrowOutward />
        </a>
    )
}

export default CircleLinkButton