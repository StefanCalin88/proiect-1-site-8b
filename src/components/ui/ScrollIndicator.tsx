import React from 'react';
import { motion } from 'framer-motion';

const ScrollIndicator: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.5, y: [0, 10, 0] }}
      transition={{ 
        opacity: { duration: 0.3 },
        y: { 
          duration: 1.5, 
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
      className="fixed bottom-5 left-1/2 -translate-x-1/2 z-10"
    >
      <div className="w-6 h-10 border-2 border-gray-400/50 rounded-full p-1">
        <div className="w-1.5 h-1.5 bg-gray-400/50 rounded-full mx-auto animate-scroll" />
      </div>
    </motion.div>
  );
};

export default ScrollIndicator;