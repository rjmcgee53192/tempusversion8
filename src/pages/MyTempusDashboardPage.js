import React from 'react';
import UserNavbar from '../components/UserNavbar'; // Adjust the import path as necessary
import tempusIcon from '../assets/imgs/TempusIcon.png'; // Adjust the import path as necessary
import '../assets/css/MyTempusDashboardPage.css'; // Adjust the import path as necessary

const MyTempusDashboardPage = () => {
  return (
    <>
      <UserNavbar />
      <div id="main" className="container-fluid">
        <div className="header">
          <img id="header-image" src={tempusIcon} alt="Tempus Logo" />
        </div>
        {/* The rest of your main content */}
        <div className="row">
          <div className="col-10">
            {/* Calendar and other widgets */}
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
