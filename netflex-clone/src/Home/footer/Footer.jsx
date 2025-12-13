import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaTelegramPlane,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-contact">
       phone Call <span>+251-946-215-450</span>
      </p>

      {/* 🔹 Social Icons */}
      <div className="footer-socials">
        <FaFacebookF />
        <FaTelegramPlane />
        <FaInstagram />
        <FaWhatsapp />
      </div>

      <div className="footer-links">
        <ul>
          <li>FAQ</li>
          <li>Investor Relations</li>
          <li>Privacy</li>
          <li>Speed Test</li>
        </ul>

        <ul>
          <li>Help Center</li>
          <li>Jobs</li>
          <li>Cookie Preferences</li>
          <li>Legal Notices</li>
        </ul>

        <ul>
          <li>Account</li>
          <li>Ways to Watch</li>
          <li>Corporate Information</li>
          <li>Only on Netflix</li>
        </ul>

        <ul>
          <li>Media Center</li>
          <li>Terms of Use</li>
          <li>Contact Us</li>
        </ul>
      </div>

      <div className="footer-language">
        <select>
          <option>🌐 English</option>
          <option>አማርኛ</option>
          <option>tigragna</option>
          <option>oromigna</option>
          <option>afarigna</option>
          <option>guragigna</option>
        </select>
      </div>

      <p className="footer-country">Netflix Ethiopia</p>
    </footer>
  );
};

export default Footer;
