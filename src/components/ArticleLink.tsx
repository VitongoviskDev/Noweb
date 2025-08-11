import React, { type ReactNode } from 'react'
import { MdArrowOutward } from 'react-icons/md';

import { type DefaultProps } from '../util/DefaultProps'
import { Link } from 'react-router-dom';

interface ArticleLinkProps extends DefaultProps {
    children: ReactNode;
    url: string;
}

const ArticleLink: React.FC<ArticleLinkProps> = ({ children, url, className }) => {
    return (
        <Link to={url} className={`flex text-tiny sm:text-xs lg:text-base font-semibold  border-b-1 ${className}`}>{children} <MdArrowOutward /></Link>
    )
}

export default ArticleLink