const { check } = require('express-validator');

module.exports.validatePostExchange = () => {
const validationMiddlewares =[
    check('title').notEmpty().withMessage('Item title cannot be empty'),
    check('description').notEmpty().withMessage('Description should be written'),
    check('category').notEmpty().withMessage('Category should be written'),
    check('city').notEmpty().withMessage('City should be provided'),
    check('status').notEmpty().withMessage('status cannot be empty'),
   //  check('madeOffers.$.userID').notEmpty().withMessage('user id should be entered'),
    // check('madeOffers.$.comment').notEmpty().withMessage(' comment should be entered'),
    // check('madeOffers.$.status').notEmpty().withMessage('status should be entered')
];

return validationMiddlewares;

};

module.exports.validatePutExchange = () => {
    const validationMiddlewares =[
       
      // check('madeOffers.$.userID').notEmpty().withMessage('user id should be entered')
        //  check('madeOffers.$.comment').notEmpty().withMessage(' comment should be entered'),
        //  check('madeOffers.$.status').notEmpty().withMessage('status should be entered')
    ];
    
    return validationMiddlewares;
    
};