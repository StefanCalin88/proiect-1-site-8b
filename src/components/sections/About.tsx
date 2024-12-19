import React from 'react';
import { ExternalLink } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Profile"
            className="rounded-lg shadow-lg"
          />
          <div>
            <p className="text-gray-700 leading-relaxed mb-6">
              I'm a passionate developer with 5+ years of experience in creating beautiful and functional web applications. 
              I specialize in React, Node.js, and modern web technologies.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
            >
              Get in Touch
              <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;