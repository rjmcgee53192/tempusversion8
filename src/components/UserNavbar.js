import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/UserNavbar.css'; // Verify this path is correct

const UserNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Implement your logout logic here. This might involve clearing localStorage, cookies, or calling a logout API

    // Redirect to the login/signup page
    navigate('/login-signup');
  };

  // JavaScript for opening and closing the sidebar
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
        <Link to="#" onClick={handleLogout}>Logout</Link> {/* Changed to Link for consistency */}
        <Link to="/about-contact-us">About</Link>
      </div>

      <div className="header">
        <span className="menu-icon" onClick={openNav}>&#9776;</span>
        {/* Assuming TempusLogo.png is correctly located and accessible at the given path */}
        <img id="header-image" src="../assets/imgs/TempusIcon.png" alt="Tempus Logo" style={{cursor: 'pointer'}} onClick={() => navigate('/dashboard')} />
      </div>
    </div>
  );
};

export default UserNavbar;
