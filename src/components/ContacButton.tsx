import React, { type ReactNode } from 'react'
import { MdArrowOutward } from 'react-icons/md'

interface ContacButtonProps {
    children: ReactNode;
    accent?: boolean;
}

const CircleLinkButton: React.FC<ContacButtonProps> = ({ children, accent }) => {
    return (
        <a href='#contact'
            className={`
                flex justify-center items-center gap-2 w-[9.5rem] aspect-square rounded-full 
                ${accent ? 'bg-accent' : 'ring ring-black'}
            `}>
            <p>{children}</p>
            <MdArrowOutward />
        </a>
    )
}

export default CircleLinkButton