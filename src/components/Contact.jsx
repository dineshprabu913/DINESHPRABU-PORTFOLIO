import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {

  const copyEmail = () => {
    navigator.clipboard.writeText("dineshprabu911@gmail.com");
    alert("Email copied!");
  };

  return (
    <section id="contact" className="contact-section">

      <h2 className="section-title">📬 Contact Me</h2>

      <div className="contact-card">

        <div className="contact-item">
          <FaEnvelope className="icon" />
          <p>📧 dineshprabu911@gmail.com</p>
          <button onClick={copyEmail}>Copy</button>
        </div>

        <div className="contact-links">

          <a href="https://github.com/dineshprabu913" target="_blank">
            <FaGithub /> GitHub
          </a>

          <a href="https://www.linkedin.com/in/dineshprabu-r911" target="_blank">
            <FaLinkedin /> LinkedIn
          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;