const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const verifyToken = require('../middleware/verifyToken'); 

// Rutas públicas (cualquier usuario puede ver la lista o el detalle de los productos)
router.get('/', productController.getProducts);
router.get('/:id', productController.getProductById);

// Rutas protegidas (requieren enviar un Token JWT válido en los Headers)
router.post('/', verifyToken, productController.createProduct);
router.put('/:id', verifyToken, productController.updateProduct);
router.delete('/:id', verifyToken, productController.deleteProduct);

module.exports = router;