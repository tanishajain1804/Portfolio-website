// Projects.jsx
import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        <div className="project-card">
          <h3>eCommerce with Virtual try on </h3>
          <p>Online shopping platform with a virtual try-on feature for clothes/accessories.Uses image processing/AR to allow users to “try before buying”.Enhances user experience and reduces returns.</p>
          <p><strong>Tech Stack:</strong> HTML,CSS,Javacsript,React js</p>
          <a href="https://github.com/yourgithub/voice-contract" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
        </div>

        <div className="project-card">
          <h3>Arquitecto</h3>
          <p>A web application that connects users with architects, designers, and painters for online consultations.<br></br>
              Features:
                    3D photo/video sharing.AI-powered chatbot (OpenAI).<br></br>
                    Profile creation, bookings, and admin dashboards.<br></br>
                    Image galleries integrated via Unsplash API.</p>
          <p><strong>Tech Stack:</strong>React.js, CSS, OpenAI API, Unsplash API, Local Storage</p>
          
        </div>

        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>Personal portfolio built with React.js and CSS.Includes dynamic sections like About, Skills, Projects, and Contact.Showcases your work and integrates with EmailJS for communication.</p>
          <p><strong>Tech Stack:</strong> HTML,CSS,React js ,JavaScript</p>
          <a href="https://www.figma.com/file/example/OneBanc" target="_blank" rel="noopener noreferrer">Figma ↗</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
