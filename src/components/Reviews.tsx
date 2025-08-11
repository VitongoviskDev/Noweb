import React from 'react'

import Person1 from '../assets/images/heroSection/reviews/Person1.jpg'
import Person2 from '../assets/images/heroSection/reviews/Person2.jpg'
import Person3 from '../assets/images/heroSection/reviews/Person3.jpg'
import type { DefaultProps } from '../util/DefaultProps'
import ImageContainer from './ImageContainer'

const Reviews: React.FC<DefaultProps> = ({ className }) => {

    const ReviewImagesDivClass = 'flex justify-center items-center w-[32px] lg:w-[40px] aspect-square bg-black rounded-full ring-1 ring-white overflow-hidden';

    return (
        <div className={`flex flex-col items-center ${className} lg:gap-4`} >
            <div className={`flex items-center mt-2 rounded-full border-1 border-black w-fit p-2 lg:p-3 [&_div:not(:first-child)]:-ml-2`}>
                <div className={ReviewImagesDivClass}>
                    <ImageContainer img={Person1} object='cover' />
                </div>
                <div className={ReviewImagesDivClass}>
                    <ImageContainer img={Person2} object='cover' />
                </div>
                <div className={ReviewImagesDivClass}>
                    <ImageContainer img={Person3} object='cover' />
                </div>
                <div className={ReviewImagesDivClass}>
                    <p className='text-white text-[.6rem] font-semibold mt-1'>15K+</p>
                </div>
            </div>
            <p className='text-[.7rem] lg:text-lg text-center text-nowrap'>Excellent <strong>4.000+</strong> Reviews</p>
        </div >
    )
}

export default Reviews