import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import LogoStrip from './components/LogoStrip';
import Projects from './components/Projects';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <LogoStrip />
        <Projects />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;