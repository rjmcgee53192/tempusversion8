// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Ensure these paths match the location of your page components
import PricingPage from './pages/PricingPage';
import FeaturesDemoPage from './pages/FeaturesDemoPage';
import ResourcesAboutContactUsPage from './pages/Resources_AboutContactUsPage'; // Adjust the name if needed
import LoginSignupPage from './pages/LoginSignupPage';
import MyTempusDashboardPage from './pages/MyTempusDashboardPage'; // Import your page component
import './App.css';
// ... any other page imports you may have

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/features-demo" element={<FeaturesDemoPage />} />
        <Route path="/about-contact-us" element={<ResourcesAboutContactUsPage />} />
        <Route path="/login-signup" element={<LoginSignupPage />} />
        <Route path="/dashboard" element={<MyTempusDashboardPage />} />
        {/* Add additional routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
