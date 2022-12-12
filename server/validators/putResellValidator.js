const { check } = require('express-validator');

module.exports.validatePutResell = () => {
const validationMiddlewares =[
   
  //  check('counterOffer.userID').notEmpty().withMessage('user id should be entered'),
  //    check('counterOffer.price').notEmpty().withMessage(' price should be entered'),
  //    check('counterOffer.status').notEmpty().withMessage('user id should be entered')
];

return validationMiddlewares;

}