const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

// Rota para obter todos os funcionários
router.get('/', employeeController.getAllEmployees);

module.exports = router;
