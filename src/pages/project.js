import React from 'react';
import NavBar from '../component/navBar';
import '../Style/project.css';
import backgroundImage from '../Images/projectImage.jpg'; // Import your background image

export default function Project() {
  return (
    <>
      <NavBar />
      <div className='projectBg' style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className='info'>
          <h1>Coming Soon</h1>
          <div className='progress'>
            <div className='progressData'>
              <div className='percentage'>70%</div>
            </div>
          </div>
          <p className='projectSub'>Building Dreams, Brick by Brick, with Quality Craftsmanship and Dedication</p>
        </div>
      </div>
    </>
  );
}
