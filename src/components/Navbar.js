import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import tempusIcon from '../assets/imgs/TempusIcon.png'; // Ensure this path is correct

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <header className="header">
      <div className="container header-container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand logo-container">
            <img src={tempusIcon} alt="Logo Icon" className="logo" />
            {/* "Tempus" name that disappears on mobile */}
            <span className="navbar-text logo-name d-none d-lg-inline">Tempus</span>
          </Link>
          <button className="navbar-toggler" type="button" onClick={handleNavCollapse} aria-controls="navbarNavDropdown" aria-expanded={!isNavCollapsed} aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNavDropdown">
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
      </div>
    </header>
  );
};

export default Navbar;
