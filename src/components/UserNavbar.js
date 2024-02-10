import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/UserNavbar.css'; // Ensure you have the correct path to your CSS file

const UserNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add your logout logic here

    // Redirect to the login page
    navigate('/login-signup');
  };

  const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
  };

  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  };

  return (
    <div>
      <div className="sidenav" id="mySidenav">
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
        <Link to="/dashboard">Dashboard</Link>
        <a href="#" onClick={handleLogout}>Logout</a>
        <Link to="/about-contact-us">About</Link>
      </div>

      <div className="header">
        <span className="menu-icon" onClick={openNav}>&#9776;</span>
        <Link to="/dashboard">
          <img id="header-image" src="/TempusIMAGES/TempusLogo.png" alt="Tempus Logo" />
        </Link>
      </div>
    </div>
  );
};

export default UserNavbar;
