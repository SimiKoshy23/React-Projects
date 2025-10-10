import './App.css'
import Contactus from './components/Contactus'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import TechStack from './components/TechStack'

function App() {
  
  return (
    <>
      <Navbar/>
      <section id="hero">
      <Hero/>
      </section>
      <section id="skills">
      <TechStack/>
      </section>
      <section id="contact">
      <Contactus/>
      </section>
    </>
  )
}

export default App
