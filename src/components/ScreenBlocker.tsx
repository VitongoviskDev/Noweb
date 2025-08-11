import React, { useEffect } from 'react'
import type { DefaultProps } from '../util/DefaultProps';

const ScreenBlocker: React.FC<DefaultProps> = ({children}) => {
    useEffect(() => {
        document.body.classList.add('lock-scroll');
        return () => {
            document.body.classList.remove('lock-scroll'); // ✅ only runs when component unmounts
        };
    }, []);

    return (
        <div className="fixed top-0 left-0 flex justify-center items-center w-screen h-screen bg-black/60 z-100">
            {children}
        </div>
    )
}

export default ScreenBlocker