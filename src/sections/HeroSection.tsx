import React from 'react'

import WebDesignImage from '../assets/images/image.png'
import HeroSectionImage from '../assets/images/HeroSectionImage.jpg'
import { MdArrowOutward } from 'react-icons/md'
import Reviews from '../components/Reviews'

const HeroSection: React.FC = () => {
    return (
        <section className='relative lg:bg-green-900'>
            <div className="absolute inset-0 bg-texture -z-1 opacity-[.06]"></div>
            <div className='flex flex-col justify-center items-center px-8 py-6'>
                <div className='flex justify-between items-end w-full max-w-sm sm:w-2/3 sm:max-w-lg md:w-3/4 md:max-w-2xl'>
                    <p
                        className='text-[.6rem] md:text-sm'
                        style={{ fontFamily: 'DM Sans' }}>
                        Great Design Services<br />
                        Without The Pretentiousness.!
                    </p>
                    <Reviews className='lg:hidden' />
                </div>
                <div className='w-full max-w-sm sm:max-w-lg sm:w-2/3 md:w-3/4 md:max-w-2xl'>
                    <div className='flex items-center justify-between gap-2 mt-2 md:gap-8'>
                        <p className='text-6xl md:text-8xl' style={{ fontFamily: 'Gallery-Modern' }}>Digital</p>
                        <div className='flex-1 flex flex-col items-end'>
                            <p className='text-[.6rem] md:text-sm' style={{ fontFamily: 'DM Sans' }}>
                                We believe that the surest measure of success is when our partners with us more than half It's more than just the visuals. We're here to support your growth.
                            </p>
                            <a href="/#Services" className='flex items-center text-[.4rem] md:text-xs border-b-1 border-black'>View All Service <MdArrowOutward /></a>
                        </div>
                        <Reviews className='hidden lg:inline-block' />
                    </div>
                    <div className='flex items-center gap-2 md:justify-start md:gap-8'>
                        <div className='h-[48px]'>
                            <img
                                src={WebDesignImage} alt="WebDesignImage"
                                className='h-full w-auto object-contain' />
                        </div>
                        <p className='text-6xl md:text-8xl' style={{ fontFamily: 'Gallery-Modern' }}>Solution</p>
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