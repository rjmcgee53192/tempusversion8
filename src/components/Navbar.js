import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Import your logo images if they are within the src directory
import tempusIcon from '../assets/imgs/TempusIcon.png';
import tempusName from '../assets/imgs/TempusName.png';

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="navbar-brand logo-container">
          <img src={tempusIcon} alt="Logo Icon" className="logo" />
          <img src={tempusName} alt="Logo Name" className="logo-name" />
        </Link>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button className="navbar-toggler" type="button" onClick={handleNavCollapse} aria-controls="navbarNavDropdown" aria-expanded={!isNavCollapsed} aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNavDropdown">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/features-demo">Features & Demo</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pricing">Pricing</Link>
              </li>
              {/* React doesn't directly support Bootstrap's dropdown functionality out of the box. For dropdowns, consider using React Bootstrap or managing dropdown state with React. */}
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
