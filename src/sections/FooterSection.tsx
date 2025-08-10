import React from 'react'
import CircleLinkButton from '../components/CircleLinkButton'
import { FaBehance, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

const FooterSection: React.FC = () => {
    return (
        <footer className=''>
            <div className='flex items-center justify-between bg-secondary px-12 sm:px-24 md:px-24 lg:px-48 py-31'>
                <div className='flex flex-col gap-8 text-white'>
                    <span className='text-4xl md:text-5xl lg:text-6xl xl:text-8xl' style={{ fontFamily: 'Marcellus' }}>Let's Create<br />Something Great</span>
                    <p className='text-xs'>We shift you from today’s reality to tomorrow’s potential, ensuring</p>
                </div>
                <CircleLinkButton url='#ContactSection' accent>Let's Talk</CircleLinkButton>
            </div>
            <div className='px-12 sm:px-24 md:px-24 lg:px-48 py-24'>
                <div className='flex items-end justify-between border-b border-gray-300 pb-4'>
                    <ul className="grid grid-cols-2 gap-x-4 xl:flex items-center xl:gap-12">
                        <li><a href="#AboutSection">About company</a></li>
                        <li><a href="#CareersSection">Our Careers</a></li>
                        <li><a href="#ServicesSection">Services</a></li>
                        <li><a href="#ContactSection">Contact</a></li>
                    </ul>
                    <ul className='flex flex-col md:flex-row items-start  md:items-center md:gap-2 lg:gap-4 xl:gap-12'>
                        <li><a href="#PrivacyPolicy">Privacy Policy</a></li>
                        <li><a href="#TermsAndConditions">Terms & Conditions</a></li>
                    </ul>
                </div>
                <div className='flex flex-col md:flex-row items-center justify-between gap-4 pt-6'>
                    <ul className='flex items-center gap-5 [&>li]:text-secodary'>
                        <li><a href="#FacebookLink"><FaFacebookF /></a></li>
                        <li><a href="#TwitterLink"><FaTwitter /></a></li>
                        <li><a href="#InstagramLink"><FaInstagram /></a></li>
                        <li><a href="#BehanceLink"><FaBehance /></a></li>
                    </ul>
                    <p className='font-light text-base'>Copyright © 2025 Nex. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default FooterSection