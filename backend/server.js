const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Trust proxy setting for Heroku deployment
app.set('trust proxy', 1);

// Middlewares for parsing JSON, security headers, and CORS
app.use(bodyParser.json());
app.use(helmet());
app.use(cors());

// Rate limiting middleware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // Limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Serving static files from 'public' directory
app.use(express.static('public'));

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL, // Email address from your config
    pass: process.env.PASSWORD // Email password from your config
  }
});

// Endpoint to handle POST request for sending email
app.post('/send-email', (req, res) => {
  const user_email = req.body.email; // User's email address
  const message = req.body.message; // User's message

  // Logging the received email and message
  console.log('Received email:', user_email);
  console.log('Received message:', message);

  // Mail options for Nodemailer
  const mailOptions = {
    from: user_email, // Sender's email address
    to: process.env.EMAIL, // Recipient's email address
    subject: 'New message from contact form',
    text: `Message from: ${user_email}, Content: ${message}`
  };

  // Sending the email
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent successfully:', info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.send('Backend active!');
});

// Starting the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Error handling middleware (should be last in the middleware chain)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});
