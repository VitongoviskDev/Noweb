import React from 'react'
import SectionTitle from '../components/SectionTitle'

import imgMeeting from '../assets/images/ChooseUs/Meeting.jpg';
import imgNotebook from '../assets/images/ChooseUs/Notebook.jpg';
import imgMarketing from '../assets/images/ChooseUs/MarketingStrategy.jpg';
import imgUxUi from '../assets/images/ChooseUs/UxUiSolution.jpg';

import CircleLinkButton from '../components/CircleLinkButton';
import Tag from '../components/Tag';
import DefaultSection from '../components/DefaultSection';

const WhyChooseUsSection: React.FC = () => {
    return (
        <DefaultSection id='ContactSection' center className='bg-primary-shade'>
            <div className='flex flex-col xl:flex-row gap-4'>
                {/* Left container */}
                <div className='flex-1 flex flex-col items-center xl:items-end gap-8 xl:max-w-2xl'>
                    <div className='flex flex-col gap-4 max-w-xl'>
                        <SectionTitle subtitle='what sets us apart'>
                            Driving Digital Success with Strategy Design
                        </SectionTitle>
                        <p className='text-gray-400 text-base'>
                            We believe that the surest measure of success is when our partners with us more than half It's more than just the visuals.
                        </p>
                    </div>
                    <div className='flex justify-center items-center overflow-hidden'>
                        <img src={imgNotebook} alt="image2"
                            className='h-full object-contain' />
                    </div>
                </div>

                {/* Right container */}
                <div className='flex-1 flex flex-col items-center gap-8 xl:justify-between xl:max-w-xl'>
                    <div className='flex-1 flex flex-col-reverse md:flex-row items-center gap-4'>
                        <div className='xl:flex-1'>
                            <div className='flex justify-center items-center h-72 w-80 md:w-70 overflow-hidden'>
                                <img src={imgMeeting} alt="image1"
                                    className='h-full object-cover' />
                            </div>
                        </div>
                        <div className='flex-1 flex flex-col justify-center gap-4 h-full'>
                            <p className='text-gray-400 text-base'>We believe that the surest measure of success is when our partners with us more than half It's more than just the visuals. We're here to support your growth.</p>
                            <p className='text-gray-400 text-base'>We believe that the surest measure of success is when our partners with us more than half It's more than just the visuals. </p>
                        </div>
                    </div>
                    <div className='flex-1 flex items-start gap-4'>
                        <div className='flex-1'>
                            <p className='text-gray-400 text-base'>Conduct thorough market research to the fast target audience behaviours. Submit as many design tasks</p>
                        </div>
                        <div className='flex-1'>
                            <span className='text-2xl' style={{ fontFamily: 'Marcellus' }}>Our Mission</span>
                            <p className='text-gray-400 text-base'>Conduct thorough market research to the fast target audience behaviours.</p>
                        </div>
                    </div>
                    <div className='flex flex-col-reverse sm:flex-row items-start gap-4'>
                        <div className='flex-1 flex justify-center items-center xl:justify-start w-full'>
                            <CircleLinkButton url='#ContactSection'>Contact US</CircleLinkButton >
                        </div>
                        <div className='flex-1 flex item-center gap-4'>
                            <Tag image={imgMarketing}>Marketings<br />Strategy</Tag>
                            <Tag image={imgUxUi}>UX/UI<br />Solution</Tag>
                        </div>
                    </div>
                </div>
            </div>
        </DefaultSection>
    )
}

export default WhyChooseUsSection