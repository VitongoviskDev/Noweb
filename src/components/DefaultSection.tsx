import React from 'react'
import type { DefaultProps } from '../util/DefaultProps'

interface DefaultSectionProps extends DefaultProps {
    center?: boolean;
    flexCol?: boolean;
}

const DefaultSection: React.FC<DefaultSectionProps> = ({ center = false, flexCol = false, className = '', children }) => {
    return (
        <section className={`
            relative px-12 sm:px-24 md:px-24 lg:px-48 py-31 
            ${center ? `flex justify-center items-center ${flexCol ? 'flex-col': ''}` : ''}
            ${className}
        `}>
            {children}
        </section>
    )
}

export default DefaultSection