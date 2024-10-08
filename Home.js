import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

function Home() {
    return (
        <div>
            {/* Hero Section */}
            <div className="jumbotron bg-primary text-white text-center py-5">
                <div className="container">
                    <h1 className="display-4">Welcome to Smart Parking</h1>
                    <p className="lead">Effortlessly find and reserve parking spaces with just a few clicks!</p>
                    <Link to="/reservation" className="btn btn-light btn-lg mt-3">Reserve a Slot Now</Link>
                </div>
            </div>

            {/* Feature Section */}
            <div className="container my-5">
                <h2 className="text-center mb-4">Why Use Smart Parking?</h2>
                <div className="row">
                    {/* Feature 1 */}
                    <div className="col-md-4">
                        <div className="card shadow-sm">
                            <div className="card-body text-center">
                                <i className="fas fa-car fa-3x mb-3 text-primary"></i>
                                <h5 className="card-title">Easy Reservations</h5>
                                <p className="card-text">Book your parking spot in advance and save time.</p>
                                <Link to="/reservation" className="btn btn-primary btn-sm">Reserve Now</Link>
                            </div>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="col-md-4">
                        <div className="card shadow-sm">
                            <div className="card-body text-center">
                                <i className="fas fa-clock fa-3x mb-3 text-success"></i>
                                <h5 className="card-title">24/7 Availability</h5>
                                <p className="card-text">Parking spots available round the clock with instant confirmations.</p>
                                <Link to="/about-us" className="btn btn-success btn-sm">Learn More</Link>
                            </div>
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="col-md-4">
                        <div className="card shadow-sm">
                            <div className="card-body text-center">
                                <i className="fas fa-comments fa-3x mb-3 text-info"></i>
                                <h5 className="card-title">Customer Feedback</h5>
                                <p className="card-text">We value your feedback. Let us know how we can improve.</p>
                                <Link to="/feedback" className="btn btn-info btn-sm">Submit Feedback</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action Section */}
            <div className="bg-dark text-white py-5">
                <div className="container text-center">
                    <h2>Get Started Today</h2>
                    <p className="lead">Reserve your parking spot and save time on your next trip!</p>
                    <Link to="/reservation" className="btn btn-warning btn-lg">Reserve Now</Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
