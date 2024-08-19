import React from 'react';

const Projects = () => {
    const projectsData = [
        {
            title: 'Flavor Finder',
            image: '',
            description: '',
            technologies: [''],
            link: ''
        }
    ];

    return (
        <section className="projects">
          <h2>Projects</h2>
          <div className="project-list">
            {projectsData.map((project) => (
              <div className="project" key={project.title}>
                <img src={project.image} alt={project.title} />
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <ul>
                  {project.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </div>
            ))}
          </div>
        </section>
      );
    };
    
    export default Projects;