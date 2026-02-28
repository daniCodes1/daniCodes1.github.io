import React, { useRef } from "react";
import "./Experiences.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import assistant from "../../assets/assistant.png";
import laptop from "../../assets/laptop.png";
import programming from "../../assets/programming.png";
import science from "../../assets/science.png";
import teaching from "../../assets/teaching.png";

const Experiences = () => {
  const slides = [
      {
      title: "Software Developer",
      company: "Visier",
      date: "May 2025 - Dec 2025",
      description: [
      "Worked on large-scale analytics infrastructure for enterprise customers, building CI/CD-enforced data quality systems in Python and a Scala-based validation framework that reduced data pipeline processing latency by about 50%. Re-architected multi-region data ingestion to improve production reliability and led Python runtime and dependency upgrades to unblock ML pipelines.",
      "Python, Scala, AWS, Jenkins, Splunk",
      ],
      image: programming,
    },
    {
      title: "Software Developer",
      company: "Terra CO2",
      date: "May 2024 - Aug 2024",
      description: [
        "Full stack development on an internal data platform supporting ingestion, processing, and reporting workflows. Built interactive dashboards, automated reports, and geospatial visualizations to enable self-serve analytics and optimized PostgreSQL queries.",
        "Python, JavaScript, PostgreSQL, Flask, HTML, CSS",
      ],
      image: programming,
    },
    {
      title: "IT Technician",
      company: "Immigration, Refugees and Citizenship",
      date: "May 2024 - Aug 2024",
      description:
      ["Managed end-to-end IT operations for a 200+ user office during an IT specialist’s leave, providing hands-on technical support across systems and infrastructure using Active Directory and Exchange Server. Configured, diagnosed, and resolved operating system, server, network, and security issues.",
      "Powershell, Active Directory, Exchange Server, Excel",
      ],
            image: laptop,
    },
    {
      title: "Undergraduate Teaching Assistant",
      company: "UBC",
      date: "Sept 2022 - May 2023",
      description:
      "Led computer science lab sessions, guiding students through circuits and advanced logic concepts. Supported learning through office hours by answering questions and providing constructive feedback.",
      image: teaching,
    },
    {
      title: "Instructor",
      company: "Geering Up Engineering Outreach",
      date: "June 2022 - Aug 2022",
      description:
        "Taught STEM topics to over 50 children and ensured they actively participated in lessons and activities. Produced 14 structured lessons plans catering to different themes targeting diverse learning goals",
      image: science,
    },
    {
      title: "Student Assistant",
      company: "Burnaby School District",
      date: "June 2020 - Aug 2021",
      description:
      "Worked on-site in administration to support student safety measures during the early stages of the pandemic. Addressed health regulation issues, processed withdrawals, and handled phone inquiries.",
      image: assistant,
    },
  ];

  const slider = useRef(null);
  const txRef = useRef(0);

  const visible = 2;         
  const step = 100 / visible; 
  const maxSteps = Math.max(0, slides.length - visible);
  const maxTx = -(maxSteps * step);

  const applyTx = () => {
    if (!slider.current) return;
    slider.current.style.transform = `translateX(${txRef.current}%)`;
  };

  const slideForward = () => {
    txRef.current = Math.max(maxTx, txRef.current - step);
    applyTx();
  };

  const slideBackward = () => {
    txRef.current = Math.min(0, txRef.current + step);
    applyTx();
  };

  return (
    <section className="experiences">
      <div className="exp-head">
        <p className="exp-starter">SLIDESHOW</p>
        <h2 className="exp-title">Experiences</h2>
      </div>

      <div className="carousel">
        <button className="nav-btn back-btn" onClick={slideBackward} aria-label="Previous">
          <FiChevronLeft />
        </button>

        <div className="slider">
          <ul ref={slider} className="track">
            {slides.map((slide, index) => (
              <li key={index} className="item">
                <div className="slide">
                  <div className="exp-info">
                    <img src={slide.image} alt="" />
                    <div>
                      <h3>{slide.title}</h3>
                      <span>
                        <i>{slide.company}, {slide.date}</i>
                      </span>
                    </div>
                  </div>

                  <p>
                    {Array.isArray(slide.description)
                      ? slide.description.map((line, idx) => (
                          <span key={idx}>
                            {line}
                            {idx < slide.description.length - 1 && (
                              <>
                                <br /><br />
                              </>
                            )}
                          </span>
                        ))
                      : slide.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <button className="nav-btn next-btn" onClick={slideForward} aria-label="Next">
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Experiences;