import React from 'react';
import Navbar from '../components/Navbar'; // Ensure this path is correct if Navbar is in the components directory
import '../assets/css/TempusStyles.css'; // Adjust this path if necessary

const FeaturesDemoPage = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Video Embed */}
        <div className="container my-4">
          <div className="row">
            <div className="col-12">
              <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/_ITiwPMUzho?si=JfZSSanvFt6sFhoP" 
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                title="YouTube video player"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section className="container my-4">
          <div className="row text-center">
            <div className="col-12">
              <h2>The Features</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor enean massa!</p>
            </div>
          </div>
          <div className="row">
            {/* Feature Blocks */}
            {["Voicemail Drop", "Email", "Text Messages"].map((feature, index) => (
              <div className="col-md-4 my-3" key={index}>
                <h3>{feature}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget!</p>
              </div>
            ))}
          </div>
          <div className="row">
            {/* Feature Blocks */}
            {["Meeting Polls", "Round-robin", "Lead Capture"].map((feature, index) => (
              <div className="col-md-4 my-3" key={index}>
                <h3>{feature}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget!</p>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Section */}
        <section className="container my-4">
          <div className="row">
            <div className="col-12">
              <h1>Heading for Next Section</h1>
              <p className="h4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Vivamus lacinia odio vitae vestibulum.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>&copy; 2024 Tempus. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default FeaturesDemoPage;
