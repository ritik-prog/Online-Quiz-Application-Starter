// Import the necessary modules
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const helmet = require('helmet');

// Create an instance of an Express application
const app = express();

// Enable essential middlewares
app.use(cors());          // Enable CORS for all routes
app.use(cookieParser());  // Parse cookies from incoming requests
app.use(bodyParser.json()); // Parse JSON request bodies
app.use(helmet());        // Set various HTTP headers for security

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Specify the port number
const PORT = process.env.PORT || 5500;

// Start the server
app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});