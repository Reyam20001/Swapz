const {Router} = require('express');

const exchangeValidator = require('../validators/exchangeValidators');
const exchangeController = require('../controllers/ExchangeController');
const exchangeRouter = Router();

exchangeRouter.get('/', exchangeController.getExchangeItems);
exchangeRouter.get('/item/:itemID', exchangeController.getOneExItem);
exchangeRouter.post('/insert', exchangeValidator.validatePostExchange(),exchangeController.postExchangeItem);
exchangeRouter.put('/edit/:itemID', exchangeController.putEditInfo);
exchangeRouter.delete('/delete/:itemID', exchangeController.deleteItemDelete);
exchangeRouter.put('/offer/:itemID',   exchangeValidator.validatePutExchange(), exchangeController.putMakeOffers);
exchangeRouter.put('/accept/:itemID',exchangeController.putAcceptOffer);


module.exports = exchangeRouter;