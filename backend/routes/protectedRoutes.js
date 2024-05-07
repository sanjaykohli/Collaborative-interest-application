const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');

router.get('/protected', verifyToken, async (req, res) => {
  try {
    // Access the user ID from the decoded token
    const userId = req.userId;
    // Perform any actions that require authentication
    res.json({ message: 'Protected route accessed successfully' });
  } catch (error) {
    console.error('Protected route error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;