import React, { type ReactNode } from 'react'
import { MdArrowOutward } from 'react-icons/md';

import { type DefaultProps } from '../util/DefaultProps'

interface ArticleLinkProps extends DefaultProps {
    children: ReactNode;
    url: string;
}

const ArticleLink: React.FC<ArticleLinkProps> = ({ children, url, className }) => {
    return (
        <a href={url} className={`flex text-tiny sm:text-xs lg:text-base font-semibold  border-b-1 ${className}`}>{children} <MdArrowOutward /></a>
    )
}

export default ArticleLink