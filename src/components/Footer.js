import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="subscribe-section">
        <h2>Subscribe to our Newsletter</h2>
        <p>Get the latest updates and news about AI Genius Lab</p>
        <form className="subscribe-form" action="/subscribe" method="post">
          <input type="email" name="email" placeholder="Your Email Address" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <div className="footer-links">
        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="/contribution">Contribution</a></li>
        </ul>
      </div>
      <div className="company-section">
        <p>&copy; 2023 AI Genius Lab. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
