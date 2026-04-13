import { skills } from "../data/skills";

function Skills() {
  return (
    <section id="skills" className="skills-section">

      <h2 className="section-title">⚡ My Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <div key={index} className={`skill-card ${skill.type}`}>

              <Icon className="skill-icon" />

              <h3>{skill.name}</h3>

            </div>
          );
        })}
      </div>

    </section>
  );
}

export default Skills;