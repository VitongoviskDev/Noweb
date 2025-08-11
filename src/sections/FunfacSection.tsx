import React from 'react'
import DefaultSection from '../components/DefaultSection'
import FunfactItem from '../components/FunfactItem'
import { FunfactItems } from '../util/Funfact'



const FunfacSection: React.FC = () => {
  return (
    <DefaultSection center className='pt-0'>
      <ul className='flex [&>li:not(:first-child)]:-ml-3 sm:[&>li:not(:first-child)]:-ml-6 lg:[&>li:not(:first-child)]:-ml-10'>
        {
          FunfactItems.map((item, index) => (
            <FunfactItem item={item} key={index}/>
          ))
        }
      </ul>
    </DefaultSection>
  )
}

export default FunfacSection