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
import type { NavLink } from './util/NavLink'

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

const navLinks: NavLink[] = [
  {
    href: "/#Home", label: "Home",
    submenu: [
      { href: "/#home1", label: "Home 1" },
      { href: "/#home2", label: "Home 2" }
    ]
  },
  {
    href: "/#AboutSection", label: "About Us",

  },
  {
    href: "/#portifolio", label: "Portifólio",
    submenu: [
      { href: "/#portifolio1", label: "portifolio 1" },
      { href: "/#portifolio2", label: "portifolio 2" }
    ]
  },
  {
    href: "/#pages", label: "Pages",
    submenu: [
      { href: "/#pages1", label: "pages 1" },
      { href: "/#pages2", label: "pages 2" }
    ]
  },
  {
    href: "/#blog", label: "Blog",
    submenu: [
      { href: "/#blog1", label: "blog 1" },
      { href: "/#blog2", label: "blog 2" }
    ]
  },
  {
    href: "/#ContactSection", label: "Contact Us"
  }
]

export default App