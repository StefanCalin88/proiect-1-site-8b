import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import SocialLink from '../SocialLink';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-orange-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-4xl mx-auto text-center"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-6xl font-bold mb-6 text-white"
        >
          Welcome to <span className="text-orange-500">8B</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-8"
        >
          Transforming Ideas into Digital Excellence
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center space-x-8"
        >
          <SocialLink href="https://github.com/8b-company" icon={<Github size={28} />} />
          <SocialLink href="https://linkedin.com/company/8b" icon={<Linkedin size={28} />} />
          <SocialLink href="mailto:contact@8b.dev" icon={<Mail size={28} />} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;