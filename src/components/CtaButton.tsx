import React, { type ReactNode } from 'react'

interface CtaButtonProps {
    url?: string;
    callback?: () => void;
    children: ReactNode;
    highlighted?: boolean;
}

const CtaButton: React.FC<CtaButtonProps> = ({ url, callback, children, highlighted }) => {

    const handleCallback = () => {
        if (callback != null)
            callback();
    }

    const styleClass = 'flex items-center justify-center gap-2 text-nowrap text-black';

    return (
        <div className={`
            flex items-center justify-center h-12 text-base px-4
            ${highlighted ? 'bg-accent' : 'ring ring-black'}
        `}>
            {
                callback != null ? (
                    <button onClick={handleCallback} className={styleClass}>{children}</button>
                ) : (
                    <a href={url} className={styleClass}>{children}</a>
                )
            }
        </div>
    )
}

export default CtaButton