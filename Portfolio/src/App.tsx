import "./App.css";
import Banner from "./components/Banner";
import Contactus from "./components/Contactus";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";

function App() {
  return (
    <div className="app">
      <Navbar />
      <section id="banner">
        <Banner />
      </section>
      <section id="hero">
        <Hero />
      </section>
      <section id="skills">
        <TechStack />
      </section>
       <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contactus />
      </section>
    </div>
  );
}

export default App;
