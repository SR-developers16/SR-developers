// App.js

import React from 'react';
import '../Style/navbar.css' ;
import { Link } from 'react-router-dom';



function NavBar() {
  return (
    <>
      <div className="navBar">
        <div className="navLeft">
          Constructs
        </div>
        <div className="navRight">
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
