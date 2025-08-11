import React from 'react'

import WebDesignImage from '../assets/images/heroSection/WebDesignIcon.png'
import Reviews from '../components/Reviews'
import Article from '../components/Article'
import ImageContainer from '../components/ImageContainer'

import HeroSectionImage from '../assets/images/heroSection/HeroSectionImage.jpg';

const HeroSection: React.FC = () => {
    return (
        <section id={"home"} className='relative'>
            <div className="absolute inset-0 bg-texture -z-1 opacity-[.06]"></div>
            <div className='flex flex-col justify-center items-center px-12 sm:px-24 md:px-28 pt-48 pb-20 gap-4'>
                <div>
                    <div className='flex justify-between items-end'>
                        <p>Great design services<br />without the pretentiousness.!</p>
                        <div className='hidden md:flex xl:hidden' >
                            <Reviews />
                        </div>
                    </div>
                    <div className='flex items-center gap-16'>
                        <span className='text-8xl md:text-8xl lg:text-big xl:text-giant' style={{ fontFamily: 'Gallery-Modern' }}>Digital</span>
                        <Article linkText='View All Services' url='#ServicesSection' className='hidden md:flex' linkAling='end'>
                            We believe that the surest measure of success is when our partners with us more than half It's more than just the visuals. We're here to support your growth.
                        </Article>
                        <div className='hidden xl:flex items-start'>
                            <Reviews />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col-reverse items-center justify-start md:flex-row md:justify-start gap-10'>
                    <ImageContainer className='hidden md:inline-block md:h-[5rem] lg:h-[6rem] xl:h-[9rem]' img={WebDesignImage} object='contain' />
                    <span className='text-8xl md:text-8xl lg:text-big xl:text-giant' style={{ fontFamily: 'Gallery-Modern' }}>Solution</span>
                </div>
                <div className='flex items-center justify-between md:hidden gap-4' >
                    <ImageContainer className='h-[3rem]' img={WebDesignImage} object='contain' />
                    <Reviews />
                </div>
                <Article className='md:hidden flex' linkText='View All Services' url='#ServicesSection'>
                    We believe that the surest measure of success is when our partners with us more than half It's more than just the visuals. We're here to support your growth.
                </Article>
            </div>
            <div className='flex items-center h-[40vw] overflow-hidden'>
                <img src={HeroSectionImage} alt="HeroSectionImage"
                    className='w-full object-contain' />
            </div>
        </section>
    )
}

export default HeroSection