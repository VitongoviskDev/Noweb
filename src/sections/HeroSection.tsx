import React from 'react'

import WebDesignImage from '../assets/images/image.png'
import HeroSectionImage from '../assets/images/HeroSectionImage.jpg'
import Reviews from '../components/Reviews'
import Link from '../components/Link'
import DefaultSection from '../components/DefaultSection'

const HeroSection: React.FC = () => {
    return (
        <section className='flex justify-center items-center px-12 sm:px-24 md:px-24 lg:px-32 py-20'>
            <div className="absolute inset-0 bg-texture -z-1 opacity-[.06]"></div>
            <div className=''>
                <div className='flex justify-between items-end'>
                    <p>Great design services<br />without the pretentiousness.!</p>
                    <div className='hidden md:flex xl:hidden' >
                        <Reviews />
                    </div>
                </div>
                <div className='flex items-center gap-8'>
                    <span className='text-8xl md:text-8xl lg:text-big xl:text-giant' style={{ fontFamily: 'Gallery-Modern' }}>Digital</span>
                    <div className='hidden md:flex flex-col items-end md:max-w-xs lg:max-w-sm xl:max-w-md'>
                        <p className='md:text-xs xl:text-base'>We believe that the surest measure of success is when our partners with us more than half It's more than just the visuals. We're here to support your growth.</p>
                        <Link url='#ServicesSection'>View All Services</Link>
                    </div>
                    <div className='hidden xl:flex items-start'>
                        <Reviews />
                    </div>
                </div>
                <div className='flex flex-col-reverse md:flex-row items-start md:items-center gap-8'>
                    <div className='hidden md:inline-block md:h-[5rem] lg:h-[6rem] xl:h-[8rem]'>
                        <img
                            src={WebDesignImage} alt="WebDesignImage"
                            className='h-full w-auto object-contain'
                        />
                    </div>
                    <span className='text-8xl md:text-8xl lg:text-big xl:text-giant' style={{ fontFamily: 'Gallery-Modern' }}>Solution</span>
                </div>
                <div className='flex items-center justify-between md:hidden' >
                    <div className='h-[3rem]'>
                        <img
                            src={WebDesignImage} alt="WebDesignImage"
                            className='h-full w-auto object-contain'
                        />
                    </div>
                    <Reviews />
                </div>
                <div className='md:hidden flex flex-col items-end max-w-xs mt-4'>
                    <p className=''>We believe that the surest measure of success is when our partners with us more than half It's more than just the visuals. We're here to support your growth.</p>
                    <Link url='#ServicesSection'>View All Services</Link>
                </div>
            </div>
        </section>
    )
    return (
        <section className='relative'>
            <div className="absolute inset-0 bg-texture -z-1 opacity-[.06]"></div>
            <DefaultSection center>
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
                    <div className='flex items-center gap-4'>
                        <span className='text-6xl' style={{ fontFamily: 'Gallery-Modern' }}>Digital</span>
                        <div className='flex flex-col gap-2 place-self-center'>
                            <p className='text-[.5rem] sm:text-xs lg:text-[1rem] max-w-lg'>
                                We believe that the surest measure of success is when our partners with us more than half It's more than just the visuals. We're here to support your growth.
                            </p>
                            <Link url="#ServicesSection" className='place-self-end'>View All Services</Link>
                        </div>
                        <Reviews className=' hidden md:flex' />
                    </div>
                    <div className='flex items-center gap-4'>
                        <div className='h-[4rem] md:h-[6rem] lg:h-[8rem]'>
                            <img
                                src={WebDesignImage} alt="WebDesignImage"
                                className='h-full w-auto object-contain'
                            />
                        </div>
                        <span className='text-6xl'
                            style={{ fontFamily: 'Gallery-Modern' }}>Solution</span>
                    </div>

                </div>
            </DefaultSection>
            <div className='flex items-center h-[40vw] overflow-hidden'>
                <img src={HeroSectionImage} alt="HeroSectionImage"
                    className='w-full object-contain' />
            </div>
        </section>
    )
}

export default HeroSection