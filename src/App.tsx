import React from 'react'
import HeroSection from './sections/HeroSection'
import ColabSection from './sections/ColabSection'
import ServicesSection from './sections/ServicesSection'
import FunfacSection from './sections/FunfacSection'

const App: React.FC = () => {
  return (
    <div style={{ fontFamily: 'DM Sans' }}>
      <header>

      </header>
      <main>
        <HeroSection />
        <ColabSection />
        <ServicesSection />
        <FunfacSection />
      </main>
    </div>
  )
}

export default App