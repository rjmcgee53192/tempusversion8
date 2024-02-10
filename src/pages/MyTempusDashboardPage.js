import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserNavbar from '../components/UserNavbar.js'; // Adjust the import path as necessary
import tempusIcon from '../assets/imgs/TempusIcon.png'; // Adjust the import path as necessary
import '../assets/css/MyTempusDashboardPage.css'; // Adjust the import path as necessary
// Hypothetical authService to manage authentication
// Ensure you have implemented this service and it includes an isAuthenticated method
import authService from '../services/authService.js';

const MyTempusDashboardPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is authenticated
    if (!authService.isAuthenticated()) {
      // If not authenticated, redirect to the login/signup page
      navigate('/login-signup');
    }
    // This useEffect should run only once on component mount
  }, [navigate]);

  return (
    <>
      <UserNavbar />
      <div id="main" className="container-fluid">
        <div className="header">
          <img src={tempusIcon} alt="Tempus Logo" className="header-image" />
        </div>
        <div className="row">
          <div className="col-10">
            {/* Placeholder for Calendar and other widgets */}
            <h2>Dashboard Content Here</h2>
            {/* Implement your Calendar and other widgets here */}
          </div>
        </div>
        <footer>
          <div className="col-12 col-md-10 offset-md-2">
            &copy; 2024 Tempus. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  );
};

export default MyTempusDashboardPage;
