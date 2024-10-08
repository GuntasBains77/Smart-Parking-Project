# Smart-Parking-Project
This project is a full-stack web application designed to streamline the process of parking slot reservations. It allows users to reserve parking slots, make payments, and receive email confirmations for their reservations. The system includes both frontend and backend components, making use of various technologies to ensure a seamless user experience.

Key features include:
-Slot Reservation: Users can easily select and reserve available parking slots by providing their User ID and slot number.
-Payment Integration: The system supports multiple payment methods (e.g., credit card, PayPal, Google Pay). Payments are processed, recorded in a MongoDB database, and confirmed through automated email notifications using Nodemailer.
-Email Notifications: Users receive email confirmations for successful payments, detailing their reserved parking slot and payment amount.
-Feedback System: Users can submit feedback after using the service, which is stored in the database for further improvements.
-Admin Functionality: The system includes endpoints for fetching all reservations, payments, and feedback entries for admin review.

Technologies used:
-Frontend: React, Bootstrap, FontAwesome
-Backend: Node.js, Express.js, MongoDB, Mongoose, Nodemailer
