import React from 'react'

import WebDesignImage from '../assets/images/image.png'
import HeroSectionImage from '../assets/images/HeroSectionImage.jpg'
import { MdArrowOutward } from 'react-icons/md'
import Reviews from '../components/Reviews'

const HeroSection: React.FC = () => {
    return (
        <section className='relative sm:bg-green-200 md:bg-green-400 lg:bg-green-600'>
            <div className="absolute inset-0 bg-texture -z-1 opacity-[.06]"></div>
            <div className='flex justify-center items-center'>
                <div className='gap-x-2 px-8 py-6 sm:px-12 sm:py-10 md:max-w-4xl lg:max-w-none'>
                    <div className='flex items-end justify-between'>
                        <p
                            className='text-[.5rem] sm:text-xs'
                            style={{ fontFamily: 'DM Sans' }}>
                            Great Design Services<br />
                            Without The Pretentiousness.!
                        </p>
                        <div className='col-start-6 '>
                            <Reviews className='md:hidden' />
                        </div>
                    </div>
                    <div className='flex items-center gap-4 -mt-4 sm:-mt-6 md:mt-0'>
                        <span className='text-[16vw] md:text-9xl lg:text-[220px]' style={{ fontFamily: 'Gallery-Modern' }}>Digital</span>
                        <div className='flex flex-col gap-2 place-self-center'>
                            <p className='text-[.5rem] sm:text-xs lg:text-[1rem] max-w-lg' style={{ fontFamily: 'DM Sans' }}>
                                We believe that the surest measure of success is when our partners with us more than half It's more than just the visuals. We're here to support your growth.
                            </p>
                            <a href="/#Services" className='place-self-end flex text-[.4rem] font-semibold sm:text-[.6rem] lg:text-[1rem] border-b-1 border-black'>View All Service <MdArrowOutward /></a>
                        </div>
                        <Reviews className=' hidden md:flex' />
                    </div>
                    <div className='flex items-center gap-4 -mt-8 sm:-mt-10 md:mt-0'>
                        <div className='h-full md:h-[6rem] lg:h-[8rem]'>
                            <img
                                src={WebDesignImage} alt="WebDesignImage"
                                className='h-full w-auto object-contain'
                            />
                        </div>
                        <span className=' text-[16vw] md:text-9xl lg:text-[220px]'
                            style={{ fontFamily: 'Gallery-Modern' }}>Solution</span>
                    </div>

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