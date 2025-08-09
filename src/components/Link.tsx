import React, { type ReactNode } from 'react'
import { MdArrowOutward } from 'react-icons/md';

import  { type DefaultProps } from '../util/DefaultProps'

interface LinkProps extends DefaultProps{
    children: ReactNode;
}

const Link:React.FC<LinkProps> = ({children, className}) => {
    return (
        <a href="/#Services" className={`flex text-[.4rem] font-semibold sm:text-[.6rem] lg:text-[1rem] border-b-1 ${className}`}>{children} <MdArrowOutward /></a>
    )
}

export default Link