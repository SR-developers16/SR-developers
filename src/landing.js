import React from 'react';
import './landingStyle.css';
import heroImage from './Images/heroImage.jpg';
import service1 from './Images/service1.png';
import service2 from './Images/service2.png';
import service3 from './Images/service3.png';
import service4 from './Images/service4.jpeg';
import service5 from './Images/service5.jpeg';
import service6 from './Images/service6.jpeg';
import card1 from './Images/card1.png';
import card2 from './Images/card2.png';
import card3 from './Images/card3.png';
import card4 from './Images/card4.png';
import card5 from './Images/card5.png';
import card6 from './Images/card6.png';
import logoImage from './Images/logo.png';
import fbImage from './Images/fb.png';
import instaImage from './Images/insta.png';
import gmailImage from './Images/gmail.png';

function Construct() {
    return (
        <div>
            <div className="navBar">
                <div className="navLeft">
                    Constructs
                </div>
                <div className="navRight">
                    <div className="content" id="navItem">
                        <a href="./landingPage.html" style={{ color: 'black', textDecoration: 'none' }}>Home</a>
                    </div>
                    <div className="content" id="navItem">
                        <a href="#service" style={{ color: 'black', textDecoration: 'none' }}>Service</a>
                    </div>
                    <div className="content" id="navItem">
                        Project
                    </div>
                    <div className="content" id="navItem">
                        <a href="./AboutUs.html" style={{ color: 'black', textDecoration: 'none' }}>About Us</a>
                    </div>
                    <div className="content">
                        <div className="contactButton">Contact Us</div>
                    </div>
                </div>
            </div>
            <div className="mainSection">
                <div className="leftMain">
                    <div className="headingMain">
                        <span>BUILDING</span>THE FUTURE,
                        TODAY.
                    </div>
                    <div className="subheadingMain">
                        Crafting your vision into reality: quality construction, exceptional Service, every step of the way.
                    </div>
                    <div className="content">
                        <div className="contactButton" id="contact">Contact Us</div>
                    </div>
                </div>
                <div className="rightMain">
                    <img src={heroImage} alt="Construction worker" />
                </div>
            </div>
            <div className="bestChoice">
                <div className="headingChoice">
                    Why We're the Best Choice
                </div>
                <div className="gridContainer">
                    <div className="card">
                        <div className="image">
                            <img src={card1} alt="Expert Craftsmanship" />
                        </div>
                        <div className="cardHead">
                            Expert Craftsmanship
                        </div>
                        <div className="cardSubHead">
                            Our expert team delivers top-notch quality with years of experience and precise attention to detail.
                        </div>
                    </div>
                    <div className="card">
                        <div className="image">
                            <img src={card2} alt="Custom Solutions" />
                        </div>
                        <div className="cardHead">
                            Custom Solutions
                        </div>
                        <div className="cardSubHead">
                            We customize our services to your needs, transforming your vision with personalized plans and innovative designs.
                        </div>
                    </div>
                    <div className="card">
                        <div className="image">
                            <img src={card3} alt="On-Time Delivery" />
                        </div>
                        <div className="cardHead">
                            On-Time Delivery
                        </div>
                        <div className="cardSubHead">
                            We prioritize deadlines, ensuring on-time project completion without sacrificing quality.
                        </div>
                    </div>
                    <div className="card">
                        <div className="image">
                            <img src={card4} alt="Transparent Talk" />
                        </div>
                        <div className="cardHead">
                            Transparent Talk
                        </div>
                        <div className="cardSubHead">
                            We maintain open communication from start to finish, keeping you informed every step of the way.
                        </div>
                    </div>
                    <div className="card">
                        <div className="image">
                            <img src={card5} alt="Sustainable Practices" />
                        </div>
                        <div className="cardHead">
                            Sustainable Practices
                        </div>
                        <div className="cardSubHead">
                            We use eco-friendly materials and sustainable methods for a beautiful, responsible future.
                        </div>
                    </div>
                    <div className="card">
                        <div className="image">
                            <img src={card6} alt="End-to-End Services" />
                        </div>
                        <div className="cardHead">
                            End-to-End Services
                        </div>
                        <div className="cardSubHead">
                            From planning to final inspection, we offer comprehensive services to handle every aspect of your construction project.
                        </div>
                    </div>
                </div>
                <div className="GetButton">
                    <div className="GetInTouch">Get In Touch</div>
                </div>
            </div>
            <div className="service" id="service">
                <div className="serviceHead">
                    <span>Services</span> we provide
                </div>
                <div className="serviceSub">
                    Comprehensive Solutions Covering Every Step of Your Construction Journey, From Concept to Completion
                </div>
                <div className="serviceGride">
                    <div className="serviceCard">
                        <div className="serviceImage">
                            <img className="serviceimg" src={service1} alt="Service 1" />
                        </div>
                        <div className="serviceContent">
                            <div className="contentHead">
                                Lorem
                            </div>
                            <div className="contentSub">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </div>
                        </div>
                    </div>
                    <div className="serviceCard">
                        <div className="serviceImage">
                            <img className="serviceimg" src={service2} alt="Service 2" />
                        </div>
                        <div className="serviceContent">
                            <div className="contentHead">
                                Lorem
                            </div>
                            <div className="contentSub">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </div>
                        </div>
                    </div>
                    <div className="serviceCard">
                        <div className="serviceImage">
                            <img className="serviceimg" src={service3} alt="Service 3" />
                        </div>
                        <div className="serviceContent">
                            <div className="contentHead">
                                Lorem
                            </div>
                            <div className="contentSub">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </div>
                        </div>
                    </div>
                    <div className="serviceCard">
                        <div className="serviceImage">
                            <img className="serviceimg" src={service4} alt="Service 4" />
                        </div>
                        <div className="serviceContent">
                            <div className="contentHead">
                                Lorem
                            </div>
                            <div className="contentSub">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </div>
                        </div>
                    </div>
                    <div className="serviceCard">
                        <div className="serviceImage">
                            <img className="serviceimg" src={service5}alt="Service 5" />
                        </div>
                        <div className="serviceContent">
                            <div className="contentHead">
                                Lorem
                            </div>
                            <div className="contentSub">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </div>
                        </div>
                    </div>
                    <div className="serviceCard">
                        <div className="serviceImage">
                            <img className="serviceimg" src={service6} alt="Service 6" />
                        </div>
                        <div className="serviceContent">
                            <div className="contentHead">
                                Lorem
                            </div>
                            <div className="contentSub">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="companyDetails">
                    <div className="companyLogo">
                        <img src={logoImage} alt="Company Logo" />
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
                        <a href="#service">• Service</a>
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
                            <img src={fbImage} className="socialLogoImage" alt="Facebook" />
                            <img src={instaImage} className="socialLogoImage" alt="Instagram" />
                            <img src={gmailImage} className="socialLogoImage" alt="Gmail" />
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
        </div>
    );
}

export default Construct;
