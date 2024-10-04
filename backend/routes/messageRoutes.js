const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

router.get('/last-messages', messageController.getLastMessages);

module.exports = router;

