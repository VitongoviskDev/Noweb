import React from 'react'
import HeroSection from './sections/HeroSection'
import ColabSection from './sections/ColabSection'

const App: React.FC = () => {
  return (
    <div style={{ fontFamily: 'DM Sans' }}>
      <header>

      </header>
      <main>
        <HeroSection />
        <ColabSection />
      </main>
    </div>
  )
}

export default App