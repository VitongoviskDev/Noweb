import React from 'react'

import WebDesignImage from '../assets/images/image.png'
import HeroSectionImage from '../assets/images/HeroSectionImage.jpg'
import Person1 from '../assets/images/Person1.jpg'
import Person2 from '../assets/images/Person2.jpg'
import Person3 from '../assets/images/Person3.jpg'
import { MdArrowOutward } from 'react-icons/md'

const HeroSection: React.FC = () => {
    const ReviewImagesDivClass = 'flex justify-center items-center w-[24px] aspect-square bg-black rounded-full ring-1 ring-white overflow-hidden';
    const ReviewImagesClass = 'w-full object-contain';
    return (
        <section className='relative'>
            <div className="absolute inset-0 bg-texture -z-1 opacity-[.06]"></div>
            <div className='px-8 py-6'>
                <div className='flex justify-between items-end'>
                    <p
                        className='text-[.6rem]'
                        style={{ fontFamily: 'DM Sans' }}>
                        Great Design Services<br />
                        Without The Pretentiousness.!
                    </p>
                    <div className='flex flex-col items-center'>
                        <div className='flex items-center mt-2 rounded-full border-1 border-black w-fit p-1 [&_div:not(:first-child)]:-ml-2'>
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
                        <p className='text-[.6rem]'>Excellent <strong>4.000+</strong> Reviews</p>
                    </div>
                </div>
                <div>
                    <div className='flex items-center gap-4 mt-2'>
                        <p className='text-6xl' style={{ fontFamily: 'Gallery-Modern' }}>Digital</p>
                        <div className='flex flex-col items-end'>
                            <p className='text-[.6rem]'>We believe that the surest measure of success is when our partners with us more than half It's more than just the visuals. We're here to support your growth.</p>
                            <a href="/#Services" className='flex items-center text-[.4rem] border-b-1 border-black'>View All Service <MdArrowOutward /></a>
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <div className='h-[48px]'>
                        <img
                            src={WebDesignImage} alt="WebDesignImage"
                            className='h-full w-auto object-contain' />
                    </div>
                    <p className='text-6xl' style={{ fontFamily: 'Gallery-Modern' }}>Solution</p>
                </div>
            </div>
            <div className='flex items-center h-[40vw] overflow-hidden'>
                <img src={HeroSectionImage} alt="HeroSectionImage"
                    className='w-full object-contain' />
            </div>
        </section>
    )
}

export default HeroSection