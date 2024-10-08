import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Reservation() {
    const [userId, setUserId] = useState('');
    const [slotNumber, setSlotNumber] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [paymentModal, setPaymentModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [paymentNumber, setPaymentNumber] = useState('');
    const [email, setEmail] = useState(''); // Add email state

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = { userId, slotNumber };
        simulatePaymentConfirmation(data);
    };

    const simulatePaymentConfirmation = (data) => {
        fetch('http://localhost:3000/reserve-slot', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Error confirming payment');
                }
                return response.json();
            })
            .then(() => {
                setModalMessage('🎉 Payment confirmed! Slot reserved successfully.');
                setShowModal(true);
                setPaymentModal(true);
            })
            .catch((error) => {
                console.error('Error:', error);
                setModalMessage('⚠️ Error confirming payment. Please try again later.');
                setShowModal(true);
            });
    };

    const closeModal = () => {
        setShowModal(false);
        setPaymentModal(false);
    };

    const handlePaymentSubmit = () => {
        const paymentData = {
            userId,
            slotNumber,
            paymentMethod,
            paymentNumber,
            email // Include email in payment data
        };

        fetch('http://localhost:3000/process-payment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(paymentData),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Error processing payment');
                }
                return response.json();
            })
            .then(() => {
                console.log('Payment processed successfully!');
                setPaymentModal(false);
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Error processing payment. Please try again later.');
            });
    };

    return (
        <div>
            {/* Header */}
            <header className="bg-dark text-white py-4 shadow">
                <div className="container">
                    <h1 className="mb-0"><i className="fas fa-parking"></i> Smart Parking Reservation</h1>
                </div>
            </header>

            {/* Main Content */}
            <main className="container my-4">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card shadow-lg">
                            <div className="card-body">
                                <h2 className="card-title text-center">Reserve Your Slot</h2>
                                <p className="text-center text-muted">Quick and easy parking slot reservation</p>
                                
                                {/* Form */}
                                <form onSubmit={handleSubmit} className="needs-validation">
                                    <div className="form-group mb-3">
                                        <label htmlFor="userId"><i className="fas fa-user"></i> User ID:</label>
                                        <input
                                            type="text"
                                            id="userId"
                                            name="userId"
                                            className="form-control"
                                            placeholder="Enter your User ID"
                                            required
                                            value={userId}
                                            onChange={(e) => setUserId(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="slotNumber"><i className="fas fa-parking"></i> Slot Number:</label>
                                        <input
                                            type="number"
                                            id="slotNumber"
                                            name="slotNumber"
                                            className="form-control"
                                            placeholder="Enter the Slot Number"
                                            required
                                            value={slotNumber}
                                            onChange={(e) => setSlotNumber(e.target.value)}
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-block">
                                        <i className="fas fa-check-circle"></i> Confirm Reservation
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Confirmation Modal */}
            {showModal && (
                <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} tabIndex="-1">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title"><i className="fas fa-info-circle"></i> Confirmation</h5>
                                <button type="button" className="close" onClick={closeModal}>
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body text-center">
                                <p>{modalMessage}</p>
                            </div>
                            <div className="modal-footer justify-content-center">
                                <button className="btn btn-success" onClick={closeModal}>
                                    <i className="fas fa-check"></i> Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Payment Modal */}
            {paymentModal && (
                <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} tabIndex="-1">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title"><i className="fas fa-credit-card"></i> Select Payment Method</h5>
                                <button type="button" className="close" onClick={closeModal}>
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Choose your payment method:</p>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="paymentMethod"
                                        value="Credit Card"
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                    />
                                    <label className="form-check-label">Credit Card</label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="paymentMethod"
                                        value="PayPal"
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                    />
                                    <label className="form-check-label">PayPal</label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="paymentMethod"
                                        value="Google Pay"
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                    />
                                    <label className="form-check-label">Google Pay</label>
                                </div>
                                <div className="form-group mt-3">
                                    <label htmlFor="paymentNumber"><i className="fas fa-credit-card"></i> Payment Number:</label>
                                    <input
                                        type="text"
                                        id="paymentNumber"
                                        name="paymentNumber"
                                        className="form-control"
                                        placeholder="Enter payment number"
                                        value={paymentNumber}
                                        onChange={(e) => setPaymentNumber(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group mt-3">
                                    <label htmlFor="email"><i className="fas fa-envelope"></i> Email:</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="form-control"
                                        placeholder="Enter your email address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-primary" onClick={handlePaymentSubmit}>
                                    <i className="fas fa-check"></i> Submit Payment
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Footer */}
            <footer className="bg-dark text-white py-3 mt-auto">
                <div className="container text-center">
                    <p className="mb-0">&copy; 2024 Smart Parking. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default Reservation;
