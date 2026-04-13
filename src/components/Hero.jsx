import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import image5 from "../assets/images/image5.jpeg";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        {/* LEFT SIDE */}
        <div className="hero-content">

          <h1>
            Hi, I'm <span>Dineshprabu</span>
          </h1>

          <h2 className="typewriter-text">
            <Typewriter
              words={[
                "Frontend Developer",
                "React Developer",
                "UI Designer",
                "Java Full Stack Developer"
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1200}
            />
          </h2>

          <p>
            I build modern, responsive and high-performance web applications using React,
            JavaScript and Spring Boot.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary">
              View Projects
            </a>

            <a href="/resume.pdf" download className="btn secondary">
              Download Resume
            </a>
          </div>

          <div className="social-icons">
            <a href="https://github.com/dineshprabu913" target="_blank">
              <FaGithub size={25} />
            </a>

            <a href="https://www.linkedin.com/in/dineshprabu-r911" target="_blank">
              <FaLinkedin size={25} />
            </a>
          </div>

        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="hero-image">
          <img src={image5} alt="Dineshprabu" />
        </div>

      </div>
    </section>
  );
}

export default Hero;