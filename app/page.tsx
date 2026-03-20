import Hero from './components/sections/Hero'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import Ambitions from './components/sections/Ambitions'
import Contact from './components/sections/Contact'
import About from './components/sections/About'
export default function Home() {
  return (
    <main className='pt-20'>
        <Hero />
        <About/>
        <Projects/>
        <Skills/>
        <Ambitions/>
        <Contact/>
    </main>
  )
}