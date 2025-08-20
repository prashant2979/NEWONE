import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Project.css";
import theme_pattern from "../../assets/theme_pattern.svg";

function Project() {
  const [index, setIndex] = useState(0);

  const projects = [
  {
    title: "Real Estate Site",
    description: [
      "Responsive property browsing website",
      "Filter properties by location & price",
      "Clean UI with interactive maps",
    ],
    demo: "https://prashant2979.github.io/Real-Estate/",
    github: "https://github.com/prashant2979/Real-Estate",
  },
  {
    title: "Sorting Visualizer",
    description: [
      "Visualizes QuickSort & MergeSort",
      "Interactive controls to pause/speed/reset",
      "Educational tool for algorithm learning",
    ],
    demo: "https://prashant2979.github.io/NEWONE/",
    github: "https://github.com/ajitjha2324/Sorting-Visualizer",
  },
  {
    title: "TODO App",
    description: [
      "Simple and responsive task manager",
      "Add, edit, delete and mark tasks as complete",
      "Built with React + Redux",
    ],
    demo: "#", // add if deployed
    github: "https://github.com/prashant2979/TODO-APP",
  },
  {
    title: "Portfolio",
    description: [
      "Personal portfolio built with React",
      "Sections: About, Skills, Projects",
      "Deployed on GitHub Pages",
    ],
    demo: "https://prashant2979.github.io/Portfolio/", // update if link is different
    github: "https://github.com/prashant2979/Portfolio",
  },
];


  // Show 2 projects at a time
  const visibleProjects = projects.slice(index, index + 2);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? projects.length - 2 : prev - 2));
  };

  const nextSlide = () => {
    setIndex((prev) =>
      prev + 2 >= projects.length ? 0 : prev + 2
    );
  };

  return (
    <section id="project" className="project">
      <div className="project-header">
        <h1>My Projects</h1>
        <img src={theme_pattern} alt="pattern" />
      </div>

      <div className="slider-container">
        <button className="nav-btn left" onClick={prevSlide}>
          &#10094;
        </button>

        <div className="project-row">
          {visibleProjects.map((proj, idx) => (
            <motion.div
              key={proj.title}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <h2>{proj.title}</h2>
              <ul>
                {proj.description.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
              <div className="project-links">
                <a href={proj.demo} target="_blank" rel="noreferrer" className="btn">
                  Live Demo
                </a>
                <a href={proj.github} target="_blank" rel="noreferrer" className="btn secondary">
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <button className="nav-btn right" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </section>
  );
}

export default Project;
