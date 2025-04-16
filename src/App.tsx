import { useState } from 'react'
import Hero from './components/sections/Hero'
import Showcase from './components/sections/Showcase'
import Navbar from './components/Navbar'
import LogoSection from './components/LogoSection'
import FeatureCards from './components/FeatureCards'
import ExperienceSection from './components/sections/ExperienceSection'
import TechStack from './components/sections/TechStack'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <Showcase />
      <LogoSection />
      <FeatureCards />
      <ExperienceSection />
      <TechStack />
    </>
  )
}

export default App
