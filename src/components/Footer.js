import React from 'react';
import './Footer.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'; // Importing social icons

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Brand and Info Section */}
        <div className="footer-section">
          <h2 className="footer-logo">Eats & Treats</h2>
          <p className="footer-description">
            Savor every moment at Eats & Treats, where we offer an unforgettable dining experience with the finest dishes crafted just for you.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact Details Section */}
        <div className="footer-section">
          <h3 className="footer-heading">Contact Us</h3>
          <p>
            <strong>Address:</strong> 123 Foodie St, Culinary City, Foodland
          </p>
          <p>
            <strong>Email:</strong> eat&trait@eatsandtreats.com
          </p>
          <p>
            <strong>Phone:</strong> 9297781321
          </p>
        </div>

        {/* Opening Hours Section */}
        <div className="footer-section">
          <h3 className="footer-heading">Opening Hours</h3>
          <p>Monday - Friday: 11:00 AM - 10:00 PM</p>
          <p>Saturday - Sunday: 10:00 AM - 11:00 PM</p>
        </div>

        {/* Social Media Section */}
        <div className="footer-section footer-socials">
          <h3 className="footer-heading">Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Eats & Treats. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
