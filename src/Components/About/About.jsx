import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>

        <p className="about-description">
          Hello! I’m <span className="highlight">Tanisha Jain</span>, a passionate and detail-oriented <strong>Full stack Developer</strong> based in India.
          I love bringing designs to life with code and enjoy building smooth, responsive, and accessible web interfaces using technologies like <strong>React</strong>, <strong>JavaScript</strong>, and <strong>HTML/CSS</strong>.
        </p>

        <p className="about-description">
          I focus on writing clean, scalable code and am always eager to learn new tools and frameworks. 
          My goal is to build meaningful digital experiences that not only look good but also perform well.
        </p>

        <a href="public/resume_tanisha_jain (5).pdf" download className="about-resume-button">📄 Download Resume</a>

        <div className="about-stats">
          <div className="stat-card">
            <h3>Fresher</h3>
            <p>Experience Level</p>
          </div>
          <div className="stat-card">
            <h3>2+</h3>
            <p>Projects Completed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
