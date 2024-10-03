// routes/webhookRoutes.js
const express = require('express');
const router = express.Router();
const webhookController = require('../controllers/webhookController');

router.get('/webhook', webhookController.verifyWebhook);
router.post('/webhook', webhookController.receiveMessage);
router.post('/send-message', webhookController.sendMessage);

module.exports = router;
