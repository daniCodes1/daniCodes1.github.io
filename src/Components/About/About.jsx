import React from "react";
import "./About.css";
import self_img from "../../assets/website-photo.jpg";

import {
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaDatabase,
} from "react-icons/fa";

import {
  MdAnalytics,
  MdAutoGraph,
  MdChecklist,
  MdDashboard,
  MdStorage,
  MdTerminal,
  MdBuild,
} from "react-icons/md";

export default function About() {
  const iconItems = [
    { label: "Python", Icon: FaPython },
    { label: "Java", Icon: FaJava },
    { label: "JavaScript", Icon: FaJsSquare },
    { label: "TypeScript", Icon: MdBuild },     
    { label: "HTML", Icon: FaHtml5 },
    { label: "CSS", Icon: FaCss3Alt },
    { label: "Scala", Icon: MdTerminal },      
    { label: "C", Icon: MdStorage },           
    { label: "SQL", Icon: FaDatabase },
    { label: "PostgreSQL", Icon: MdStorage },
    { label: "Git", Icon: FaGitAlt },
    { label: "Linux", Icon: MdTerminal },
    { label: "Docker", Icon: FaDocker },
    { label: "Jenkins", Icon: MdBuild },
    { label: "CI/CD", Icon: MdBuild },
    { label: "AWS", Icon: FaAws },
    { label: "Splunk", Icon: MdAnalytics },
    { label: "Pandas", Icon: MdAutoGraph },
    { label: "NumPy", Icon: MdAutoGraph },
    { label: "scikit-learn", Icon: MdAutoGraph },
    { label: "Dashboards", Icon: MdDashboard },
    { label: "Validation", Icon: MdChecklist },
    { label: "Reporting", Icon: MdAnalytics },
    { label: "Excel", Icon: MdAnalytics },
  ];

  return (
    <section className="about">
      <div className="about-left">
        <img src={self_img} alt="Dani" className="about-img" />
      </div>

      <div className="about-right">
        <p className="about-starter">ABOUT</p>
        <h2 className="about-title">What I enjoy</h2>
        <p className="about-subtitle">
      Taking on new projects and challenges!
      I focus on maintainable code and have worked across both backend logic and user-facing features.
       </p>
        <div className="about-card">
          <h3 className="about-card-title">Technologies</h3>

          <div className="about-icons">
            {iconItems.map(({ label, Icon }) => (
              <div className="icon-tile" key={label} title={label}>
                <Icon className="icon" />
                <span className="icon-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
{/* 
        <div className="about-card">
          <h3 className="about-card-title">Most Recent Experience</h3>
          <div className="role-top">
            <div>
              <p className="role-title">Software Developer Co-op</p>
              <p className="role-company">Visier</p>
            </div>
            <p className="role-dates">May 2025 - Dec 2025</p>
          </div>
        </div> */}
      </div>
    </section>
  );
}
