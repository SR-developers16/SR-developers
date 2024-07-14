// App.js

import React from 'react';
import '../Style/footer.css'; 
import logo from '../Images/logo.png'
import fb from '../Images/fb.png';
import insta from '../Images/insta.png';
import gmail from '../Images/gmail.png';
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="companyDetails">
          <div className="companyLogo">
            <img src={logo} alt="" />
          </div>
          <div className="companyName">
            Constructs
          </div>
        </div>
        <div className="links">
          <div className="linkItems">
            <a href="landingPage.html">• Home</a>
          </div>
          <div className="linkItems">
            <a href="landingPage.html#service">• Service</a>
          </div>
          <div className="linkItems">
            <a href="AboutUs.html">• About Us</a>
          </div>
          <div className="linkItems">
            • Projects
          </div>
          <div className="linkItems">
            • Locate Us
          </div>
        </div>
        <div className="SocAdd">
          <div className="social">
            <div className="socialHead">
              Socials
            </div>
            <div className="socialLogo">
              <img src={fb} className="socialLogoImage" alt="Facebook" />
              <img src={insta}className="socialLogoImage" alt="Instagram" />
              <img src={gmail} className="socialLogoImage" alt="Gmail" />
            </div>
          </div>
          <div className="address">
            <div className="addHead">
              Address
            </div>
            <div className="addSub">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, ab?
            </div>
          </div>
        </div>
      </div>

      <div className="subFooter">
        <div className="rights">
          @2024 Constructs | All Rights Reserved
        </div>
        <div className="helpline">
          Helpline No: 211234558
        </div>
      </div>
    </>
  );
}

export default Footer;
