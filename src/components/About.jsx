function About() {
  return (
    <section id="about" className="about-section">

      <h2 className="section-title">👨‍💻 About Me</h2>

      <div className="about-card">

        <p>
          Hi, I'm <span className="highlight">Dineshprabu</span> 👋 a passionate
          Frontend Developer specializing in React.
          I build responsive, user-friendly web applications with clean UI and performance-focused design.
        </p>

        <p>
          I have developed real-world projects like
          <span className="highlight"> Spotify Clone</span>,
          <span className="highlight"> Netflix Clone</span>,
          Library Management System, and Employee Management System
          using React and Spring Boot.
        </p>

        <p>
          I enjoy solving problems, building scalable UI components, and continuously
          improving my skills in <span className="highlight">frontend development</span>,
          backend integration, and databases.
        </p>

        {/* TECH TAGS */}
        <div className="about-tags">
          <span>React</span>
          <span>JavaScript</span>
          <span>Java</span>
          <span>Spring Boot</span>
          <span>MySQL</span>
          <span>MongoDB</span>
        </div>

      </div>

    </section>
  );
}

export default About;