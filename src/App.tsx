import React from 'react'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import ServicesSection from './sections/ServicesSection'
import FunfacSection from './sections/FunfacSection'
import VideoSection from './sections/VideoSection'
import WorkProcess from './sections/WorkProcess'
import WhyChooseUsSection from './sections/WhyChooseUsSection'
import FooterSection from './sections/FooterSection'
import Navbar from './components/Navbar'
import { navLinks } from './util/Menu'

const App: React.FC = () => {
  return (
    <div>
      <header>
        <Navbar links={navLinks} />
      </header>
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <FunfacSection />
        <VideoSection />
        <WorkProcess />
        <WhyChooseUsSection />
      </main>
      <FooterSection />
    </div>
  )
}

export default App