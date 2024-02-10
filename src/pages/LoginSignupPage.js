import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'; // Ensure this path is correct
import '../assets/css/TempusStyles.css'; // Ensure this path is correct
import '../assets/css/flipCardStyles.css'; // Ensure this path is correct
import authService from '../services/authService'; // Ensure you have implemented this service

const LoginSignupPage = () => {
    const [isLoginView, setIsLoginView] = useState(true); // True for login view, false for signup
    const [userDetails, setUserDetails] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails({ ...userDetails, [name]: value });
    };

    const handleToggleView = () => {
        setIsLoginView(!isLoginView);
        setError(''); // Clear any existing errors when toggling between login/signup
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await authService.register(userDetails);
            navigate('/my-tempus-dashboard'); // Redirect to dashboard after successful registration
        } catch (error) {
            console.error("Registration error:", error.response?.data?.message || "An error occurred");
            setError('Registration failed. Please try again.'); // Update error state with more specific error if possible
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await authService.login({ email: userDetails.email, password: userDetails.password });
            navigate('/my-tempus-dashboard'); // Redirect to dashboard after successful login
        } catch (error) {
            console.error("Login error:", error.response?.data?.message || "An error occurred");
            setError('Login failed. Please try again.'); // Update error state with more specific error if possible
        }
    };

    return (
        <>
            <Navbar />
            <main className="content-center">
                {error && <div className="alert alert-danger">{error}</div>}
                <div className="wrapper">
                    <div className="card-switch">
                        <label className="switch">
                            <input type="checkbox" className="toggle" onChange={handleToggleView} />
                            <span className="slider"></span>
                            <span className="card-side"></span>
                            <div className="flip-card__inner" style={{transform: isLoginView ? 'rotateY(0)' : 'rotateY(180deg)'}}>
                                {/* Login and Signup forms with onSubmit handlers */}
                            </div>
                        </label>
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

export default LoginSignupPage;
