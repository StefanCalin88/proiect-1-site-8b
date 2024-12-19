import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SocialLinkProps {
  href: string;
  icon: ReactNode;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon }) => {
  return (
    <motion.a
      href={href}
      className="relative p-2 text-gray-300 transition-colors duration-300 hover:text-orange-500 group"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative z-10">
        {icon}
      </div>
      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-orange-500/20 to-orange-600/20 blur-lg" />
    </motion.a>
  );
};

export default SocialLink;