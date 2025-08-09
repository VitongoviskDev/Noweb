import React from 'react'

import servicesShape from '../assets/images/ServicesShape.png'

interface SectionTagProps {
    tag: string;
    children: React.ReactNode;
    centered?: boolean;
}

const SectionTitle: React.FC<SectionTagProps> = ({ tag, children, centered }) => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div>
                <div className={`flex gap-2 ${centered ? 'justify-center' : 'justify-start'}`}>
                    <div className='h-[1rem]'>
                        <img src={servicesShape} alt="servicesShape"
                            className='h-full object-contain' />
                    </div>
                    <p className='text-xs md:text-sm text-gray-400 font-semibold'>{tag}</p>
                </div>
                <h1 className='text-2xl md:text-4xl lg:text-5xl' style={{ fontFamily: 'Marcellus' }}>{children}</h1>
            </div>
        </div>
    )
}

export default SectionTitle