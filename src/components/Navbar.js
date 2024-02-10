// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">Tempus</Link>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/pricing">Pricing</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/features-demo">Features & Demo</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about-contact-us">About & Contact Us</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login-signup">Login | Signup</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
