const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');

const User = require('../models/User');



exports.register = async (req, res) => {

  const { name, email, password } = req.body;



  try {

    const existingUser = await User.findOne({ email });

    if (existingUser) return res.status(400).json({ message: 'User already exists' });



    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ name, email, password: hashedPassword });

    await user.save();



    res.status(201).json({ message: 'User created successfully' });

  } catch (error) {

    res.status(500).json({ message: 'Server error' });

  }

};



exports.login = async (req, res) => {

  const { email, password } = req.body;



  try {

    const user = await User.findOne({ email });

    if (!user) return res.status(400).json({ message: 'Invalid credentials' });



    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });



    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });

  } catch (error) {

    res.status(500).json({ message: 'Server error' });

  }

};



exports.getProfile = async (req, res) => {

  try {

    const user = await User.findById(req.user.id).select('-password');

    res.json(user);

  } catch (error) {

    res.status(500).json({ message: 'Server error' });

  }

};