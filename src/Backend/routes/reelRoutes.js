const express = require('express');
const { getReels, uploadReel } = require('../controllers/reelController');
const multer = require('multer');
const router = express.Router();

// Multer setup for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    },
});

const upload = multer({ storage });

router.get('/', getReels);
router.post('/upload', upload.single('video'), uploadReel);

module.exports = router;
