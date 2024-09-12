const Reel = require('../models/reelModel');

// Get all reels
exports.getReels = async (req, res) => {
    try {
        const reels = await Reel.find();
        res.json(reels);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Upload a reel
exports.uploadReel = async (req, res) => {
    try {
        const newReel = new Reel({
            title: req.body.title,
            videoUrl: req.file.path,
        });
        await newReel.save();
        res.status(201).json(newReel);
    } catch (error) {
        res.status(500).json({ error: 'Failed to upload reel' });
    }
};
