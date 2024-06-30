import React, { useState } from "react";
import Logo from "../assets/logo.png";
import Menu from "../assets/hamburger-menu.png";
import "../src/css/navbar.css";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className="ham--logo">
        <img src={Menu} className="nav-hamburger" onClick={toggleMenu} />
        <img src={Logo} alt="girl who likes to code" className="logo--small" />
      </div>
      <nav className={`nav--bar ${isOpen ? "open" : ""}`}>
        <div className="nav--image">
          <img src={Logo} alt="girl who likes to code" />
        </div>
        <div className="nav--content">
          <p>About</p>
          <p>Contact</p>
          <p>Resume</p>
        </div>
        <button className="nav-close-btn" onClick={closeMenu}>
          X
        </button>
      </nav>
    </div>
  );
}
