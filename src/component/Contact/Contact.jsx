import React, { useState } from 'react';
import './Contact.css';

// Import icons and pattern
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import location_icon from '../../assets/location_icon.svg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [result, setResult] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending....');

    const formPayload = new FormData();
    formPayload.append('name', formData.name);
    formPayload.append('email', formData.email);
    formPayload.append('message', formData.message);
    formPayload.append('access_key', '9acbe976-db35-4270-95da-61f8929af186'); // your actual access key

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formPayload,
      });

      const data = await response.json();

      if (data.success) {
        setResult('Form Submitted Successfully');
        setFormData({ name: '', email: '', message: '' });
        setShowPopup(true);

        // Hide popup after 3 seconds
        setTimeout(() => {
          setShowPopup(false);
          setResult('');
        }, 3000);
      } else {
        setResult(data.message || 'Something went wrong');
      }
    } catch (error) {
      setResult('Failed to send form. Please try again later.');
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-header">
        <h1>Get in Touch</h1>
        <img src={theme_pattern} alt="decorative pattern" className="pattern" />
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h2>Let's Talk</h2>
          <p>I'm available for new projects. Feel free to reach out anytime.</p>

          <div className="contact-info-items">
            <div className="info-item">
              <img src={mail_icon} alt="Email icon" />
              <a href="mailto:prashantchoudhary2979@gmail.com">prashantchoudhary2979@gmail.com</a>
            </div>
            <div className="info-item">
              <img src={call_icon} alt="Phone icon" />
              <a href="tel:8527810094">8527810094</a>
            </div>
            <div className="info-item">
              <img src={location_icon} alt="Location icon" />
              <span>Gurgaon, Haryana</span>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={onSubmit}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Your E-Mail</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Write Your Message Here</label>
          <textarea
            id="message"
            name="message"
            rows="7"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="btn-submit">Submit Now</button>
        </form>
      </div>

      {/* Popup for success message */}
      {showPopup && (
        <div className="form-result success" style={{
          position: 'fixed',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 9999,
          maxWidth: '400px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
        }}>
          {result}
        </div>
      )}
    </section>
  );
};

export default Contact;
