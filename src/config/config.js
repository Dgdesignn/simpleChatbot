// config/config.js
require('dotenv').config();

module.exports = {
    pageAccessToken: process.env.PAGE_ID,
    verifyToken: process.env.VERIFY_TOKEN,
};
