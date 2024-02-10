import React from 'react';
import Navbar from '../components/Navbar'; // Ensure this path is correct
import '../assets/css/TempusStyles.css'; // Adjust the path as necessary
import mitchellBrusseauImage from '../assets/imgs/MitchellBrusseau.jpg'; // Import Mitchell Brusseau's image
// Placeholder import for the project partner's image - replace 'partnerImage.jpg' with actual filename
import partnerImage from '../assets/imgs/partnerImage.jpg';

const ResourcesAboutContactUsPage = () => {
  return (
    <>
      <Navbar />
      <main className="container">
        <div className="row justify-content-md-center my-4">
          <div className="col-md-6">
            <h1 className="display-4 text-center">SWD Final Project - Tempus</h1>
            <h5 className="mt-3">The SWD Final Project which we named the application Tempus was a collaboration between Ryan McGee and Mitchell Brusseau. The goal or rather the objective was to build a calendar application that also had booking/scheduling capabilities. We faced many challenges with opensource technologies and working through obsitcales with our code but ultimately we endevoured learning from the failure in order to mover forward. A tour of our code and application is found on the Features & Demo Page. </h5>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            {/* Mitchell Brusseau's Column */}
            <img src={mitchellBrusseauImage} alt="Mitchell Brusseau" className="img-fluid" />
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
            <img src={partnerImage} alt="Partner Name" className="img-fluid" /> {/* Update alt text and src as necessary */}
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
