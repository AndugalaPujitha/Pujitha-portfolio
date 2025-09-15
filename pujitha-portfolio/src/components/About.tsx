import '../assets/styles/About.scss';

function About() {
  return (
    <div id="About" className="about-container">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          Hi, I’m <span className="highlight">Andugala Pujitha</span>, an aspiring 
          <strong> Full Stack Engineer</strong> passionate about building modern, 
          responsive, and user-friendly web applications.
        </p>

        <p>
          I enjoy working with <strong>React, TypeScript, Node.js, and databases</strong>. 
          My goal is to create scalable and impactful digital solutions while continuously 
          learning new technologies.
        </p>

        <p>
          Beyond coding, I love exploring UI/UX design trends, problem-solving in 
          <strong> Data Structures & Algorithms</strong>, and contributing to open-source projects.
        </p>
      </div>
    </div>
  );
}

export default About;
