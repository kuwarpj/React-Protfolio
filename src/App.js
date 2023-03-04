import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Services from "./components/Services/Services";
import MyProfile from "./components/MyProfile/MyProfile";
import Testimonials from "./components/Testimonials/Testimonials";
import ClientProject from "./components/ClientProject/ClientProject";
import ThreeD from "./components/ThreeD";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <section id="MyProfile">
        <MyProfile />
      </section>

      <section id="Skills">
        <Skills />
      </section>
      <section id="Services">
        <Services />
      </section>
      <section id="Projects">
        <Projects />
      </section>

      <section id="Projects">
        <ClientProject />
      </section>

      <section>
        <Testimonials />
      </section>

      <section id="Contact">
        <Contact />
      </section>
      <a
        href="https://wa.me/+916203958191"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>
      <Footer />
    </div>
  );
}

export default App;
