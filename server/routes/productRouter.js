const {Router} = require('express');
const ProductController = require('../controllers/productController');
const productsRouter = Router();

productsRouter.get('/', ProductController.getProducts);
productsRouter.post('/', ProductController.postProduct);


module.exports = productsRouter;