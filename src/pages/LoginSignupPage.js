import React, { useState } from 'react';
import Navbar from '../components/Navbar'; // Ensure this path is correct
import '../assets/css/TempusStyles.css'; // Ensure this path is correct
import '../assets/css/flipCardStyles.css'; // Ensure this path is correct
import authService from '../services/authService';

const LoginSignupPage = () => {
    const [isLoginView, setIsLoginView] = useState(true); // True for login view, false for signup
    const [userDetails, setUserDetails] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails({ ...userDetails, [name]: value });
    };

    const handleToggleView = () => {
        setIsLoginView(!isLoginView);
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await authService.register(userDetails);
            console.log(response);
            // Redirect to dashboard or show success message
        } catch (error) {
            console.error("Registration error:", error);
            // Handle errors (e.g., show error message)
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await authService.login({ email: userDetails.email, password: userDetails.password });
            console.log(response);
            // Redirect to dashboard or show success message
        } catch (error) {
            console.error("Login error:", error);
            // Handle errors (e.g., show error message)
        }
    };

    return (
        <>
            <Navbar />
            <main className="content-center">
                <div className="wrapper">
                    <div className="card-switch">
                        <label className="switch">
                            <input type="checkbox" className="toggle" onChange={handleToggleView} />
                            <span className="slider"></span>
                            <span className="card-side"></span>
                            <div className="flip-card__inner" style={{transform: isLoginView ? 'rotateY(0)' : 'rotateY(180deg)'}}>
                                <div className="flip-card__front">
                                    <div className="title">Log in</div>
                                    <form className="flip-card__form" onSubmit={handleLogin}>
                                        <input className="flip-card__input" name="email" placeholder="Email" type="email" value={userDetails.email} onChange={handleChange} />
                                        <input className="flip-card__input" name="password" placeholder="Password" type="password" value={userDetails.password} onChange={handleChange} />
                                        <button className="flip-card__btn" type="submit">Let's go!</button>
                                    </form>
                                </div>
                                <div className="flip-card__back">
                                    <div className="title">Sign up</div>
                                    <form className="flip-card__form" onSubmit={handleRegister}>
                                        <input className="flip-card__input" name="name" placeholder="Name" type="text" value={userDetails.name} onChange={handleChange} />
                                        <input className="flip-card__input" name="email" placeholder="Email" type="email" value={userDetails.email} onChange={handleChange} />
                                        <input className="flip-card__input" name="password" placeholder="Password" type="password" value={userDetails.password} onChange={handleChange} />
                                        <button className="flip-card__btn" type="submit">Confirm!</button>
                                    </form>
                                </div>
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
