const {Router} = require('express');
const RequestItemController = require('../controllers/RequestItemController');
const RequestRouter = Router();

RequestRouter.post('/', RequestItemController.postProduct)
RequestRouter.get('/requestProduct', RequestItemController.getProducts);
RequestRouter.delete('/deleteproduct/:productid', RequestItemController.deleteProduct);



module.exports = RequestRouter;