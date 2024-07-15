import React, { useState } from 'react';
import '../Style/navbar.css';
import { Link } from 'react-router-dom';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="navBar">
        <div className="navLeft">
          Constructs
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`navRight ${isOpen ? 'active' : ''}`}>
          <div className="content">
            <Link to='/' style={{ color: 'black', textDecoration: 'none' }}>Home</Link>
          </div>
          <div className="content">
            <Link to='/#service' style={{ color: 'black', textDecoration: 'none' }}>Service</Link>
          </div>
          <div className="content">
            <Link to='/Project' style={{ color: 'black', textDecoration: 'none' }}>Project</Link>
          </div>
          <div className="content">
            <Link to='/AboutUs' style={{ color: 'black', textDecoration: 'none' }}>About Us</Link>
          </div>
          <div className="content">
            <div className="contactButton">Contact Us</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
