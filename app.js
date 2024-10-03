// app.js
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const webhookRoutes = require('./src/routes/webhookRoutes');

const app = express();
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/api', webhookRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
