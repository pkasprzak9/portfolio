import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const closeNav = () => {
    setIsNavOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest('.nav-links') && !event.target.closest('.hamburger')) {
        closeNav();
      }
    };

    if (isNavOpen) {
      document.addEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isNavOpen]);

  return (
    <nav>
      <div className="hamburger" onClick={() => setIsNavOpen(!isNavOpen)}>
        <img src="/icons/bars-solid.svg" alt="Menu" />
      </div>
      <div className={isNavOpen ? "nav-links open" : "nav-links"}>
        <a href="#about" onClick={closeNav}>About Me</a>
        <a href="#skills-root" onClick={closeNav}>My Skills</a>
        <a href="#download-cv" onClick={closeNav}>Download My CV</a>
        <a href="#contact" onClick={closeNav}>Contact Me</a>
        <a href="#links" onClick={closeNav}>My Social Links</a>
      </div>
    </nav>
  );
}

const root = createRoot(document.getElementById('navbar-root'));
root.render(<Navbar />);


// SkillCard component for representing individual skills
function SkillCard({ skill, level }) {
  // Mapping skill levels to the number of filled circles
  const levelToCircles = {
    "Beginner": 1,
    "Intermediate": 2,
    "Advanced": 3,
    "Expert": 4
  };

  // Creating an array of circles, filled based on the skill level
  const circles = Array.from({ length: 4 }, (_, index) => index < levelToCircles[level]);

  return (
      <div className="skill-card">
          <h3>{skill}</h3>
          <div className="skill-level">
              {circles.map((filled, index) => (
                  <span key={index} className={`circle ${filled ? "filled" : ""}`}></span>
              ))}
          </div>
      </div>
  );
}

// SkillsSection component to display a list of skills
function SkillsSection() {
  // Array of skills with their respective levels
  const skills = [
    { skill: "Visual Studio Code", level: "Expert" },
    { skill: "AI prompting", level: "Expert" },
    { skill: "Git", level: "Advanced" },
    { skill: "Command Line", level: "Advanced" },
    { skill: "Microsoft Office", level: "Advanced" },
    { skill: "HTML", level: "Advanced" },
    { skill: "CSS", level: "Advanced" },
    { skill: "JavaScript", level: "Intermediate" },
    { skill: "SQL", level: "Intermediate" },
    { skill: "Ruby", level: "Intermediate" },
    { skill: "Python", level: "Intermediate" },
    { skill: "Java", level: "Intermediate" },
    { skill: "Data analyze", level: "Intermediate" },
    { skill: "Networking", level: "Intermediate" },
    { skill: "React", level: "Intermediate" },
    { skill: "Node", level: "Intermediate" },
    { skill: "RSpec", level: "Intermediate" },
    { skill: "JIRA", level: "Intermediate" },
    { skill: "Bootstrap", level: "Beginner" },
    { skill: "Webpack", level: "Beginner" },
    { skill: "PyTorch", level: "Beginner" },
    { skill: "Docker", level: "Beginner" },
    { skill: "C++", level: "Beginner" },
    { skill: "Cybersecurity Fundamentals", level: "Beginner" },
    { skill: "Microsoft Azure", level: "Beginner" },
    { skill: "Postman", level: "Beginner" },
  ];

  return (
    <div>
        <h2>My Skills</h2>
        <div className="skills-container">
            {skills.map((skillObj, index) => (
                <SkillCard key={index} skill={skillObj.skill} level={skillObj.level} />
            ))}
        </div>
    </div>
  );
}

// Rendering the SkillsSection component
const skillsRoot = createRoot(document.getElementById('skills-root'));
skillsRoot.render(<SkillsSection />);

// SocialLink component for individual social media links
function SocialLink({ url, iconName }) {
  const iconSrc = `./icons/${iconName}.svg`;

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="button">
      <img src={iconSrc} alt={iconName} className="social-icon" />
    </a>
  );
}

// SocialLinksSection component to display social media links
function SocialLinksSection() {
  const socialLinks = [
    { iconName: 'linkedin', url: 'https://www.linkedin.com/in/paweł-kasprzak-097496278/' },
    { iconName: 'github', url: 'https://github.com/pkasprzak9' },
    { iconName: 'instagram', url: 'https://www.instagram.com/p_kasprzak/' },
    { iconName: 'facebook', url: 'https://www.facebook.com/pawel.kasprzak12345/' }
  ];

  return (
    <div>
      <h2>My Links</h2>
      <div className="social-links-container">
        {socialLinks.map((link, index) => (
          <SocialLink key={index} iconName={link.iconName} url={link.url} />
        ))}
      </div>
    </div>
  );
}

// Rendering the SocialLinksSection component
const linksRoot = createRoot(document.getElementById('links'));
linksRoot.render(<SocialLinksSection />);

// DownloadCVSection component for downloading CV in different languages
function DownloadCVSection() {
  return (
      <div className="download-cv-section">
          <h2>Download My CV</h2>
          <a href="/cv/Paweł-Kasprzak-CV-en.pdf" download="Paweł-Kasprzak-CV-en.pdf">English Version</a>
          <a href="/cv/Paweł-Kasprzak-CV-pl.pdf" download="Paweł-Kasprzak-CV-pl.pdf">Polish Version</a>
      </div>
  );
}

// Rendering the DownloadCVSection component
const downloadCVRoot = createRoot(document.getElementById('download-cv'));
downloadCVRoot.render(<DownloadCVSection />);
