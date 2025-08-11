import React from 'react'
import type { FunfactItemDTO } from '../dto/FunfactItemDTO';

interface FunfactItemProps{
    item: FunfactItemDTO;
}

const FunfactItem:React.FC<FunfactItemProps> = ({item}) => {
    return (
        <li
            className="flex flex-col justify-center items-center aspect-square w-[18vw] text-center ring ring-gray-200 rounded-full"
        >
            <span className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">{item.value}</span>
            <p className="max-w-[4rem] md:max-w-[8rem] xl:max-w-[12rem] text-tiny sm:text-md md:text-lg lg:text-xl xl:text-3xl text-gray-400 font-light">{item.description}</p>
        </li>
    )
}

export default FunfactItem