const express = require('express');
const { getIO } = require('../socket');
const router = express.Router();

router.post('/update', (req, res) => {
    const data = req.body; // Make sure to validate and sanitize the data

    const io = getIO();
    io.emit('device-update', data); // Emit the device update event to all connected clients

    res.status(200).json({ message: 'Device update emitted' });
});

module.exports = router;