const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Ruta para hacer login y obtener el token
router.post('/login', authController.login);

module.exports = router;