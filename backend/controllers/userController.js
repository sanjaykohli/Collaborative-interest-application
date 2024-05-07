// userController.js

const User = require('../models/userModel');

// Function to get all users
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Function to get one user by email
const getUserById = async (req, res) => {
    try {
        const { email } = req.params;
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Function to create a new user
const createUser = async (req, res) => {
    try {
        const { email, college, password } = req.body;
        const newUser = await User.create({ email, password, college });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Function to update a user by ID
const updateUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const { email, password, college } = req.body;

        const updatedUser = await User.findByIdAndUpdate(id, { email, password, college }, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const deleteuser = async (req, res) => {
    try {
      const id = req.params.id;
      const deleteduser = await User.findByIdAndDelete(id);
      if (!deleteduser) {
        return res.status(404).json({ message: "user not found" });
      }
      res.status(200).json({ message: "user deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteuser
};
