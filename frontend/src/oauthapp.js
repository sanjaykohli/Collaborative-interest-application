// const express = require('express');
// const app = express();
// const mongoose = require('mongoose');
// const cookieSession = require('cookie-session');
// const GoogleStrategy = require('passport-google-oauth20');
// const User = require('./models/User');
// const https = require('https');
// const { redirect } = require('react-router-dom');



// // Connect to MongoDB
// mongoose.connect("mongodb://localhost:27017/VibeTribe", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => {
//     console.log('Connected to MongoDB');
// }).catch((err) => {
//     console.error('Error connecting to MongoDB:', err.message);
// });

// // Cookie session middleware
// app.use(cookieSession({
//     maxAge: 24 * 60 * 60 * 1000, // 24 hours
//     keys: ["ilovecookies"]
// }));



// // Example protected route
// app.get('/', (req, res) => {
//     if (req.isAuthenticated()) {
//         res.send('You are logged in!');
//     } else {
//         res.redirect('/auth/google');
//     }
// });


// // Logout route
// app.get('/logout', (req, res) => {
//     req.logout();
//     res.redirect('/');
// });


