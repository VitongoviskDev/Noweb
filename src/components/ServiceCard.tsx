import React from 'react'
import type { ServiceCardDTO } from '../dto/ServiceCardDtp';

import serviceCardArrow from '../assets/images/ServiceCardArrow.png'

interface ServiceCardProps {
    service: ServiceCardDTO;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
    return (
        <div className='relative flex'>
            <div className={`
                chamfered flex flex-col justify-between items-start gap-4 max-w-sm p-8 border
                after:absolute after:bottom-[28px] after:right-[28px] after:w-[79px] after:h-[1px] 
                after:translate-x-[50%] after:-rotate-[45deg]
                ${service.highlighted ? 'border-accent after:bg-accent' : 'border-gray-400 after:bg-gray-400'}
            `}>
                <ul className="list-disc pl-4 text-xs text-gray-400">
                    <li className='text-sm'>{service.topic}</li>
                </ul>
                <span className='text-3xl' style={{ fontFamily: 'Marcellus' }}>{service.title}</span>
                <div className='h-[3.7rem]'>
                    <img src={service.icon} alt={service.icon}
                        className='h-full object-contain' />
                </div>
                <p className='text-sm text-gray-400'>{service.description}</p>
            </div>
            <div className={`
                absolute bottom-0 right-0 p-4 ring  rounded-full w-14
                ${service.highlighted ? 'bg-accent -rotate-[45deg] ring-accent' : 'bg-white ring-gray-400'}
            `}>
                <img src={serviceCardArrow} alt="serviceCardArrow"
                    className='w-full object-contain' />
            </div>
        </div>
    )
}

export default ServiceCard