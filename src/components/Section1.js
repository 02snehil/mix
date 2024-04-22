import React, { useState } from "react";
import './Section1.css';
import gift_icon from './image/gift_icon.png';

function Section1() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="container1">
        {/* Logo and Navigation (Desktop View) */}
        <div className="logo1">
          <h4>Programs &emsp;Events &emsp; Upskills for free &emsp; Review &emsp; Job board</h4>
        </div>
        <div className="login">
          <div className="login-content">
            <img src={gift_icon} alt="gift_icon" className="gift_icon" />
            <button className="login_button"><b>Log in</b></button>
          </div>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button className="mobile-menu-toggle" onClick={toggleMenu}>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
      </div>

      {/* Mobile Menu (Hidden by default) */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <div className="mobile-menu-content">
          <button className="close-menu" onClick={toggleMenu}>
            Close
          </button>
          <ul>
            <li>Programs</li>
            <li>Events</li>
            <li>Upskills for free</li>
            <li>Review</li>
            <li>Job board</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Section1;
