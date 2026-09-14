import { MotionConfig } from 'framer-motion'
import AmbientBackground from './components/AmbientBackground'
import Cursor from './components/Cursor'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import About from './sections/About'
import Contact from './sections/Contact'
import Education from './sections/Education'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Services from './sections/Services'
import Skills from './sections/Skills'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <AmbientBackground />
      <ScrollProgress />
      <Cursor />
      <Navbar />
      <main id="main" className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Education />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}
