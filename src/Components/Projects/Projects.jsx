import React from 'react'
import './Projects.css'

const Projects = () => {
  const projects = [
    { title: 'Personal Website', description: 'Get to know me better in this customized online space!', tech: 'JavaScript, React', link: 'https://github.com/daniCodes1/daniCodes1.github.io' },
    { title: 'Job Portal', description: 'A relational database Job Portal application', tech: 'SQL(Relational DB), PHP', link: 'https://github.com/daniCodes1/Job-Portal-Application' },
    { title: 'CredCheck', description: 'A full-stack risk assessment tool that predicts credit card default using machine learning', tech: 'Python, JavaScript', link: 'https://github.com/daniCodes1/CredCheck' },
    { title: 'IntelligentDashboard', description: 'Manage your daily tasks using real-time statistics and productivity recommendations.', tech: 'JavaScript', link: 'https://github.com/daniCodes1/IntelligentDashboard' },
    { title: 'Movie Manager', description: 'Get personalized movie recommendations, save and revisit favourites', tech: 'Java', link: 'https://github.com/daniCodes1/Movie-Manager' },
    { title: 'DigitalDiary', description: 'Blend convenience with the timeless art of self-expression. Log in to write, save and view your diary entries.', tech: 'Python', link: 'https://github.com/daniCodes1/DigitalDiary' }
  ];

  return (
  <div className="project-container">
  <div className="exp-head">
    <p className="exp-starter">SHOWCASE</p>
    <h2 className="exp-title">
      <span style={{ opacity: 0.6, fontWeight: 400 }}>(Public) </span>
      Projects
    </h2>
  </div>
    <div className="projects-grid">
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <h2>{project.title}</h2>
          <h3>{project.description}</h3>
          <p>{project.tech}</p>
          <a href={project.link} target="_blank" rel="noreferrer">
            <button className="btn">Repo</button>
          </a>
        </div>
      ))}
    </div>
  </div>
);

      
};


export default Projects