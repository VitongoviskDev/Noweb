import React from 'react'
import { IoIosArrowDown } from 'react-icons/io';
import ImageContainer from './ImageContainer';

interface WorkStepCardProps {
    index: number;
    title: string;
    description: string;
    icon: string;
}

const WorkStepCard: React.FC<WorkStepCardProps> = ({ index, title, description, icon }) => {
    return (
        <div className='flex-1 flex md:flex-col gap-2 max-w-xs min-h-40 md:max-w-sm'>
            <div className='flex flex-col md:flex-row items-center'>
                <ImageContainer img={icon} className='flex jutify-center items-center w-18 sm:w-20 xl:w-24 p-6 aspect-square rounded-full ring ring-black' object='contain'/>
                <div className='flex-1 flex flex-col md:flex-row items-center justify-center'>
                    <div className='h-full w-[2px] md:h-[2px] md:w-full bg-black'></div>
                    <IoIosArrowDown className='text-xl -mt-3 md:-ml-3 md:mt-0 md:-rotate-90' />
                </div>
                <p className='text-4xl font-bold text-gray-300 ml-2'>{index <= 9 ? `0${index}` : index}</p>
            </div>
            <div className='flex flex-col justify-around gap-y-2'>
                <p className='text-2xl' style={{ fontFamily: 'Marcellus' }}>{title}</p>
                <p className='text-base text-gray-400'>{description}</p>
            </div>
        </div>
    )
}

export default WorkStepCard