import React from 'react'

import starImage from '../assets/images/Star.png'

import ServiceImage1 from '../assets/images/services/SeriviceImage1.png'
import ServiceImage2 from '../assets/images/services/ServiceImage2.png'
import ServiceImage3 from '../assets/images/services/ServiceImage3.png'

import ServiceCard from '../components/ServiceCard'
import type { ServiceCardDTO } from '../dto/ServiceCardDtp'
import SectionTitle from '../components/SectionTitle'

const ServiceCards: ServiceCardDTO[] = [
    {
        topic: 'Visual Branding',
        title: "Web Design And Development",
        icon: ServiceImage1,
        description: "Established in 1995, NEXIN has been leading force in the digital landscape for over two decades. We're a passionate ",
        highlighted: false
    }, {
        topic: 'Brand Strategy',
        title: "Branding And Creative Services",
        icon: ServiceImage2,
        description: "Established in 1995, NEXIN has been leading force in the digital landscape for over two decades. We're a passionate ",
        highlighted: true
    }, {
        topic: 'Indentuty Build',
        title: "Creative Digital Agency",
        icon: ServiceImage3,
        description: "Established in 1995, NEXIN has been leading force in the digital landscape for over two decades. We're a passionate ",
        highlighted: false
    }
]

const ServicesSection: React.FC = () => {
    return (
        <section className='relative flex flex-col justify-center items-center px-6 pt-24 md:px-24'>
            <div className='absolute top-24 left-12 md:top-16 md:right-20 h-[4rem]'>
                <img src={starImage} alt="starImage"
                    className='h-full object-contain' />
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div>
                    <SectionTitle tag='SERVICES'>Empowering Brands Through<br />Strategic Digital Services</SectionTitle>
                    <div className='max-w-lg pl-12 py-6 mt-8 border-l border-gray-300'>
                        <p className='text-sm md:text-md text-gray-400'>Established in 1995, NEXIN has been a leading force in the digital landscape for over two decades. We're a passionate team of designers, </p>
                    </div>
                </div>
            </div>
            <div className='py-12 mt-12 border-t border-gray-300'>
                <div className='flex flex-col gap-y-4 lg:flex-row items-stretch justify-between gap-x-2'>
                    {
                        ServiceCards.map((service, index) => (
                            <ServiceCard key={index} service={service} />
                        ))
                    }
                </div>
            </div>
        </section >
    )
}

export default ServicesSection