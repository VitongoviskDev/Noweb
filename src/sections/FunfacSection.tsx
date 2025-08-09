import React from 'react'

const FunfactItems = [
  {
    value: '35+',
    description: 'Project Complete'
  }, {
    value: '10+',
    description: 'Happy Custumers'
  }, {
    value: '25+',
    description: 'Years Experiences'
  }, {
    value: '88',
    description: 'Awards Achievements'
  }
]

const FunfacSection: React.FC = () => {
  return (
    <section className='px-6 py-24 flex justify-center items-center'>
      <ul className='flex [&>li:not(:first-child)]:-ml-3 sm:[&>li:not(:first-child)]:-ml-6 lg:[&>li:not(:first-child)]:-ml-10'>
        {
          FunfactItems.map((item, index) => (
            <li
              key={index}
              className="flex flex-col justify-center items-center aspect-square w-[24vw] text-center ring ring-gray-200 rounded-full"
            >
              <span className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">{item.value}</span>
              <p className="max-w-[6rem] lg:max-w-[11rem] text-xs sm:text-md md:text-xl lg:text-2xl xl:text-3xl text-gray-400 font-light">{item.description}</p>
            </li>
          ))
        }
      </ul>
    </section>
  )
}

export default FunfacSection