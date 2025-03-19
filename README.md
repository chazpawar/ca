/ Signup route
app.post('/signup', (req, res) => {
  const { username, email, password, dateOfBirth } = req.body;

  // Input validation
  if (!username || username.trim() === '') {
    return res.status(400).json({ error: 'Username cannot be empty' });
  }

  if (!email || email.trim() === '') {
    return res.status(400).json({ error: 'Email cannot be empty' });
  }

  if (!password || password.length < 8 || password.length > 16) {
    return res
      .status(400)
      .json({
        error: 'Password length should be greater than 8 or less than or equal to 16',
      });
  }

  // If validation passes
  res.status(201).json({
    message: 'User registered successfully!',
    user: {
      username,
      email,
      dateOfBirth,
    },
  });
});











// index.js
const express = require('express');
const app = express();

// Middleware to parse JSON request body
app.use(express.json());

// Basic route to check server status
app.get('/', (req, res) => {
  res.send('Server is running...');
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
