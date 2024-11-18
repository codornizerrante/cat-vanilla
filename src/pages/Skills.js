import React from 'react';
import skillsData from '../services/skillsData.json';

const Skills = () => {
  return (
    <section id="skills">
      <h2>Habilidades</h2>
      <ul>
        {skillsData.map((skill, index) => (
          <li key={index}>
            <strong>{skill.name}</strong> - {skill.details}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;