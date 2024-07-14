// App.js

import React from 'react';
import '../Style/aboutStyle.css'; 
import storyImage from '../Images/story.png'; 
import amit from '../Images/amit.jpeg'
import building from '../Images/bulding.png'
import clock from '../Images/clock.png'
import modi from '../Images/modi.jpeg'
import tick from '../Images/tick.png'
import team from '../Images/team.png'
import heart from '../Images/heart.png'
import money from '../Images/money.png'
import Footer from '../component/footer';
import NavBar from '../component/navBar';

function AboutUs() {
  return (
    <>
      <NavBar />

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

      <Footer/>
    </>
  );
}

export default AboutUs;
