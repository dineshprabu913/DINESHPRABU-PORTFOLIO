import { projects } from "../data/projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  return (
    <section id="projects" className="projects-section">

      <h2 className="section-title">🚀 My Projects</h2>

      <div className="projects-grid">
        {projects.map((proj, index) => (
          <div key={index} className="project-card">

            <h3>{proj.title}</h3>

            <p>{proj.desc}</p>

            {/* TECH BADGE */}
            <span className="tech-badge">{proj.tech}</span>

            {/* BUTTONS */}
            <div className="project-buttons">
              <a href={proj.github} target="_blank">
                <FaGithub /> Code
              </a>

              <a href={proj.live} target="_blank">
                <FaExternalLinkAlt /> Live
              </a>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}

export default Projects;