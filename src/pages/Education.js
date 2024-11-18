import React from 'react';
import educationData from '../services/educationData.json';

const Education = () => {
  return (
    <section id="education" >
      <h2>Educación</h2>
      <ul>
        {educationData.map((edu, index) => (
          <li key={index}>
            <strong>{edu.degree}</strong> - {edu.institution}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Education;