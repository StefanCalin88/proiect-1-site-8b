import React from 'react';
import { Experience } from '../types';

interface TimelineItemProps {
  experience: Experience;
  isLast: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ experience, isLast }) => {
  return (
    <div className="mb-8 flex gap-8">
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-500 text-white">
          {experience.icon}
        </div>
        {!isLast && <div className="w-0.5 h-full bg-gray-300 mt-4" />}
      </div>
      <div className="flex-1">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-gray-900">{experience.title}</h3>
          <p className="text-orange-500 font-medium">{experience.company}</p>
          <p className="text-gray-600 text-sm mt-1">{experience.period}</p>
          <p className="text-gray-700 mt-2">{experience.description}</p>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;