import React from 'react';
import Navbar from '../components/Navbar'; // Ensure this path is correct if Navbar is in the components directory
import '../assets/css/TempusStyles.css'; // Make sure this path correctly points to your CSS file

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main>
        <section className="hero">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <h1>Phasellus Viverra Nulla Metus Varius Laoreet!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
                <button className="btn btn-primary">Demo</button>
              </div>
              <div className="col-md-6">
                {/* Make sure to replace 'your-hero-image-path.png' with the actual path to your image */}
                <img src="client/assets/imgs/undraw_booking_re_gw4j.png" alt="Hero" className="img-fluid" />
              </div>
            </div>
          </div>
        </section>

        {/* Additional sections... */}

        <footer>
          <div className="container">
            <p>&copy; 2024 Tempus. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </>
  );
};

export default HomePage;
