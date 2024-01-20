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
    { skill: "SQL", level: "Intermediate" },
    { skill: "Figma", level: "Beginner" },
    { skill: "Azure", level: "Beginner" },
    { skill: "SQL", level: "Intermediate" },
    { skill: "Figma", level: "Beginner" },
    { skill: "Azure", level: "Beginner" },
    // Pozostałe umiejętności...
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
