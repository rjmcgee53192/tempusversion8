import React from 'react';
import Navbar from '../components/Navbar'; // Ensure this path is correct
import '../assets/css/TempusStyles.css'; // Make sure this path correctly points to your CSS file

const PricingPage = () => {
    return (
        <>
            <Navbar />
            <main className="py-5">
                <div className="container">
                    <h1 className="text-center mb-5">Pricing Plans</h1>
                    <div className="row">
                        {/* Free plan */}
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="card">
                                <div className="card-header">
                                    <h3>Free</h3>
                                    <p>For individuals starting out with basic scheduling</p>
                                </div>
                                <div className="card-body">
                                    <h4>Always free</h4>
                                    <a href="#" className="btn btn-primary">Get started</a>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                        <li className="list-group-item">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                        {/* other features */}
                                    </ul>
                                    <a href="#" className="card-link">See all features</a>
                                </div>
                            </div>
                        </div>

                        {/* Standard plan */}
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="card">
                                <div className="card-header">
                                    <h3>Standard</h3>
                                    <p>For those with more sophisticated scheduling needs</p>
                                </div>
                                <div className="card-body">
                                    <h4>$10 <small>per seat/month</small></h4>
                                    <a href="#" className="btn btn-primary">Get started</a>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Lorem ipsum dolor sit amet, consectetur.</li>
                                        <li className="list-group-item">Lorem ipsum dolor sit amet, consectetur.</li>
                                        {/* other features */}
                                    </ul>
                                    <a href="#" className="card-link">See all features</a>
                                </div>
                            </div>
                        </div>

                        {/* Teams plan */}
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="card">
                                <div className="card-header">
                                    <h3>Teams</h3>
                                    <p>For teams who need advanced features such as reporting, meeting distribution, and automations</p>
                                </div>
                                <div className="card-body">
                                    <h4>$16 <small>per seat/month</small></h4>
                                    <a href="#" className="btn btn-primary">Try for free</a>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla.</li>
                                        <li className="list-group-item">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla.</li>
                                        {/* other features */}
                                    </ul>
                                    <a href="#" className="card-link">See all features</a>
                                </div>
                            </div>
                        </div>

                        {/* Enterprise plan */}
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="card">
                                <div className="card-header">
                                    <h3>Enterprise</h3>
                                    <p>For teams who need enterprise-level security, admin control, and support</p>
                                </div>
                                <div className="card-body">
                                    <h4>Custom</h4>
                                    <a href="#" className="btn btn-primary">Contact sales</a>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere nibh tortor.</li>
                                        <li className="list-group-item">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere nibh tortor.</li>
                                        {/* other features */}
                                    </ul>
                                    <a href="#" className="card-link">See all features</a>
                                </div>
                            </div>
                        </div>
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
