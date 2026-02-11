const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.getProducts);
router.post('/', productController.createProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;
const { validarJWT } = require('../middlewares/authMiddleware');

router.get('/', productController.getProducts); // Cualquiera lo ve
router.delete('/:id', [validarJWT], productController.deleteProduct); // Solo el admin con token