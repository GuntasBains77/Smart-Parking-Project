import React from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css'; // FontAwesome for icons

function AboutUs() {
    return (
        <div>
            {/* Header Section */}
            <header className="bg-dark text-white py-5">
                <div className="container text-center">
                    <h1>About Smart Parking</h1>
                    <p className="lead">Your Trusted Partner in Convenient Parking Solutions</p>
                </div>
            </header>

            {/* About Us Content */}
            <div className="container my-5">
                <div className="row">
                    {/* Company Overview */}
                    <div className="col-md-6">
                        <h2 className="mb-4"><i className="fas fa-parking"></i> Who We Are</h2>
                        <p>
                            Established in 2024, <strong>Smart Parking</strong> has been at the forefront of smart parking technologies,
                            helping users easily find, reserve, and manage parking spaces with just a few clicks. 
                        </p>
                        <p>
                            Our mission is to revolutionize the parking experience by combining cutting-edge technology with customer-first solutions.
                            We aim to reduce the stress associated with finding a parking spot, allowing you to focus on what truly matters.
                        </p>
                    </div>

                    {/* Fun Facts or Achievements */}
                    <div className="col-md-6">
                        <h2 className="mb-4"><i className="fas fa-trophy"></i> What We’ve Achieved</h2>
                        <ul className="list-unstyled">
                            <li><i className="fas fa-check-circle text-success"></i> Over 5000+ successful reservations</li>
                            <li><i className="fas fa-check-circle text-success"></i> Rated 4.8/5 by our customers</li>
                            <li><i className="fas fa-check-circle text-success"></i> Real-time slot availability updates</li>
                            <li><i className="fas fa-check-circle text-success"></i> Integrated feedback and support systems</li>
                        </ul>
                    </div>
                </div>

                {/* Why Choose Us Section */}
                <div className="my-5 text-center">
                    <h2 className="mb-5"><i className="fas fa-thumbs-up"></i> Why Choose Us</h2>
                    <div className="row justify-content-center">
                        <div className="col-md-4 text-center">
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <i className="fas fa-mobile-alt fa-3x text-primary mb-3"></i>
                                    <h5 className="card-title">Easy to Use</h5>
                                    <p className="card-text">
                                        With our user-friendly interface, reserving a parking slot has never been easier.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 text-center">
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <i className="fas fa-shield-alt fa-3x text-primary mb-3"></i>
                                    <h5 className="card-title">Secure & Reliable</h5>
                                    <p className="card-text">
                                        Our system is designed with security in mind, ensuring your data and transactions are safe.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 text-center">
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <i className="fas fa-clock fa-3x text-primary mb-3"></i>
                                    <h5 className="card-title">24/7 Availability</h5>
                                    <p className="card-text">
                                        Our platform is always accessible, offering real-time updates on slot availability.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Button to go to Why Choose Us Page */}
                    <div className="mt-4">
                        <Link to="/why-choose-us" className="btn btn-primary btn-lg">
                            Learn More About Why Choose Us
                        </Link>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-dark text-white py-3">
                <div className="container text-center">
                    <p className="mb-0">&copy; 2024 Smart Parking. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default AboutUs;
