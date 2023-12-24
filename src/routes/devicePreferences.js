const express = require('express');
const SmartDevice = require('../models/SmartDevice');
const router = express.Router();
const passport = require('passport');

// Get device preferences for a user
router.get('/:userId/devices', passport.authenticate('jwt', { session: false }), async (req, res) => {
    try {
        const userId = req.params.userId;
        if (req.user.id !== userId) {
            return res.status(403).json({ message: 'Unauthorized' });
        }

        const devices = await SmartDevice.find({ user: userId });
        res.json(devices);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

// Update device preferences
router.put('/:userId/devices/:deviceId', passport.authenticate('jwt', { session: false }), async (req, res) => {
    try {
        const { userId, deviceId } = req.params;
        const settings = req.body.settings;

        if (req.user.id !== userId) {
            return res.status(403).json({ message: 'Unauthorized' });
        }

        const device = await SmartDevice.findOneAndUpdate(
            { _id: deviceId, user: userId },
            { $set: { settings: settings } },
            { new: true }
        );
        
        if (!device) {
            return res.status(404).json({ message: 'Device not found' });
        }
        
        res.json({ message: 'Device preferences updated', device });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

module.exports = router;
