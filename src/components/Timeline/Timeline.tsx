import React from 'react';
import { Calendar, Briefcase, Award } from 'lucide-react';
import TimelineItem from './TimelineItem';
import { Experience } from '../../types';

const experiences: Experience[] = [
  {
    title: 'Enterprise Solutions',
    company: 'Major Tech Corporation',
    period: '2023',
    description: 'Developed custom enterprise software solutions for Fortune 500 companies',
    icon: <Briefcase className="w-4 h-4" />,
  },
  {
    title: 'AI Integration',
    company: 'Healthcare Provider',
    period: '2022',
    description: 'Implemented AI-driven chatbot solutions for patient care',
    icon: <Calendar className="w-4 h-4" />,
  },
  {
    title: 'Mobile App Success',
    company: 'Retail Chain',
    period: '2021',
    description: 'Launched successful mobile app with over 1M downloads',
    icon: <Award className="w-4 h-4" />,
  },
];

const Timeline: React.FC = () => {
  return (
    <div className="container mx-auto w-full h-full">
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-1/2"></div>
        {experiences.map((exp, index) => (
          <TimelineItem key={index} experience={exp} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;