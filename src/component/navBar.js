// App.js

import React from 'react';
import '../Style/navbar.css' ;


function NavBar() {
  return (
    <>
      <div className="navBar">
        <div className="navLeft">
          Constructs
        </div>
        <div className="navRight">
          <div className="content">
            <a href="./landingPage.html" style={{ color: 'black', textDecoration: 'none' }}>Home</a>
          </div>
          <div className="content">
            <a href="landingPage.html#service" style={{ color: 'black', textDecoration: 'none' }}>Service</a>
          </div>
          <div className="content">
            Project
          </div>
          <div className="content">
            <a href="./AboutUs.html" style={{ color: 'black', textDecoration: 'none' }}>About Us</a>
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
