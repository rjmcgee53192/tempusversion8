import React from 'react';
import Navbar from '../components/Navbar'; // Ensure this path is correct
import '../assets/css/TempusStyles.css'; // Make sure this path correctly points to your CSS file

const PricingPage = () => {
    return (
        <>
            <Navbar />
            <main className="py-5">
                <div className="container">
                    {/* Main content for PricingPage */}
                    <h1>Pricing Plans</h1>
                    <p>Choose the plan that works best for you.</p>
                    {/* Example pricing plan section */}
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Basic</h5>
                                    <p className="card-text">Great for individuals just starting out.</p>
                                    <ul>
                                        <li>Feature 1</li>
                                        <li>Feature 2</li>
                                        <li>Feature 3</li>
                                    </ul>
                                    <a href="#" className="btn btn-primary">Sign Up</a>
                                </div>
                            </div>
                        </div>
                        {/* Repeat for other plans */}
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

export default PricingPage;
