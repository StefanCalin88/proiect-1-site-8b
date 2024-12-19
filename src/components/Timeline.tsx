import React from 'react';
import { Calendar, Briefcase, GraduationCap } from 'lucide-react';
import TimelineItem from './TimelineItem';
import { Experience } from '../types';

const experiences: Experience[] = [
  {
    title: 'Senior Software Engineer',
    company: 'Tech Corp',
    period: '2021 - Present',
    description: 'Led development of enterprise applications using React and Node.js',
    icon: <Briefcase className="w-6 h-6" />,
  },
  {
    title: 'Software Developer',
    company: 'Digital Solutions Inc',
    period: '2018 - 2021',
    description: 'Developed and maintained multiple web applications',
    icon: <Calendar className="w-6 h-6" />,
  },
  {
    title: 'Computer Science Degree',
    company: 'Tech University',
    period: '2014 - 2018',
    description: "Bachelor of Science in Computer Science",
    icon: <GraduationCap className="w-6 h-6" />,
  },
];

const Timeline: React.FC = () => {
  return (
    <div className="py-12">
      <div className="relative max-w-3xl mx-auto">
        {experiences.map((exp, index) => (
          <TimelineItem
            key={index}
            experience={exp}
            isLast={index === experiences.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;