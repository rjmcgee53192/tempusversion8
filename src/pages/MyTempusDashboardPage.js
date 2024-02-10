import React from 'react';
import UserNavbar from './UserNavbar'; // Assuming UserNavbar is in the same directory
import './MyTempusDashboardPage.css'; // Path to your new CSS file for this page

const MyTempusDashboardPage = () => {
  return (
    <>
      <UserNavbar />
      <div id="main" className="container-fluid">
        {/* Main Content */}
        <div className="row">
          <div className="col-10">
            {/* Calendar Widgets */}
            {/* ... */}
          </div>
        </div>
        {/* Footer */}
        <div className="row">
          <div className="col-12 col-md-10 offset-md-2">
            <footer>
              &copy; 2024 Tempus. All rights reserved.
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyTempusDashboardPage;
