import React, { type ReactNode } from 'react'

interface CtaButtonProps{
    callback?: () => void;
    children: ReactNode;
    highlighted?: boolean;
}

const SquareButton: React.FC<CtaButtonProps> = ({ callback, children }) => {

    const handleCallback = () => {
        if (callback != null)
            callback();
    }
    return (
        <button className='cursor-pointer flex items-center justify-center h-8 aspect-square md:h-12 text-xs md:text-base px-2.5 md:px-4 ring ring-black'
            onClick={handleCallback}
        >
            {children}
        </button>
    )
}

export default SquareButton