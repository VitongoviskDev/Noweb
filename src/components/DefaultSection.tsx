import React from 'react'
import type { DefaultProps } from '../util/DefaultProps'

interface DefaultSectionProps extends DefaultProps {
    id?:string;
    center?: boolean;
    flexCol?: boolean;
}

const DefaultSection: React.FC<DefaultSectionProps> = ({ id, center = false, flexCol = false, className = '', children }) => {
    return (
        <section id={id} className={`
            relative px-12 sm:px-24 md:px-24  py-31 text-secondary
            ${center ? `flex justify-center items-center ${flexCol ? 'flex-col': ''}` : ''}
            ${className}
        `}>
            {children}
        </section>
    )
}

export default DefaultSection