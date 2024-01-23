import React from 'react';
import ReactDOM from 'react-dom';

function SkillCard({ skill, level }) {
  // Przykładowa funkcja mapująca opis poziomu na liczbę wypełnionych kółek
  const levelToCircles = {
    "Beginner": 1,
    "Intermediate": 2,
    "Advanced": 3,
    "Expert": 4
};


  // Utwórz tablicę z wypełnionymi i pustymi kółkami
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

function SkillsSection() {
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


ReactDOM.render(<SkillsSection />, document.getElementById('skills-root'));

function SocialLink({ url, iconName }) {
  // Dodaj ścieżkę do ikon SVG. Zakładam, że są one w publicznym folderze `icons`.
  const iconSrc = `./icons/${iconName}.svg`;

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="button">
      <img src={iconSrc} alt={iconName} className="social-icon" />
    </a>
  );
}


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

ReactDOM.render(<SocialLinksSection />, document.getElementById('links'));

function DownloadCVSection() {
  return (
      <div className="download-cv-section">
          <h2>Download my CV</h2>
          <a href="/cv/Paweł-Kasprzak-CV-en.pdf" download="Paweł-Kasprzak-CV-en.pdf">English Version</a>
          <a href="/cv/Paweł-Kasprzak-CV-en.pdf" download="Paweł-Kasprzak-CV-pl.pdf">Polish Version</a>
      </div>
  );
}

ReactDOM.render(<DownloadCVSection />, document.getElementById('download-cv'));
