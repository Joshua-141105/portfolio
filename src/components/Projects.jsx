import React, { forwardRef } from 'react';
import { Layers, Github, Code } from 'lucide-react';

const Projects = forwardRef((props, ref) => {
  return (
    <section id="projects" ref={ref} className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="Hotel Reservation System"
            description="A comprehensive hotel booking platform built with React, allowing users to search, view, and book hotel rooms with an intuitive interface."
            tags={['React', 'JavaScript', 'CSS', 'API Integration']}
            githubLink="https://github.com/Joshua-141105/hotel-booking-react"
          />
          
          <ProjectCard
            title="Personal Portfolio Website"
            description="A responsive portfolio website built with React and GSAP animations to showcase skills, projects, and achievements."
            tags={['React', 'GSAP', 'Tailwind CSS', 'TypeScript']}
            status="Current Project"
          />
          
          <ProjectCard
            title="Student Management System"
            description="A Java-based application for managing student records, courses, and academic performance with a user-friendly interface."
            tags={['Java', 'SQL', 'Swing', 'Database Design']}
            status="In Development"
          />
        </div>
      </div>
    </section>
  );
});

const ProjectCard = ({ title, description, tags, githubLink, status }) => (
  <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
    <div className="h-48 bg-blue-200 flex items-center justify-center">
      <Layers className="text-blue-600" size={64} />
    </div>
    <div className="p-6">
      <h3 className="font-semibold text-xl mb-2 text-blue-800">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">{tag}</span>
        ))}
      </div>
      {githubLink ? (
        <a 
          href={githubLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 flex items-center"
        >
          <Github size={16} className="mr-1" />
          View on GitHub
        </a>
      ) : (
        <span className={`${status === "Current Project" ? "text-blue-600" : "text-gray-600"} flex items-center`}>
          <Code size={16} className="mr-1" />
          {status}
        </span>
      )}
    </div>
  </div>
);

Projects.displayName = 'Projects';

export default Projects;