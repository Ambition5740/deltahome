const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const { body, validationResult } = require('express-validator');

// Register a new User
router.post('/register', [
    body('username').not().isEmpty().trim().escape(),
    body('email').isEmail().normalizeEmail(),
    body('password').isLength({ min: 6 }),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { username, email, password } = req.body;
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'Email already in use' });
        }
        user = new User({ username, email, password });
        await user.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

// Login User Endpoint
router.post('/login', passport.authenticate('local', { session: false }), (req, res) => {
    const { user } = req;
    const payload = {
        id: user._id,
        email: user.email,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token: `Bearer ${token}` });
});

// Protected route example
router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res) => {
    // req.user is populated from JWT Strategy in passport
    res.json({ user: req.user });
});

module.exports = router;