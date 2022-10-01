import React from "react";
import "./css/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-col">
        <span>Quick Access</span>
        <Link path="">Home</Link>
      </div>
      <div className="footer-col">
        <span>Categories</span>
        <Link path="">Bed Rooms</Link>
        <Link path="">Living Rooms</Link>
        <Link path="">kitchens</Link>
      </div>
      <div className="footer-col">
        <span>Contacts</span>
        <Link path="">Facebook</Link>
        <Link path="">twiter</Link>
        <Link path="">instagram</Link>
      </div>
      <div className="footer-col">
        <span>About Us</span>
        <Link path="">Bed Rooms</Link>
      </div>
    </div>
  );
};

export default Footer;
