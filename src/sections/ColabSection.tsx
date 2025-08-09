import React from 'react'

import ColabSectionImage from '../assets/images/ColabSectionImage.png'
import Link from '../components/Link'

import Group1 from '../assets/images/colabs/Group-1.png'
import Group2 from '../assets/images/colabs/Group-2.png'
import Group3 from '../assets/images/colabs/Group-3.png'
import Group4 from '../assets/images/colabs/Group-4.png'
import Group5 from '../assets/images/colabs/Group-5.png'

const ColabSection: React.FC = () => {
    const groups = [Group1, Group2, Group3, Group4, Group5];

    return (
        <section className='relative py-24 px-78 text-white bg-[#121212]'>
            <div className='absolute top-16 right-20 h-[4rem]'>
                <img src={ColabSectionImage} alt="ColabSectionImage"
                    className='h-full object-contain' />
            </div>
            <div className=''>
                <div className=''>
                    <h1 className='text-4xl' style={{ fontFamily: 'Marcellus' }}>We collaborate with a few disability service <br />providers to create inclusive goods that <br />meet their requirements.</h1>
                </div>
                <div className='flex items-center justify-around mt-12'>
                    <div className='font-bold'>
                        <span className='text-5xl'>25+</span>
                        <p>Year Of Experience</p>
                    </div>
                    <div className='max-w-sm space-y-10'>
                        <p>Established in 1995, NEXIN has been a leading force in the digital landscape for over two decades. We're a passionate team of designers, </p>
                        <Link className='place-self-start border-white'>More About Us</Link>
                    </div>
                    <div className='max-w-sm space-y-10'>
                        <p>Established in 1995, NEXIN has been a leading force in the digital landscape for over two decades. We're a passionate team of designers, </p>
                        <Link className='place-self-start border-white'>Get In Touch</Link>
                    </div>
                </div>
            </div>
            <div className='mt-24'>
                <div className="relative z-1 pl-24 w-full after:absolute after:left-0 after:top-1/2 after:-z-1 after:content[''] after:w-full after:h-[2px] after:bg-zinc-800">
                    <h2 className='text-2xl px-4 bg-[#121212] w-fit' style={{ fontFamily: 'Marcellus' }}>We worked with global largest brands</h2>
                </div>
                <div className='mt-12'>
                    <ul className='flex justify-between'>
                        {
                            groups.map((group, index) => (
                                <li key={index} className='h-[60px]'>
                                    <img src={group} alt={group} 
                                    className='h-full w-auto object-contain'/>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default ColabSection