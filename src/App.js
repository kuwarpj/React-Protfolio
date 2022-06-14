
import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <About/>
      <section id='Skills'>
      <Skills/>
      </section>
      <section id='Projects'>
      <Projects/>
      </section>
      <section id='Skills'>
     
      </section>
      <section id='Contact'>
      <Contact/>
      </section>
      

      <Footer/>
    </div>
  );
}

export default App;
