import React from 'react';
import Navbar from '../components/Navbar'; // Ensure this path is correct if Navbar is in the components directory
import '../assets/css/TempusStyles.css'; // Make sure this path correctly points to your CSS file
import heroImage from '../assets/imgs/undraw_Booking_re_gw4j.png'; // Import the image
import heroImage2 from '../assets/imgs/undraw_Calendar_re_ki49.png'; // Import the image

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
                {/* Use the imported image here */}
                <img src={heroImage} alt="Hero" className="img-fluid" />
              </div>
            </div>
          </div>
        </section>

        <section className="hero2">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6">
                {/* Use the imported image here */}
                <img src={heroImage2} alt="Hero2" className="img-fluid" />
              </div>
              <div className="col-md-6">
              <h1>Phasellus Viverra Nulla Metus Varius Laoreet!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
                <button className="btn btn-primary">Demo</button>

              </div>
            </div>
          </div>
        </section>

        {/* Additional sections omitted for brevity */}

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
