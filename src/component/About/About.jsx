import React from 'react';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/about_profile.svg';
import './About.css';  // Make sure the path is correct

function About() {
  return (
    <div id="about"className='about'>

      {/* Title */}
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>

      {/* Profile and Description */}
      <div className="about-section">

        <div className="about-left">
          <img src={profile_img} alt="Prashant Choudhary" />
        </div>

        <div className="about-right">
          <p>
            Frontend Developer passionate about building modern and responsive web apps with React and MERN stack.
          </p>
          <p>
            Skilled in creating user-friendly, scalable, and high-performance web applications.
          </p>

          {/* Skills */}
          <div className="about-skill">
            <div className="bour-skill">
              <p>React JS</p>
              <hr style={{ width: '80%' }} />
            </div>
            <div className="bour-skill">
              <p>JavaScript</p>
              <hr style={{ width: '85%' }} />
            </div>
            <div className="bour-skill">
              <p>DSA in C++</p>
              <hr style={{ width: '70%' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="about-achivement">
        <div className="about-achivement-item">
          <h1>1+</h1>
          <p>YEAR OF EXPERIENCE</p>
        </div>
        <div className="about-achivement-item">
          <h1>100+</h1>
          <p>DSA PROBLEM IN LEETCODE</p>
        </div>
        <div className="about-achivement-item">
          <h1>3+</h1>
          <p>PROJECT COMPLETED</p>
        </div>
      </div>

    </div>
  );
}

export default About;
