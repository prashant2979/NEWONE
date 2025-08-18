import React from 'react';
import './Hero.css';
import profile from '../../../assets/profile.jpeg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Hero() {
  return (
    <div id="home" className="hero">
      <img src={profile} alt="profile" className="hero-img" />
      
      <h1 className="hero-title">
        <span className="highlight">I’m Prashant Choudhary</span>
      </h1>
      <p className="hero-subtitle">Frontend Developer based in Delhi</p>

      <div className="hero-action">
        <AnchorLink href="#contact" offset={50} className="hero-connect">
          Connect with me
        </AnchorLink>

        <a
          href="https://drive.google.com/file/d/137u7dxpbh7NK3FC5ZT2rNokLlqZZfCLG/view?usp=drive_link"
          className="hero-resume"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Resume
        </a>
      </div>
    </div>
  );
}

export default Hero;
