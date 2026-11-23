
import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  Cloud,
  Server,
  Code2,
  Terminal,
  Database,
  Layers,
  Menu,
  X,
  GraduationCap,
  Rocket,
  GitBranch,
  ExternalLink,
  ChevronDown
} from "lucide-react";

import "./style.css";

const skills = [
  { name: "AWS Cloud", icon: Cloud, level: "Cloud Infrastructure" },
  { name: "Docker", icon: Layers, level: "Containerization" },
  { name: "Linux", icon: Terminal, level: "System Administration" },
  { name: "Git & GitHub", icon: Github, level: "Version Control" },
  { name: "GitHub Actions", icon: GitBranch, level: "CI/CD Automation" },
  { name: "EC2 & S3", icon: Server, level: "AWS Services" },
  { name: "ECS & ECR", icon: Database, level: "Container Deployment" },
  { name: "HTML & CSS", icon: Code2, level: "Web Fundamentals" }
];

const projects = [
  {
    number: "01",
    title: "AWS Static Website Hosting",
    category: "CLOUD COMPUTING",
    description:
      "Hosted a static website using Amazon S3 and CloudFront, exploring cloud storage and content delivery.",
    tags: ["AWS S3", "CloudFront", "IAM"],
    icon: Cloud
  },
  {
    number: "02",
    title: "Dockerized Web Application",
    category: "CONTAINERIZATION",
    description:
      "Built and tested a web application inside Docker containers, learning image creation and container management.",
    tags: ["Docker", "Node.js", "Linux"],
    icon: Layers
  },
  {
    number: "03",
    title: "AWS ECS & ECR Deployment",
    category: "CLOUD DEPLOYMENT",
    description:
      "Created a container deployment workflow using Amazon ECR, ECS clusters and task definitions.",
    tags: ["AWS ECS", "ECR", "Docker"],
    icon: Server
  },
  {
    number: "04",
    title: "Automated Portfolio Deployment",
    category: "DEVOPS / CI-CD",
    description:
      "Building an automated deployment pipeline with GitHub Actions and Vercel.",
    tags: ["GitHub", "GitHub Actions", "Vercel"],
    icon: Rocket
  }
];

const navigation = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Education",
  "Contact"
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({
      behavior: "smooth"
    });
    setMenuOpen(false);
  };

  return (
    <div className="portfolio">

      {/* NAVBAR */}
      <header className="navbar">
        <a href="#home" className="logo">
          A<span>.</span>S
        </a>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          {navigation.map((item) => (
            <a
              href={`#${item.toLowerCase()}`}
              key={item}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>

        <a href="mailto:abdullahshoukat536@gmail.com" className="nav-button">
          Let's Talk <ArrowUpRight size={16} />
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {/* HERO */}
      <section id="home" className="hero section">
        <div className="hero-content">

          <div className="availability">
            <span className="status-dot"></span>
            CLOUD & DEVOPS ENTHUSIAST
          </div>

          <p className="hero-small">HELLO, I'M</p>

          <h1>
            Abdullah
            <br />
            <span>Shoukat.</span>
          </h1>

          <h2>
            Building the Future with
            <span> Cloud & DevOps.</span>
          </h2>

          <p className="hero-description">
            BS Computer Science student passionate about AWS,
            cloud infrastructure, Linux, Docker and automation.
            Turning ideas into reliable digital solutions.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="primary-button">
              Explore My Work <ArrowUpRight size={18} />
            </a>

            <a href="#contact" className="secondary-button">
              Contact Me
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/Abdullah75637"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github />
            </a>

            <a
              href="https://www.linkedin.com/in/abdullah-shoukat-101237407/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </a>

            <a href="mailto:abdullahshoukat536@gmail.com" aria-label="Email">
              <Mail />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>

          <div className="profile-card">
            <div className="card-top">
              <span>PROFILE.EXE</span>
              <span className="live-indicator">● ONLINE</span>
            </div>

            <div className="avatar">
              AS<span>.</span>
            </div>

            <h3>Abdullah Shoukat</h3>
            <p>Cloud & DevOps Engineer</p>

            <div className="profile-divider"></div>

            <div className="terminal-line">
              <span>$</span> whoami
            </div>
            <div className="terminal-output">Cloud Engineer in progress_</div>

            <div className="terminal-line">
              <span>$</span> current_focus
            </div>
            <div className="terminal-output">
              AWS | Docker | CI/CD
            </div>
          </div>

          <div className="floating-icon icon-one"><Cloud /></div>
          <div className="floating-icon icon-two"><Terminal /></div>
          <div className="floating-icon icon-three"><GitBranch /></div>
        </div>

        <a href="#about" className="scroll-indicator">
          SCROLL TO EXPLORE <ChevronDown size={17} />
        </a>
      </section>

      {/* ABOUT */}
      <section id="about" className="section about-section">
        <div className="section-heading">
          <span className="section-label">01 / ABOUT ME</span>
          <h2>Turning Technology <span>Into Possibilities.</span></h2>
        </div>

        <div className="about-grid">
          <div className="about-main glass-card">
            <h3>Who Am I?</h3>
            <p>
              I'm Abdullah Shoukat, a BS Computer Science student
              at the University of Layyah. I'm focused on building
              my career in Cloud Computing and DevOps engineering.
            </p>
            <p>
              I enjoy working with AWS services, Linux environments,
              Docker containers, Git and automated deployment
              workflows. My goal is to build scalable, secure and
              reliable cloud-based solutions.
            </p>
            <p>
              I believe in continuous learning, practical experience
              and turning technical knowledge into real-world projects.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat-card glass-card">
              <Cloud size={27} />
              <h3>Cloud</h3>
              <p>AWS Infrastructure</p>
            </div>

            <div className="stat-card glass-card">
              <Layers size={27} />
              <h3>DevOps</h3>
              <p>Containers & CI/CD</p>
            </div>

            <div className="stat-card glass-card">
              <Terminal size={27} />
              <h3>Linux</h3>
              <p>Command Line</p>
            </div>

            <div className="stat-card glass-card">
              <Rocket size={27} />
              <h3>Growth</h3>
              <p>Continuous Learning</p>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section">
        <div className="section-heading">
          <span className="section-label">02 / TECHNICAL SKILLS</span>
          <h2>My Technical <span>Toolkit.</span></h2>
          <p>Technologies I'm learning and working with.</p>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div className="skill-card glass-card" key={skill.name}>
                <div className="skill-icon">
                  <Icon size={25} />
                </div>
                <h3>{skill.name}</h3>
                <p>{skill.level}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <div className="section-heading">
          <span className="section-label">03 / MY PROJECTS</span>
          <h2>Things I've <span>Built & Explored.</span></h2>
          <p>Practical cloud and DevOps learning projects.</p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <article className="project-card glass-card" key={project.number}>
                <div className="project-top">
                  <span>{project.number} / 04</span>
                  <Icon size={30} />
                </div>

                <span className="project-category">{project.category}</span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="project-bottom">
                  <span>LEARNING PROJECT</span>
                  <ArrowUpRight size={19} />
                </div>
              </article>
            );
          })}
        </div>

        <a
          href="https://github.com/Abdullah75637"
          target="_blank"
          rel="noreferrer"
          className="github-button"
        >
          <Github size={19} /> Explore GitHub <ExternalLink size={15} />
        </a>
      </section>

      {/* EDUCATION */}
      <section id="education" className="section">
        <div className="section-heading">
          <span className="section-label">04 / EDUCATION</span>
          <h2>My Learning <span>Journey.</span></h2>
        </div>

        <div className="education-card glass-card">
          <div className="education-icon">
            <GraduationCap size={34} />
          </div>

          <div>
            <span className="education-tag">UNDERGRADUATE</span>
            <h3>Bachelor of Science in Computer Science</h3>
            <h4>University of Layyah</h4>
            <p>Currently enrolled in 6th Semester</p>
            <span className="education-location">
              Layyah, Pakistan
            </span>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact-section">
        <div className="contact-box glass-card">
          <span className="section-label">05 / GET IN TOUCH</span>

          <h2>
            Let's Build Something
            <span> Extraordinary.</span>
          </h2>

          <p>
            Interested in cloud technology, DevOps, collaboration
            or professional opportunities? Let's connect.
          </p>

          <a
            href="mailto:abdullahshoukat536@gmail.com"
            className="primary-button"
          >
            <Mail size={18} /> Send Me an Email
          </a>

          <div className="contact-links">
            <a href="mailto:abdullahshoukat536@gmail.com">
              <Mail /> Email
            </a>

            <a
              href="https://github.com/Abdullah75637"
              target="_blank"
              rel="noreferrer"
            >
              <Github /> GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/abdullah-shoukat-101237407/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <a href="#home" className="logo">A<span>.</span>S</a>

        <p>
          © {new Date().getFullYear()} Abdullah Shoukat.
          Built with passion for technology.
        </p>

        <a href="#home" className="back-top">
          BACK TO TOP ↑
        </a>
      </footer>

    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
