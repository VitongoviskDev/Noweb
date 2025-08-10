import React from 'react'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import ServicesSection from './sections/ServicesSection'
import FunfacSection from './sections/FunfacSection'
import VideoSection from './sections/VideoSection'
import WorkProcess from './sections/WorkProcess'
import WhyChooseUsSection from './sections/WhyChooseUsSection'

const App: React.FC = () => {
  return (
    <div style={{ fontFamily: 'DM Sans' }}>
      <header>

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
    </div>
  )
}

export default App