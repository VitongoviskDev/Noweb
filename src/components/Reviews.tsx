import React from 'react'

import Person1 from '../assets/images/heroSection/reviews/Person1.jpg'
import Person2 from '../assets/images/heroSection/reviews/Person2.jpg'
import Person3 from '../assets/images/heroSection/reviews/Person3.jpg'
import type { DefaultProps } from '../util/DefaultProps'

const Reviews: React.FC<DefaultProps> = ({ className }) => {

    const ReviewImagesClass = 'w-full object-contain';
    const ReviewImagesDivClass = 'flex justify-center items-center w-[32px] aspect-square bg-black rounded-full ring-1 ring-white overflow-hidden';

    return (
        <div className={`flex flex-col items-center ${className}`} >
            <div className={`flex items-center mt-2 rounded-full border-1 border-black w-fit p-1 [&_div:not(:first-child)]:-ml-2`}>
                <div className={ReviewImagesDivClass}>
                    <img src={Person1} alt="Person1" className={ReviewImagesClass} />
                </div>
                <div className={ReviewImagesDivClass}>
                    <img src={Person2} alt="Person2" className={ReviewImagesClass} />
                </div>
                <div className={ReviewImagesDivClass}>
                    <img src={Person3} alt="Person3" className={ReviewImagesClass} />
                </div>
                <div className={ReviewImagesDivClass}>
                    <p className='text-white text-[.6rem] font-semibold mt-1'>15K+</p>
                </div>
            </div>
            <p className='text-[.7rem] text-center text-nowrap'>Excellent <strong>4.000+</strong> Reviews</p>
        </div >
    )
}

export default Reviews