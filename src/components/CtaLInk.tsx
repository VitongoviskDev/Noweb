import React, { type ReactNode } from 'react'

interface CtaLinkProps{
    url: string;
    children: ReactNode;
    highlighted?: boolean;
}

const CtaLink: React.FC<CtaLinkProps> = ({ url, children, highlighted }) => {

    return (
        <a
            href={url}
            className={`flex items-center justify-center gap-2 px-2.5 md:px-4 h-8 md:h-12 text-xs md:text-base text-nowrap text-black  
            ${highlighted ? 'bg-accent' : 'ring ring-black'}`}>
            {children}
        </a>
    )
}

export default CtaLink
