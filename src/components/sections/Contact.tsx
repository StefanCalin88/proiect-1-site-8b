import React from 'react';
import { Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Get In Touch</h2>
        <p className="text-gray-300 mb-8">
          I'm currently open for new opportunities. Whether you have a question or just want to say hi, 
          I'll try my best to get back to you!
        </p>
        <a
          href="mailto:contact@example.com"
          className="inline-flex items-center px-8 py-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
        >
          Say Hello
          <Mail className="ml-2 w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default Contact;