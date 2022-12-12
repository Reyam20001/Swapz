const { check } = require('express-validator');

module.exports.validatePostResell = () => {
const validationMiddlewares =[
    check('title').notEmpty().withMessage('Item title cannot be empty'),
    check('description').notEmpty().withMessage('Description should be written'),
    check('price').notEmpty().withMessage('Price should be provided'),
    check('status').notEmpty().withMessage('status cannot be empty'),
   //  check('counterOffers.userID').notEmpty().withMessage('user id should be entered'),
    // check('counterOffers.price').notEmpty().withMessage(' price should be entered'),
    // check('counterOffers.status').notEmpty().withMessage('user id should be entered')
];

return validationMiddlewares;

}