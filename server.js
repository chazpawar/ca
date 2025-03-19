
const express = require('express');
const app = express();


app.use(express.json());


app.get('/', (req, res) => {
  res.send('Server is running...');
});


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});








app.post('/signup', (req, res) => {
  const { username, email, password, dateOfBirth } = req.body;


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

  
  res.status(201).json({
    message: 'User registered successfully!',
    user: {
      username,
      email,
      dateOfBirth,
    },
  });
});





