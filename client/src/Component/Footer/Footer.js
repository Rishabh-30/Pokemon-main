import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
  <div className="footer-container">
    <div className="footer-section">
      <h3 translate>About Us</h3>
      <p translate>
        We are a logistics company providing top-notch services to meet all
        your needs.
      </p>
    </div>
    <div className="footer-section">
      <h3 translate>Contact Us</h3>
      <p translate>Email: dispatchdynamomovers@gmail.com</p>
    </div>
    <div className="footer-section">
      <h3>Quick Links</h3>
      <ul>
        <li>
          <a routerlink="/services" translate>
            Services
          </a>
        </li>
        <li>
          <a routerlink="/pricing" translate>
            Pricing
          </a>
        </li>
        <li>
          <a routerlink="/about" translate>
            About Us
          </a>
        </li>
        <li>
          <a routerlink="/contact" translate>
            Contact Us
          </a>
        </li>
      </ul>
    </div>
    <div className="footer-section">
      <h3 translate>Follow Us</h3>
      <div className="social-icons">
        <a href="https://www.facebook.com/">
          <i className="fa-brands fa-square-facebook" />
        </a>
        <a href="https://www.instagram.com/">
          <i className="fa-brands fa-instagram" />
        </a>
        <a href="https://twitter.com/">
          <i className="fa-brands fa-square-twitter" />
        </a>
      </div>
    </div>
  </div>
  <p className="copyright" translate>
    Copyright © Logistics Company 2023
  </p>
</footer>

  );
}

export default Footer;
