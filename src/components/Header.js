import React from 'react';
import { Link } from 'react-router-dom';
import profileImage from '../images/profile.jpg';

const Header = () => {
  return (
    <header className="header">
      <h1><Link to="/">Exequiel's CV</Link></h1>
      <nav>
        <ul>
          <li><Link to="/about">Sobre mi</Link></li>
          <li><Link to="/experience">Experiencia</Link></li>
          <li><Link to="/skills">Habilidades</Link></li>
          <li><Link to="/education">Educacion</Link></li>
        </ul>
      </nav>
      <div className="photo-container">
        <img src={profileImage} alt="Exequiel" className="header-photo" />
      </div>
    </header>
  );
}

export default Header;