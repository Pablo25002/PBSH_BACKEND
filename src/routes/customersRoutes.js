const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');
const { validarJWT } = require('../middlewares/authMiddleware');

// Aplicar el middleware de protección
router.use(validarJWT); 

router.get('/', customerController.getCustomers);
router.post('/', customerController.createCustomer);
router.put('/:id', customerController.updateCustomer);
router.delete('/:id', customerController.deleteCustomer);

module.exports = router;