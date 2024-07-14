// App.js

import React from 'react';
import './aboutStyle.css'; 
import storyImage from './Images/story.png'; 
import amit from './Images/amit.jpeg'
import building from './Images/bulding.png'
import clock from './Images/clock.png'
import modi from './Images/modi.jpeg'
import logo from './Images/logo.png'
import tick from './Images/tick.png'
import team from './Images/team.png'

import heart from './Images/heart.png'
import money from './Images/money.png'
import fb from './Images/fb.png';
import insta from './Images/insta.png';
import gmail from './Images/gmail.png';
function AboutUs() {
  return (
    <>
      <div className="navBar">
        <div className="navLeft">
          Constructss
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

      <div className="storyImage">
        <img src={storyImage} alt="Story Image" />
        <div className="story">
          <div className="storyHead">
            Our Story
          </div>
          <div className="storySub">
            We are a full-service general contractor, specializing in high-end commercial construction. Our team of highly skilled professionals is dedicated to delivering exceptional quality and service. We take pride in our work and strive to exceed our clients' expectations on every project.
          </div>
        </div>
      </div>

      <div className="ourValues">
        <div className="valueHead">
          Our Values
        </div>
        <div className="valueGrid">
          <div className="valueGridItem">
            <div className="itemlogo">
              <img src={heart} alt="" />
            </div>
            <div className="itemHead">
              Quality
            </div>
            <div className="itemSub">
              We are committed to excellence in every aspect of our work.
            </div>
          </div>
          <div class="valueGridItem">
                    <div className="itemlogo">
                        <img src={tick} alt=""/>

                    </div>
                    <div className="itemHead">
                        Integrity

                    </div>
                    <div className="itemSub">
                        We are honest, ethical, and respectful in all our dealings.

                    </div>
                </div>
                <div className="valueGridItem">
                    <div className="itemlogo">
                        <img src={team} alt=""/>

                    </div>
                    <div className="itemHead">
                        Teamwork

                    </div>
                    <div className="itemSub">
                        We collaborate with clients, designers, and subcontractors to achieve the best results.

                    </div>
                </div>
                <div className="valueGridItem">
                    <div className="itemlogo">
                        <img src={building} alt=""/>

                    </div>
                    <div className="itemHead">
                        Craftmanship

                    </div>
                    <div className="itemSub">
                        We take pride in our work and deliver superior craftsmanship.

                    </div>
                </div>
                <div className="valueGridItem">
                    <div className="itemlogo">
                        <img src={clock} alt=""/>

                    </div>
                    <div className="itemHead">
                        Efficiency

                    </div>
                    <div className="itemSub">
                        We are organized, resourceful, and focused on delivering projects on time and on budget.

                    </div>
                </div>
                <div className="valueGridItem">
                    <div className="itemlogo">
                        <img src={money} alt=""/>

                    </div>
                    <div className="itemHead">
                        Value

                    </div>
                    <div className="itemSub">
                        We provide cost-effective solutions without compromising quality or safety.

                    </div>
                </div>
          
        </div>
      </div>

      <div className="leaders">
        <div className="leaderHead">
          Leadership Team
        </div>
        <div className="leaderContainer">
          <div className="leaderImage">
            <img src={modi} alt="" />
          </div>
          <div className="description">
            <div className="name">
              Narender Modi
            </div>
            <div className="position">
              Prime Minister
            </div>
          </div>
        </div>
        <div className="leaderContainer">
          <div className="leaderImage">
            <img src={amit} alt="" />
          </div>
          <div className="description">
            <div className="name">
              Amit shah
            </div>
            <div className="position">
              Home Minister
            </div>
          </div>
        </div>
        
        
      </div>

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

export default AboutUs;
