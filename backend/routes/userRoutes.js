const express = require('express');
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteuser,
  findUserById,
} = require('../controllers/userController');

const router = express.Router();

const User = require('../models/userModel');


// const jwt = require('jsonwebtoken');


// Add this code snippet as a separate route handler
// router.post('/', async (req, res) => {
//     const { email, password } = req.body;
//     try {
//       // Find user by email
//       const user = await User.findOne({ email });

//       // Check if user exists
//       if (!user) {
//         return res.status(401).json({ error: 'Invalid email or password' });
//       }
  
//       // Check if password is correct
//       const isValidPassword = await user.isValidPassword(password);
//       if (!isValidPassword) {
//         return res.status(401).json({ error: 'Invalid email or password' });
//       }
  
//       // Generate JWT token
//       const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  
//       // Send token to client
//       res.json({ token });
//     } catch (error) {
//       console.error('Login error:', error);
//       res.status(500).json({ error: 'Server error' });
//     }
//   });

// Route for getting all users
router.get('/', getAllUsers);

// Route for getting one user by email
router.get('/:email', getUserById);

// Route for creating a new user
router.post('/', createUser);

// Route for updating a user by ID
router.put('/:id', updateUserById);

// Route for deleting a user by ID
router.delete('/:id', deleteuser);


module.exports = router;