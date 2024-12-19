import React from 'react';
import Container from '../layout/Container';
import SectionTitle from '../ui/SectionTitle';
import ProjectCard from '../projects/ProjectCard';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A modern e-commerce platform with real-time inventory management',
    imageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    technologies: ['React', 'Node.js', 'MongoDB', 'Redux'],
    githubUrl: 'https://github.com/8b-company/ecommerce',
    liveUrl: 'https://ecommerce.8b.dev',
  },
  {
    title: 'AI-Powered Chat Application',
    description: 'Real-time chat application with AI-driven response suggestions',
    imageUrl: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    technologies: ['React', 'Socket.io', 'OpenAI', 'TypeScript'],
    githubUrl: 'https://github.com/8b-company/ai-chat',
    liveUrl: 'https://chat.8b.dev',
  },
  {
    title: 'Healthcare Management System',
    description: 'Comprehensive platform for managing patient records and appointments',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'GraphQL'],
    githubUrl: 'https://github.com/8b-company/healthcare',
    liveUrl: 'https://health.8b.dev',
  },
  {
    title: 'Mobile Fitness App',
    description: 'Cross-platform fitness tracking application with social features',
    imageUrl: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    technologies: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
    githubUrl: 'https://github.com/8b-company/fitness',
    liveUrl: 'https://fitness.8b.dev',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <Container>
        <SectionTitle
          title="Featured Projects"
          subtitle="Explore our latest work and innovative solutions"
        />
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;