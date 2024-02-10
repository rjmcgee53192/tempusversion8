import React from 'react';
import '../assets/css/TempusStyles.css'; // Adjust the path as necessary

const PricingPage = () => {
    return (
        <>
            <header className="header">
                <div className="container header-container">
                    <div className="logo-container">
                        <img src="/assets/img/TempusIcon.png" alt="Logo Icon" className="logo" />
                        <img src="/assets/img/TempusName.png" alt="Logo Name" className="logo-name" />
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
            {/* Main content here */}
            <main className="py-5">
                {/* Content similar to the provided HTML */}
            </main>
            <footer>
                <div className="container">
                    <p>&copy; 2024 Tempus. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
};

export default PricingPage;
