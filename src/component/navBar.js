import React, { useState, useEffect } from 'react';
import '../Style/navbar.css';
import { Link, useLocation } from 'react-router-dom';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false); // Close menu on route change
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsOpen(false);
  };

  const scrollToContact = () => {
    if (location.pathname === '/') {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    } else {
      // Navigate to the page with contact section
      window.location.href = '/#contact';
    }
  };

  return (
    <>
      <div className="navBar">
        <div className="navLeft" onClick={scrollToTop}>
          <Link to='/' style={{ color: 'black', textDecoration: 'none' }}>Constructs</Link>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`navRight ${isOpen ? 'active' : ''}`}>
          <div className="content">
            <Link to='/' style={{ color: 'black', textDecoration: 'none' }} onClick={scrollToTop}>Home</Link>
          </div>
          <div className="content">
            <Link to='/#service' style={{ color: 'black', textDecoration: 'none' }} onClick={scrollToTop}>Service</Link>
          </div>
          <div className="content">
            <Link to='/Project' style={{ color: 'black', textDecoration: 'none' }} onClick={scrollToTop}>Project</Link>
          </div>
          <div className="content">
            <Link to='/AboutUs' style={{ color: 'black', textDecoration: 'none' }} onClick={scrollToTop}>About Us</Link>
          </div>
          <div className="content">
            <div className="contactButton" onClick={scrollToContact}>Contact Us</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
