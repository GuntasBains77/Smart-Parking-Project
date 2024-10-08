const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');

// Initialize express app
const app = express();
const port = 3000;

// Middleware
app.use(cors({ origin: 'http://localhost:4000' }));  // Adjusted to match your frontend port
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/smart_parking', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB:', err);
});

// Define Schemas and Models
const reservationSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    slotNumber: { type: Number, required: true },
    reservedAt: { type: Date, default: Date.now }
});

const feedbackSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    feedback: { type: String, required: true },
    submittedAt: { type: Date, default: Date.now }
});

const paymentSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    slotNumber: { type: Number, required: true },
    paymentMethod: { type: String, required: true },
    paymentNumber: { type: String, required: true },
    amount: { type: Number, required: true },  // Added amount
    paymentStatus: { type: String, default: 'Pending' },
    paidAt: { type: Date }
});

const Reservation = mongoose.model('Reservation', reservationSchema);
const Feedback = mongoose.model('Feedback', feedbackSchema);
const Payment = mongoose.model('Payment', paymentSchema);

// Process Payment Endpoint
app.post('/process-payment', async (req, res) => {
    const { userId, slotNumber, paymentMethod, amount, paymentNumber, email } = req.body;

    // Log the request payload to verify incoming data
    console.log('Received Payment Request:', req.body);

    // Check for missing data
    if (!userId || !slotNumber || !paymentMethod || !amount || !paymentNumber || !email) {
        return res.status(400).json({ message: 'All payment details are required' });
    }

    try {
        // Save the payment details in the database
        const payment = new Payment({
            userId,
            slotNumber,
            paymentMethod,
            paymentNumber, // Save the payment number
            amount,
            paymentStatus: 'Confirmed',
            paidAt: new Date()
        });
        await payment.save();

        // Send confirmation email
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'your-email@gmail.com',
                pass: 'your-email-password' // Use environment variables in production
            }
        });

        const mailOptions = {
            from: 'your-email@gmail.com',
            to: email,
            subject: 'Payment Confirmation',
            text: `Your payment for parking slot ${slotNumber} has been confirmed. Amount: ${amount}.`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
            } else {
                console.log('Email sent:', info.response);
            }
        });

        // Return success response
        res.status(201).json({ message: 'Payment confirmed and email sent!', payment });
    } catch (err) {
        console.error('Error processing payment:', err);
        res.status(500).json({ message: 'Error processing payment', error: err.message });
    }
});

// Slot Reservation Endpoint
app.post('/reserve-slot', async (req, res) => {
    const { userId, slotNumber } = req.body;

    // Check for missing fields
    if (!userId || !slotNumber) {
        return res.status(400).json({ message: 'User ID and Slot Number are required' });
    }

    try {
        const reservation = new Reservation({ userId, slotNumber });
        await reservation.save();
        console.log('Reservation saved:', reservation);
        res.status(201).json({ message: 'Slot reserved successfully', reservation });
    } catch (err) {
        console.error('Error saving reservation:', err);
        res.status(500).json({ message: 'Error reserving slot' });
    }
});

// Feedback Submission Endpoint
app.post('/submit-feedback', async (req, res) => {
    const { userId, feedback } = req.body;

    if (!userId || !feedback) {
        return res.status(400).json({ message: 'User ID and feedback are required' });
    }

    try {
        const newFeedback = new Feedback({ userId, feedback });
        await newFeedback.save();
        console.log('Feedback saved:', newFeedback);
        res.status(201).json({ message: 'Feedback submitted successfully', newFeedback });
    } catch (err) {
        console.error('Error submitting feedback:', err);
        res.status(500).json({ message: 'Error submitting feedback' });
    }
});

// Fetch all reservations
app.get('/reservations', async (req, res) => {
    try {
        const reservations = await Reservation.find();
        res.json(reservations);
    } catch (err) {
        console.error('Error fetching reservations:', err);
        res.status(500).json({ message: 'Error fetching reservations' });
    }
});

// Fetch all feedbacks
app.get('/feedbacks', async (req, res) => {
    try {
        const feedbacks = await Feedback.find();
        res.json(feedbacks);
    } catch (err) {
        console.error('Error fetching feedbacks:', err);
        res.status(500).json({ message: 'Error fetching feedbacks' });
    }
});

// Fetch all payments
app.get('/payments', async (req, res) => {
    try {
        const payments = await Payment.find();
        res.json(payments);
    } catch (err) {
        console.error('Error fetching payments:', err);
        res.status(500).json({ message: 'Error fetching payments' });
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
