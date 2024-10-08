import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Feedback() {
    const [userId, setUserId] = useState('');
    const [feedback, setFeedback] = useState('');
    const [showModal, setShowModal] = useState(false); // To show success modal
    const [modalMessage, setModalMessage] = useState(''); // To display modal message

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = { userId, feedback };
        submitFeedback(data);
    };

    const submitFeedback = (data) => {
        fetch('http://localhost:3000/submit-feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Error submitting feedback');
            }
            return response.json();
        })
        .then(() => {
            setModalMessage('Feedback submitted successfully!');
            setShowModal(true); // Show modal on success
        })
        .catch((error) => {
            console.error('Error:', error);
            setModalMessage('Error submitting feedback. Please try again later.');
            setShowModal(true); // Show error modal
        });
    };

    const closeModal = () => {
        setShowModal(false); // Close the modal when button is clicked
    };

    return (
        <div>
            <header className="bg-dark text-white py-4 shadow">
                <div className="container">
                    <h1 className="mb-0">Smart Parking - Feedback</h1>
                </div>
            </header>

            <main className="container my-4">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h2 className="card-title text-center mb-4">
                                    <i className="fas fa-comment-dots"></i> Submit Your Feedback
                                </h2>

                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="userId">
                                            <i className="fas fa-user"></i> User ID:
                                        </label>
                                        <input
                                            type="text"
                                            id="userId"
                                            className="form-control"
                                            value={userId}
                                            onChange={(e) => setUserId(e.target.value)}
                                            required
                                            placeholder="Enter your User ID"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="feedback">
                                            <i className="fas fa-comments"></i> Your Feedback:
                                        </label>
                                        <textarea
                                            id="feedback"
                                            className="form-control"
                                            rows="5"
                                            value={feedback}
                                            onChange={(e) => setFeedback(e.target.value)}
                                            required
                                            placeholder="Share your thoughts"
                                        />
                                    </div>

                                    <button type="submit" className="btn btn-primary btn-block mt-4">
                                        <i className="fas fa-paper-plane"></i> Submit Feedback
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {showModal && (
                <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Feedback Status</h5>
                                <button type="button" className="close" onClick={closeModal}>
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>{modalMessage}</p>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-primary" onClick={closeModal}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <footer className="bg-dark text-white py-3 mt-auto">
                <div className="container text-center">
                    <p className="mb-0">&copy; 2024 Smart Parking. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default Feedback;
