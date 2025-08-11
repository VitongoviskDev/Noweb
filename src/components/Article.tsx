import React, { type ReactNode } from 'react'
import type { DefaultProps } from '../util/DefaultProps'
import ArticleLink from './ArticleLink';

interface ArticleProps extends DefaultProps {
    children: ReactNode;
    linkText: string;
    url: string;
    linkAling?: 'start' | 'end';
}

const Article: React.FC<ArticleProps> = ({children, linkText, url, className, linkAling='start'}) => {
    return (
        <div className={`flex flex-col ${linkAling == 'start' ? 'items-start' : 'items-end'} gap-2 md:max-w-xs lg:max-w-sm xl:max-w-md ${className}`}>
            <p className='md:text-xs xl:text-base font-light'>{children}</p >
            <ArticleLink url={url}>{linkText}</ArticleLink>
        </div >
    )
}

export default Article