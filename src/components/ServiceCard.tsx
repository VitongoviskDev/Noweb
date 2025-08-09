import React from 'react'
import type { ServiceCardDTO } from '../dto/ServiceCardDtp';

import serviceCardArrow from '../assets/images/ServiceCardArrow.png'

interface ServiceCardProps {
    service: ServiceCardDTO;
    highlighted?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, highlighted }) => {
    return (
        <div className='relative flex flex-col justify-between h-[16rem] aspect-square p-8 border border-gray-400'>
            <ul className="list-disc pl-4 text-xs text-gray-400">
                <li>{service.topic}</li>
            </ul>
            <span>{service.title}</span>
            <div className='h-[32px]'>
                <img src={service.icon} alt={service.icon}
                    className='h-full object-contain' />
            </div>
            <p className='text-xs text-gray-400'>{service.description}</p>
            <div className='absolute bottom-0 right-0 p-2 ring ring-gray-400 rounded-full'>
                <img src={serviceCardArrow} alt="serviceCardArrow" 
                className='h-[1.5rem]'/>
            </div>
        </div>
    )
}

export default ServiceCard