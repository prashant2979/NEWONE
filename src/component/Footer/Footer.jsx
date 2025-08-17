import React from 'react';
import './footer.css';
import footer_logo from '../../assets/footer_logo.svg';
import instagram_icon from '../../assets/instagram_icon.svg'
import linkden_icon from '../../assets/linkden_icon.svg'

function Footer() {
  return (
    <div className='footer'>
      {/* Top Section */}
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="Footer Logo" />
          <p>Building modern web experiences with React & JavaScript.</p>
        </div>

        <div className="footer-top-right">
          <a href="www.linkedin.com/in/prashant-choudhary-827547359" target="_blank" rel="noopener noreferrer">
            <div className="social-icon-wrapper linkedin">
              <img src={linkden_icon} alt="LinkedIn" className="social-icon" />
            </div>
          </a>
          <a href="https://www.instagram.com/prashant__2979?igsh=ZWY5ZmRkbWZiMmcx" target="_blank" rel="noopener noreferrer">
            <div className="social-icon-wrapper instagram">
              <img src={instagram_icon} alt="Instagram" className="social-icon" />
            </div>
          </a>
        </div>
      </div>

      <hr />

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2025 Prashant Choudhary. All rights reserved</p>
        <div className="footer-bottom-right">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p><a href="#contact" className="footer-link">Contact</a> {/* This scrolls to Contact section */}</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
