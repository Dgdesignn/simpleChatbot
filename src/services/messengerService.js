// services/messengerService.js
const axios = require('axios');
const { pageAccessToken } = require('../config/config');

exports.handleMessage = (senderId, receivedMessage) => {
    let response;

    if (receivedMessage.text) {
        response = {
            text: `You sent the message: "${receivedMessage.text}".`
        };
    }

    this.sendMessageToUser(senderId, response);
};

exports.sendMessageToUser = async (recipientId, message) => {
    const url = `https://graph.facebook.com/v11.0/me/messages?access_token=${pageAccessToken}`;

    const payload = {
        recipient: { id: recipientId },
        message: message,
    };

    try {
        await axios.post(url, payload);
        console.log(`Message sent to ${recipientId}`);
    } catch (error) {
        console.error('Unable to send message:', error);
    }
};
