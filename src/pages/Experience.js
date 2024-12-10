import React from 'react';
import experienceData from '../services/experienceData.json';

const Experience = () => {
  return (
    <section id="experience">
      <h2>Experiencia</h2>
      <ul>
        {experienceData.map((job, index) => (
          <li key={index}>
            <strong>{job.title}</strong> - {job.company}
            <br /><em>{job.dates}</em>
            <span style={{ marginBottom: '20px', display: 'block' }}>{job.details}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Experience;