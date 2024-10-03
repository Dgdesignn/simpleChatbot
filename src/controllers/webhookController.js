// controllers/webhookController.js
const { pageAccessToken } = require('../config/config');
const messengerService = require('../services/messengerService');

// Verificar o token de validação do webhook
exports.verifyWebhook = (req, res) => {
    const VERIFY_TOKEN = process.env.VERIFY_TOKEN;

    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];

    if (mode && token === VERIFY_TOKEN) {
        return res.status(200).send(challenge);
    } else {
        return res.sendStatus(403);
    }
};

// Receber mensagens do Facebook Messenger
exports.receiveMessage = (req, res) => {
    const body = req.body;

    if (body.object === 'page') {
        body.entry.forEach(entry => {
            const event = entry.messaging[0];

            if (event.message) {
                const senderId = event.sender.id;
                const receivedMessage = event.message;

                messengerService.handleMessage(senderId, receivedMessage);
            }
        });
        res.status(200).send('EVENT_RECEIVED');
    } else {
        res.sendStatus(404);
    }
};

// Enviar resposta ao usuário
exports.sendMessage = (req, res) => {
    const { recipientId, messageText } = req.body;

    messengerService.sendMessageToUser(recipientId, messageText)
        .then(() => res.status(200).send('Message sent'))
        .catch(err => res.status(500).send('Error sending message: ' + err));
};
