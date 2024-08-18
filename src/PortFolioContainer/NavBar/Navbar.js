import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">Chandra Sekhar</div>
      <div className="hamburger" onClick={toggleMenu}>
        &#9776;
      </div>
      <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/" onClick={toggleMenu}>Home</Link>
        <Link to="/about" onClick={toggleMenu}>About</Link>
        <div 
          className="dropdown" 
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/projects" onClick={toggleMenu}>Projects</Link>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <Link to="/project1" onClick={toggleMenu}>Project 1</Link>
              <Link to="/project2" onClick={toggleMenu}>Project 2</Link>
              <Link to="/project3" onClick={toggleMenu}>Project 3</Link>
            </div>
          )}
        </div>
        <Link to="/contact" onClick={toggleMenu}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
