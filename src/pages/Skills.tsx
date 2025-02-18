import React from "react";
import Layout from "../components/Layout";

interface Skill {
  name: string;
  level: number;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "HTML/CSS", level: 85 },
  ];

  return (
    <Layout>
      <section className="skills-section">
        <h2>Skills</h2>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <span>{skill.name}</span>
              <div
                className="skill-level"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Skills;
