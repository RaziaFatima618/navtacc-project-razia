const express = require('express');

const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');

const User = require('../models/User');



const router = express.Router();



// Register

router.post('/register', async (req, res) => {

  const { name, email, password } = req.body;



  const hashedPassword = await bcrypt.hash(password, 10);



  const user = new User({ name, email, password: hashedPassword });

  await user.save();



  res.status(201).json({ message: 'User created' });

});



// Login

router.post('/login', async (req, res) => {

  const { email, password } = req.body;



  const user = await User.findOne({ email });

  if (!user) {

    return res.status(400).json({ message: 'Invalid credentials' });

  }



  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {

    return res.status(400).json({ message: 'Invalid credentials' });

  }



  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

  res.json({ token });

});



// Get user profile

router.get('/profile', async (req, res) => {

  const userId = req.user.id; // Assuming you are using middleware to extract user info from token

  const user = await User.findById(userId).select('-password'); // Exclude password from the result

  res.json(user);

});



module.exports = router;