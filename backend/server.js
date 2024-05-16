const cors = require('cors');
const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

// Load environment variables
dotenv.config();

// Express app
const app = express();
app.use(express.json());

// CORS setup
const allowedOrigins = ['http://localhost:3000'];
app.use(cors({ origin: allowedOrigins }));

// Middleware
app.use((req, res, next) => {
  console.log(`${req.method} request to ${req.path}`);
  next();
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");

    const userSchema = new mongoose.Schema({
      name: { type: String, required: true },
      email: { type: String, required: true }
    });

    // Create User model
    const User = mongoose.model('oauthuser', userSchema);

    // Google authentication route
    app.get('/auth/google', (req, res) => {
      const config = {
        clientID: process.env.GOOGLE_CLIENT_ID,
        redirectURI: "http://localhost:4000/auth/google/redirect",
        scope: "email profile",
        responseType: "code"
      };
      const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${config.clientID}&redirect_uri=${config.redirectURI}&scope=${config.scope}&response_type=${config.responseType}`;
      res.redirect(url);
    });

    // Google authentication redirect route
    app.get('/auth/google/redirect', async (req, res) => {
      const { name, email } = req.query;

      try {
        const user = new User({ name, email });
        await user.save();
        console.log('New user saved:', user);
        res.redirect('http://localhost:3000/home');
      } catch (error) {
        console.error('Error saving user data:', error);
        res.status(500).send('Error saving user data');
      }
    });

    // Routes
    app.use('/club', require('./routes/clubRoutes'));
    app.use('/event', require('./routes/eventRoutes'));
    app.use('/login', require('./routes/userRoutes'));
    app.use('/calendar', require('./routes/calendarRoutes'));
    app.use('/notification', require('./routes/notificationRoutes'));

    // Serve static files from the React app build directory
    app.use(express.static(path.join(__dirname, '../frontend/build')));

    // Handle any other routes with the React app
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
    });

    // Start the server
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
