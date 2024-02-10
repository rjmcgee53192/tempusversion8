import React from 'react';
import 'client\assets\css\TempusStyles.css'; // Ensure this path is correct

const HomePage = () => {
  return (
    <>
      <header className="header">
      <div className="container header-container">
          <div className="logo-container">
            <img src="client\assets\imgs\TempusIcon.png" alt="Logo Icon" className="logo" />
            <img src="client\assets\imgs\TempusName.png" alt="Logo Name" className="logo-name" />
          </div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Features & Demo</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Pricing</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Resources
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <a className="dropdown-item" href="#">About & Contact Us</a>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Login | Signup</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <h1>Phasellus Viverra Nulla Metus Varius Laoreet!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
                <button className="btn btn-primary">Demo</button>
              </div>
              <div className="col-md-6">
                <img src="your-hero-image-path.png" alt="Hero" className="img-fluid" />
              </div>
            </div>
          </div>
        </section>

        {/* Additional sections omitted for brevity */}

        {/* Testimonials Section */}
        <section className="testimonials">
          {/* Testimonials content */}
        </section>

        {/* CTA Section */}
        <section className="cta">
          {/* CTA content */}
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

export default HomePage;
