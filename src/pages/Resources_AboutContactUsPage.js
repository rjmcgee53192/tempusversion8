import React from 'react';
import Navbar from '../components/Navbar'; // Ensure this path is correct
import '../assets/css/TempusStyles.css'; // Adjust the path as necessary

const ResourcesAboutContactUsPage = () => {
  return (
    <>
      <Navbar />
      <main className="container">
        <div className="row justify-content-md-center my-4">
          <div className="col-md-6">
            <h1 className="display-4 text-center">SWD Final Project - Tempus</h1>
            <h5 className="mt-3">Here, you will provide information about the collaboration and the project, detailing the objectives, challenges faced, and the solutions you developed.</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            {/* Mitchell Brusseau's Column */}
            <img src="/assets/img/MitchellBrusseau.jpg" alt="Mitchell Brusseau" className="img-fluid" />
            <h3>Mitchell Brusseau</h3>
            {/* Icons for GitHub, LinkedIn, Email omitted for brevity */}
            <ul>
              <li>HTML</li>
              <li>Walkme</li>
              <li>Node.js</li>
              <li>MongoDB</li>
            </ul>
            <p>I bring a diverse range of technical skills to the table, including expertise in HTML, CSS, JavaScript, and Node.js development. With a strong foundation in both front-end and back-end technologies, I excel in creating user-friendly interfaces and integrating powerful APIs. My proficiency extends to platforms like HubSpot, Zoho, Monday, and GoHighLevel, enabling effective customer relationship management, marketing automation, digital adoption, and software quality assurance & testing. Currently seeking a role within a tech/software company's systems implementation/on-boarding/digital adoption program, or development departments, I am driven to leverage my skills to create innovative solutions and contribute to the dynamic world of technology.</p>
          </div>
          <div className="col-md-6">
            {/* Partner's Column */}
            <img src="/assets/img/partner.jpg" alt="Partner Name" className="img-fluid" />
            <h3>Ryan McGee</h3>
            {/* Icons for GitHub, LinkedIn, Email omitted for brevity */}
            <ul>
              <li>JavaScript</li>
              <li>React</li>
              <li>Express</li>
              <li>Design Thinking</li>
            </ul>
            <p>A short paragraph detailing the partner's background and skills, highlighting how these contributed to the success of the Tempus project.</p>
          </div>
        </div>
      </main>

      <footer>
        <div className="container">
          <p>&copy; 2024 Tempus. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default ResourcesAboutContactUsPage;
