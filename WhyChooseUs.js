import React from 'react-router-dom';

function WhyChooseUs() {
    return (
        <div className="container my-4">
            <h2>Why Choose Smart Parking?</h2>
            <p>
                At Smart Parking, we prioritize convenience, reliability, and security for our customers. 
                Our advanced platform offers several unique features that make us the best choice for your parking needs:
            </p>

            <ul className="list-group my-4">
                <li className="list-group-item">
                    <i className="fas fa-check-circle text-success"></i> Real-time availability of parking slots.
                </li>
                <li className="list-group-item">
                    <i className="fas fa-check-circle text-success"></i> Secure and fast online payments.
                </li>
                <li className="list-group-item">
                    <i className="fas fa-check-circle text-success"></i> Easy-to-use mobile app interface.
                </li>
                <li className="list-group-item">
                    <i className="fas fa-check-circle text-success"></i> 24/7 customer support for any issues or questions.
                </li>
            </ul>

            <p>
                Smart Parking ensures that your experience is hassle-free, secure, and reliable, allowing you to focus on the things that matter.
                With our commitment to technology and customer satisfaction, we are the go-to solution for all your parking needs.
            </p>
        </div>
    );
}

export default WhyChooseUs;
