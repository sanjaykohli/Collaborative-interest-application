const cors=require('cors');
const port= 5001;
const express = require('express');
const app = express();

// Load environment variables
// dotenv.config();
app.use(express.json());

app.use(cors({
  origin: ['http://localhost:3000'],
}))

app.use('/User', require('./routes/userRoutes'));
app.use(cors({
    origin: ['http://localhost:3000'],
}))

// MongoDB connection
// mongoose.connect(process.env.MONGO_URL)
// .then(() => {
// console.log("Connected to MongoDB");

// const userSchema = new mongoose.Schema({
// name: { type: String },
// email: { type: String }
// // Add any other relevant user information
// });

// Create User model
// const User = mongoose.model('oauthuser', userSchema);

// Google authentication route
// app.get('/auth/google', (req, res) => {
//   const config = {
//     clientID: process.env.GOOGLE_CLIENT_ID,
//     redirectURI: "http://localhost:4000/auth/google/redirect",
//     scope: "email profile",
//     responseType: "code"
//   };
//   const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${config.clientID}&redirect_uri=${config.redirectURI}&scope=${config.scope}&response_type=${config.responseType}`;
//   res.redirect(url);
// });

// // Google authentication redirect route
// app.get('/auth/google/redirect', async (req, res) => {
//   // Assuming you're using a query parameter to pass user data from Google
//   const { name, email } = req.query;

//   try {
//     // Create a new user document with the name and email
//     const user = new User({ name, email });
//     await user.save();
//     console.log('New user saved:', user);

//     // Redirect user to home page or any other page
//     res.redirect('http://localhost:3000/home');
//   } catch (error) {
//     console.error('Error saving user data:', error);
//     // Handle error appropriately
//     res.status(500).send('Error saving user data');
//   }
// });

// Middleware
// app.use((req, res, next) => {
//   console.log(req.path, req.method);
//   next();
// });

// Routes
// app.use('/club', require('./routes/clubRoutes'));
// app.use('/event', require('./routes/eventRoutes'));
// app.use('/login', require('./routes/userRoutes'));
// app.use('/calendar', require('./routes/calendarRoutes'));
// app.use('/notification', require('./routes/notificationRoutes'));

// Listen
app.listen(port, () => {
  console.log('Server is running on port 5001')
});
