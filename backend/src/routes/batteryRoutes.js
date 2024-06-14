const express = require('express');
const router = express.Router();
const Battery = require('../database/battery'); // Adjust the path as necessary

// Example route to get all batteries
router.get('/', async (req, res) => {
    try {
        const batteries = await Battery.find();
        res.json(batteries);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
