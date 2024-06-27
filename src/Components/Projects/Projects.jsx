import React from 'react'
import './Projects.css'

// const Projects = () => {
//   return (
//     <div className='projects'>
//       <div className="project-card">
//         <h2>Personal Website</h2>
//         <h3>Get to know me better in this customized online space!</h3>
//         <p>JavaScript, React, HTML, CSS</p>
//         <a href="https://github.com/daniCodes1/Personal-Website">
//           <button className='btn'>View Project Code</button>
//         </a>
//       </div>

//       <div className="project-card">
//         <h2>Personal Website</h2>
//         <h3>Get to know me better in this customized online space!</h3>
//         <p>JavaScript, React, HTML, CSS</p>
//         <a href="https://github.com/daniCodes1/Personal-Website">
//           <button className='btn'>View Project Code</button>
//         </a>
//       </div>

//       <div className="project-card">
//         <h2>Personal Website</h2>
//         <h3>Get to know me better in this customized online space!</h3>
//         <p>JavaScript, React, HTML, CSS</p>
//         <a href="https://github.com/daniCodes1/Personal-Website">
//           <button className='btn'>View Project Code</button>
//         </a>
//       </div>
//     </div>
//   )
// }

const Projects = () => {
  const projects = [
    { title: 'Personal Website', description: 'Get to know me better in this customized online space!', tech: 'JavaScript, React, HTML, CSS', link: 'https://github.com/daniCodes1/Personal-Website' },
    { title: 'Project 2', description: 'Description for project 2', tech: 'Tech stack for project 2', link: 'https://example.com/project2' },
    { title: 'Project 3', description: 'Description for project 3', tech: 'Tech stack for project 3', link: 'https://example.com/project3' },
    { title: 'Project 4', description: 'Description for project 4', tech: 'Tech stack for project 4', link: 'https://example.com/project4' },
    { title: 'Project 5', description: 'Description for project 5', tech: 'Tech stack for project 5', link: 'https://example.com/project5' },
    { title: 'Project 6', description: 'Description for project 6', tech: 'Tech stack for project 6', link: 'https://example.com/project6' },
  ];

  return (
    <div className="project-container">
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <h2>{project.title}</h2>
          <h3>{project.description}</h3>
          <p>{project.tech}</p>
          <a href={project.link} target="_blank">
            <button className="btn">View Project Code</button>
          </a>
        </div>
      ))}
    </div>
  );
};


export default Projects