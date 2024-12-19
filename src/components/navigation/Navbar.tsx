import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import NavLink from './NavLink';
import Container from '../layout/Container';
import ThemeToggle from '../ui/ThemeToggle';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 px-4"
    >
      <Container className="relative">
        <div className={`absolute left-1/2 -translate-x-1/2 w-[90%] max-w-4xl transition-all duration-300 ${
          isScrolled ? 'top-2' : 'top-4'
        }`}>
          <div className={`backdrop-blur-sm bg-white/60 dark:bg-gray-900/60 rounded-2xl px-6 py-3 shadow-lg border border-white/20 dark:border-gray-700/20 transition-all duration-300 ${
            isScrolled ? 'bg-white/70 dark:bg-gray-900/70' : 'bg-white/50 dark:bg-gray-900/50'
          }`}>
            <div className="flex items-center justify-between">
              <motion.a 
                href="#"
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold text-gray-900 dark:text-white"
              >
                <span className="text-orange-500">8</span>B
              </motion.a>
              
              <div className="hidden md:flex items-center space-x-8">
                {navLinks.map((link) => (
                  <NavLink key={link.href} {...link} />
                ))}
                <ThemeToggle />
              </div>

              <div className="md:hidden flex items-center space-x-4">
                <ThemeToggle />
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-600 dark:text-gray-300"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.button>
              </div>
            </div>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="md:hidden mt-4 space-y-4"
                >
                  {navLinks.map((link) => (
                    <NavLink 
                      key={link.href} 
                      {...link} 
                      onClick={() => setIsOpen(false)}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </motion.nav>
  );
};

export default Navbar;