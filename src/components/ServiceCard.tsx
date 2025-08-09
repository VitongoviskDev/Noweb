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
                chamfered flex flex-col justify-between h-[16rem] aspect-square p-8 border
                after:absolute after:-bottom-[1.42rem] after:right-0 after:w-[2.8rem] after:h-[2.8rem] 
                after:border-t after:translate-x-[50%] after:-rotate-[45deg]
                ${service.highlighted ? 'border-[#BFF747] after:border-[#BFF747]' : 'border-gray-400 after:border-gray-400'}
            `}>
                <ul className="list-disc pl-4 text-xs text-gray-400">
                    <li>{service.topic}</li>
                </ul>
                <span>{service.title}</span>
                <div className='h-[32px]'>
                    <img src={service.icon} alt={service.icon}
                        className='h-full object-contain' />
                </div>
                <p className='text-xs text-gray-400'>{service.description}</p>
            </div>
            <div className={`
                absolute bottom-0 right-0 p-2 ring  rounded-full h-[2rem] 
                ${service.highlighted ? 'bg-[#BFF747] -rotate-[45deg] ring-[#BFF747]' : 'bg-white ring-gray-400'}
            `}>
                <img src={serviceCardArrow} alt="serviceCardArrow"
                    className='h-full object-contain' />
            </div>
        </div>
    )
}

export default ServiceCard