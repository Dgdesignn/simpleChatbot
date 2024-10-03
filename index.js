const express = require('express');
const app = express();
const employeeRoutes = require('./src/routes/employeeRoutes');

app.use(express.json());

// Usando as rotas
app.use('/employees', employeeRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
