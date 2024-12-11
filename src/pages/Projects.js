import React from 'react';

const projects = [
  { title: 'Project 1', description: 'Details about Project 1', link: 'https://example.com', media: 'image.jpg' },
  { title: 'Project 2', description: 'Details about Project 2', link: 'https://example.com', media: 'video.mp4' },
  { title: 'Project 3', description: 'Details about Project 3', link: 'https://example.com', media: 'video.mp4' },
  { title: 'Project 4', description: 'Details about Project 4', link: 'https://example.com', media: 'video.mp4' },
];

const Projects = () => {
  return (
    <section id="projects" className="p-8">
      <h2 className="text-2xl font-bold mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <div key={idx} className="flex flex-col md:flex-row items-center">
            {/* Left: Card */}
            <div className="bg-white shadow-lg p-4 rounded-md">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-2">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-4 inline-block">
                View Project
              </a>
            </div>
            {/* Right: Image/Video */}
            <div className="mt-4 md:mt-0 md:ml-6">
              {project.media.endsWith('.mp4') ? (
                <video src={project.media} controls className="w-full h-auto rounded-md" />
              ) : (
                <img src={project.media} alt={project.title} className="w-full h-auto rounded-md" />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
