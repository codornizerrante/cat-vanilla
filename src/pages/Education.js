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
            <br /><em>{edu.dates}</em>
            <span style={{ marginBottom: '20px', display: 'block' }}>{edu.details}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Education;