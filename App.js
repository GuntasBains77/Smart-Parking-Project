import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Reservation from './Reservation';
import Feedback from './Feedback';
import AboutUs from './AboutUs'; // Import AboutUs
import WhyChooseUs from './WhyChooseUs'; // Import WhyChooseUs
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
    return (
        <Router>
            <div>
                {/* Navigation Bar */}
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                        <Link className="navbar-brand" to="/">Smart Parking</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/reservation">Reservation</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/feedback">Feedback</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about-us">About Us</Link> {/* Add About Us Link */}
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/why-choose-us">Why Choose Us</Link> {/* Add Why Choose Us Link */}
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                {/* Routes */}
                <div className="container my-4">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/reservation" element={<Reservation />} />
                        <Route path="/feedback" element={<Feedback />} />
                        <Route path="/about-us" element={<AboutUs />} /> {/* Add About Us Route */}
                        <Route path="/why-choose-us" element={<WhyChooseUs />} /> {/* Add Why Choose Us Route */}
                    </Routes>
                </div>

                {/* Footer */}
                <footer className="bg-dark text-white py-3 mt-auto">
                    <div className="container text-center">
                        <p className="mb-0">&copy; 2024 Smart Parking. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </Router>
    );
}

export default App;
