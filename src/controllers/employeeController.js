const employees = require('../models/employeeModel');

// Função para retornar todos os funcionários
exports.getAllEmployees = (req, res) => {
  res.status(200).json(employees);
};
