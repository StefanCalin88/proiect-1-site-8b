import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Experience } from '../../types';

interface TimelineItemProps {
  experience: Experience;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ experience, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { 
      opacity: 0, 
      x: index % 2 === 0 ? -50 : 50 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={`mb-8 flex justify-between items-center w-full ${
        index % 2 === 0 ? 'flex-row-reverse' : ''
      }`}
    >
      <div className="order-1 w-5/12" />
      <div className="z-20 flex items-center order-1 bg-orange-500 shadow-xl w-8 h-8 rounded-full">
        <div className="mx-auto font-semibold text-white">{experience.icon}</div>
      </div>
      <motion.div
        className={`order-1 bg-white rounded-lg shadow-xl w-5/12 px-6 py-4`}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <h3 className="font-bold text-gray-800 text-xl mb-1">{experience.title}</h3>
        <p className="text-sm text-orange-500 font-medium mb-2">{experience.company}</p>
        <p className="text-gray-600 text-sm">{experience.period}</p>
        <p className="text-gray-700 mt-2">{experience.description}</p>
      </motion.div>
    </motion.div>
  );
};

export default TimelineItem;