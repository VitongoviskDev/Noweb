import React from 'react'

import AbotuSectionImage from '../assets/images/aboutSection/AboutSectionImage.png'

import Group1 from '../assets/images/aboutSection/colabs/Group-1.png'
import Group2 from '../assets/images/aboutSection/colabs/Group-2.png'
import Group3 from '../assets/images/aboutSection/colabs/Group-3.png'
import Group4 from '../assets/images/aboutSection/colabs/Group-4.png'
import Group5 from '../assets/images/aboutSection/colabs/Group-5.png'
import DefaultSection from '../components/DefaultSection'
import ImageContainer from '../components/ImageContainer'
import Article from '../components/Article'

const AboutSection: React.FC = () => {
    const groups = [Group1, Group2, Group3, Group4, Group5];

    return (
        <DefaultSection id='about' className='bg-secondary text-white'>
            <ImageContainer img={AbotuSectionImage} object='contain' className='absolute top-8 right-8 md:top-16 md:right-20 h-[4rem]' />
            <div>
                <div>
                    <h1 className='text-2xl md:text-3xl lg:text-4xl' style={{ fontFamily: 'Marcellus' }}>We collaborate with a few disability service <br />providers to create inclusive goods that <br />meet their requirements.</h1>
                </div>
                <div className='flex items-center justify-center'>
                    <div className='flex flex-col gap-12 md:flex-row items-center justify-around mt-12 max-w-5xl'>
                        <div className='text-center lg:text-left font-bold'>
                            <span className='text-3xl md:text-4xl lg:text-5xl'>25+</span>
                            <p className='text-nowrap text-sm'>Year Of Experience</p>
                        </div>
                        <Article linkText='More About Us' url='#about1' className='lg:space-y-10'>
                            Established in 1995, NEXIN has been a leading force in the digital landscape for over two decades. We're a passionate team of designers,
                        </Article>
                        <Article linkText='Get In Touch' url='#ContactSection' className='lg:space-y-10'>
                            Established in 1995, NEXIN has been a leading force in the digital landscape for over two decades. We're a passionate team of designers,
                        </Article>
                    </div>
                </div>
            </div>
            <div className='mt-24'>
                <div className="relative z-1 pl-8 lg:pl-24 w-full after:absolute after:left-0 after:top-1/2 after:-z-1 after:content[''] after:w-full after:h-[2px] after:bg-zinc-800">
                    <h2 className='text-2xl px-4 bg-[#121212] w-fit' style={{ fontFamily: 'Marcellus' }}>We worked with global largest brands</h2>
                </div>
                <div className='flex justify-center items-center mt-12'>
                    <ul className='flex flex-col md:flex-row flex-wrap md:max-w-lg lg:max-w-none items-center gap-8 justify-between lg:justify-start'>
                        {
                            groups.map((group, index) => (
                                <ImageContainer key={index} img={group} object='contain' className='h-[60px]' />
                            ))
                        }
                    </ul>
                </div>
            </div>
        </DefaultSection>
    )
}

export default AboutSection