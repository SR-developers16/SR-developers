import React from 'react';
import '../Style/footer.css'; 
import { Link } from 'react-router-dom';
import logo from '../Images/companyLogo.png';
import map from '../Images/googleMap.png';
import whatsapp from '../Images/whatsapp.png';
import gmail from '../Images/gmail.png';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <div className="footer">
        <div className="companyDetails">
          <div className="companyLogo">
            <img src={logo} alt="Company Logo" />
          </div>
          {/* <div className="companyName">
            Constructs
          </div> */}
        </div>
        <div className="links">
          <div className="linkItems">
            <Link to="/" onClick={scrollToTop}>• Home</Link>
          </div>
          <div className="linkItems">
            <Link to="/#service" onClick={scrollToTop}>• Service</Link>
          </div>
          <div className="linkItems">
            <Link to="/AboutUs" onClick={scrollToTop}>• About Us</Link>
          </div>
          <div className="linkItems">
            <Link to="/Project" onClick={scrollToTop}>• Projects</Link>
          </div>
          <div className="linkItems">
            <a href='https://www.google.com/maps/place/SR+DEVELOPERS/@28.8164362,77.1644983,17z/data=!3m1!4b1!4m6!3m5!1s0x390dab28d1bb0d01:0x89de2d03cc1b0be5!8m2!3d28.8164362!4d77.1644983!16s%2Fg%2F11fk9sztfs?hl=en-IN&entry=ttu' target="_blank" rel="noopener noreferrer">
              • Locate Us
            </a>
          </div>
        </div>
        <div className="SocAdd">
          <div className="social">
            <div className="socialHead">
              Socials
            </div>
            <div className="socialLogo">
              <a href='https://www.google.com/maps/place/SR+DEVELOPERS/@28.8164362,77.1644983,17z/data=!3m1!4b1!4m6!3m5!1s0x390dab28d1bb0d01:0x89de2d03cc1b0be5!8m2!3d28.8164362!4d77.1644983!16s%2Fg%2F11fk9sztfs?hl=en-IN&entry=ttu' target="_blank" rel="noopener noreferrer">
                <img src={map} className="socialLogoImage" alt="Google Maps" />
              </a>
              <a href="https://api.whatsapp.com/send?phone=9810703050" target="_blank" rel="noopener noreferrer">
                <img src={whatsapp} className="socialLogoImage" alt="WhatsApp" />
              </a>
              <a href="mailto:your-prerna.manju2002@gmail.com">
                <img src={gmail} className="socialLogoImage" alt="Gmail" />
              </a>
            </div>
          </div>
          <div className="address">
            <div className="addHead">
              Address
            </div>
            <div className="addSub">
              Khasra No.58/29 Main Palla Bakhtawarpur Road, Delhi-110036
            </div>
          </div>
        </div>
      </div>

      <div className="subFooter">
        <div className="rights">
          @2024 Constructs | All Rights Reserved
        </div>
        <div className="helpline">
          Contact No: 211234558
        </div>
      </div>
    </>
  );
}

export default Footer;
