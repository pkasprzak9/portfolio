import React from 'react';
import ReactDOM from 'react-dom';

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
    { skill: "Ruby", level: "Advanced" },
    { skill: "RSpec", level: "Advanced" },
    { skill: "Python", level: "Advanced" },
    { skill: "HTML", level: "Advanced" },
    { skill: "CSS", level: "Advanced" },
    { skill: "JavaScript", level: "Intermediate" },
    { skill: "SQL", level: "Intermediate" },
    { skill: "Java", level: "Intermediate" },
    { skill: "Data analyze", level: "Intermediate" },
    { skill: "Networking", level: "Intermediate" },
    { skill: "React", level: "Beginner" },
    { skill: "Node", level: "Beginner" },
    { skill: "Bootstrap", level: "Beginner" },
    { skill: "AOS", level: "Beginner" },
    { skill: "C++", level: "Beginner" },
    { skill: "Microsoft Azure", level: "Beginner" },
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
ReactDOM.render(<SkillsSection />, document.getElementById('skills-root'));

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
ReactDOM.render(<SocialLinksSection />, document.getElementById('links'));

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
ReactDOM.render(<DownloadCVSection />, document.getElementById('download-cv'));
