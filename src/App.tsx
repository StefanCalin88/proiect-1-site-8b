import React from 'react';
import Navbar from './components/navigation/Navbar';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Timeline from './components/Timeline/Timeline';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <Hero />
      <Services />
      <section id="experience" className="py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Our Success Story</h2>
          <Timeline />
        </div>
      </section>
      <Projects />
      <Contact />
    </div>
  );
}

export default App;