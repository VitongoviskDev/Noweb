import React from 'react'
import type { DefaultProps } from '../util/DefaultProps';

interface ImageContainerProps extends DefaultProps{
    img: string;
    object: 'contain' | 'cover';
}

const ImageContainer:React.FC<ImageContainerProps> = ({img, object, className}) => {
    return (
        <div className={className}>
            <img
                src={img} alt={img}
                className={`h-full w-full ${object == 'contain' ? 'object-contain' : 'object-cover'}`}
            />
        </div>
    )
}

export default ImageContainer