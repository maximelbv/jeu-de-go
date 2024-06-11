import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/">Logo</Link>
        </div>
        <button className="navbar-toggle" onClick={toggleMenu}>
          <span className="navbar-toggle-icon">&#9776;</span>
        </button>
        <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/games">Jeu</Link></li>
          <li><Link to="/tsumego">Tsumego</Link></li>
        </ul>
      </div>
    </nav>
  );
}
