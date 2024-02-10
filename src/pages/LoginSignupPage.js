import React from 'react';
import '../assets/css/TempusStyles.css'; // Adjust path as needed
import '../assets/css/flipCardStyles.css'; // Adjust path as needed

const LoginSignupPage = () => {
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

            <main className="content-center">
                <div className="wrapper">
                    <div className="card-switch">
                        <label className="switch">
                            <input type="checkbox" className="toggle" />
                            <span className="slider"></span>
                            <span className="card-side"></span>
                            <div className="flip-card__inner">
                                <div className="flip-card__front">
                                    <div className="title">Log in</div>
                                    <form className="flip-card__form" action="">
                                        <input className="flip-card__input" name="email" placeholder="Email" type="email" />
                                        <input className="flip-card__input" name="password" placeholder="Password" type="password" />
                                        <button className="flip-card__btn">Let`s go!</button>
                                    </form>
                                </div>
                                <div className="flip-card__back">
                                    <div className="title">Sign up</div>
                                    <form className="flip-card__form" action="">
                                        <input className="flip-card__input" placeholder="Name" type="name" />
                                        <input className="flip-card__input" name="email" placeholder="Email" type="email" />
                                        <input className="flip-card__input" name="password" placeholder="Password" type="password" />
                                        <button className="flip-card__btn">Confirm!</button>
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
