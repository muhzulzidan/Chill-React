
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./models/User');


const router = express.Router();
console.log('Router initialized'); // Debugging log
const SECRET_KEY = 'your_secret_key';

// Middleware to verify JWT
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'No token provided' });
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) return res.status(403).json({ message: 'Invalid token' });
        req.user = decoded;
        next();
    });
}


// Delete User Route (Protected)
router.delete('/profile', authenticateToken, async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.user.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json({ message: 'User deleted successfully' });
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Update Profile Route (Protected)
router.put('/profile', authenticateToken, async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findById(req.user.id);
        if (!user) return res.status(404).json({ message: 'User not found' });

        // If username is provided and different, check for duplicate
        if (username && username !== user.username) {
            const existingUser = await User.findOne({ username });
            if (existingUser) {
                return res.status(409).json({ message: 'Username already taken' });
            }
            user.username = username;
        }

        // If password is provided, hash and update
        if (password) {
            const hashedPassword = await bcrypt.hash(password, 10);
            user.password = hashedPassword;
        }

        await user.save();
        res.json({ message: 'Profile updated successfully', username: user.username });
        // oxlint-disable-next-line no-unused-vars
        // eslint-disable-next-line no-unused-vars
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Register Route
router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    res.status(201).send('User registered successfully');
});

// Login Route
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
        return res.status(404).send('User not found');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(401).send('Invalid password');
    }

    const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: '1h' });
    res.status(200).json({ token });
});


// Profile Route (Protected)
router.get('/profile', authenticateToken, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
        // eslint-disable-next-line no-unused-vars
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router; // Ensure proper export of the router object
