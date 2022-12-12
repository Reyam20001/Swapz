const {Router} = require('express');

const resellValidator = require('../validators/items');
const resellValidator2 = require('../validators/putResellValidator');
const resellController = require('../controllers/resellController');
const resellRouter = Router();




resellRouter.get('/', resellController.getResellableItems);
//display wahda bs
resellRouter.get('/oneTime/:itemID', resellController.getOneItem);
 resellRouter.post(
  '/insert', 
    resellValidator.validatePostResell(),
   resellController.postResellableItem
   );




 resellRouter.put('/purchase/:itemID', resellController.putPurchase);
resellRouter.put('/EditItem/:itemID', resellController.putEditItemDetails);
resellRouter.delete('/delete/:itemID', resellController.deleteDeleteResellableItem);
  resellRouter.put(
   '/negotiate/:itemID', 
  resellValidator2.validatePutResell(),
   resellController.putNegotiatePrice);
resellRouter.put('/accept/:ItemID', resellController.AcceptNegotiation);

module.exports = resellRouter;