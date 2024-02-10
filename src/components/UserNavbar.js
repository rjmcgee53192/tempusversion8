import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './UserNavbar.css'; // Path to your CSS file for UserNavbar

const UserNavbar = () => {
  const navigate = useNavigate();

  // Function to handle logout
  const handleLogout = () => {
    // Perform logout logic here
    // For example: clear user token, update state, etc.

    // Redirect to LoginSignupPage after logout
    navigate('/login-signup');
  };

  // Function to toggle the navigation drawer
  const toggleNav = () => {
    const sidenav = document.getElementById("mySidenav");
    if (sidenav.style.width === "250px") {
      sidenav.style.width = "0";
    } else {
      sidenav.style.width = "250px";
    }
  };

  return (
    <div>
      <div className="sidenav" id="mySidenav">
        <a href="javascript:void(0)" className="closebtn" onClick={toggleNav}>&times;</a>
        <Link to="/my-tempus-dashboard">Dashboard</Link>
        <button onClick={handleLogout} className="btn btn-link nav-link">Logout</button>
        <Link to="/about-contact-us">About</Link>
      </div>

      <div className="header">
        <span className="menu-icon" onClick={toggleNav}>&#9776;</span>
        <img id="header-image" src="/TempusIMAGES/Tempus Logo.png" alt="Tempus Logo" />
      </div>
    </div>
  );
};

export default UserNavbar;
