import './styles/globals.css';
import './styles/components.css';

import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import About from './components/About';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Projects />
        <About />
        <Process />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
