import React from 'react'

import WebDesignImage from '../assets/images/image.png'
import HeroSectionImage from '../assets/images/HeroSectionImage.jpg'
import Reviews from '../components/Reviews'
import Link from '../components/Link'

const HeroSection: React.FC = () => {
    return (
        <section className='relative'>
            <div className="absolute inset-0 bg-texture -z-1 opacity-[.06]"></div>
            <div className='flex justify-center items-center'>
                <div className='gap-x-2 px-8 py-6 sm:px-12 sm:py-10 md:max-w-4xl lg:max-w-none'>
                    <div className='flex items-end justify-between'>
                        <p
                            className='text-[.5rem] sm:text-xs lg:text-sm'>
                            Great Design Services<br />
                            Without The Pretentiousness.!
                        </p>
                        <div className='col-start-6 '>
                            <Reviews className='md:hidden' />
                        </div>
                    </div>
                    <div className='flex items-center gap-4 -mt-[4vw]'>
                        <span className='text-[clamp(16vw,16vw,13.7rem)]' style={{ fontFamily: 'Gallery-Modern' }}>Digital</span>
                        <div className='flex flex-col gap-2 place-self-center'>
                            <p className='text-[.5rem] sm:text-xs lg:text-[1rem] max-w-lg'>
                                We believe that the surest measure of success is when our partners with us more than half It's more than just the visuals. We're here to support your growth.
                            </p>
                            <Link className='place-self-end'>View All Services</Link>
                        </div>
                        <Reviews className=' hidden md:flex' />
                    </div>
                    <div className='flex items-center gap-4 -mt-[8vw]'>
                        <div className='h-full md:h-[6rem] lg:h-[8rem]'>
                            <img
                                src={WebDesignImage} alt="WebDesignImage"
                                className='h-full w-auto object-contain'
                            />
                        </div>
                        <span className='text-[clamp(16vw,16vw,13.7rem)]'
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