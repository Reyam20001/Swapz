const {check} = require('express-validator');

module.exports.validatePostUser = () =>
{
    const validationMiddlewares = [
        check('name').notEmpty().withMessage('User name cannot be empty.'),
        check('email').isEmail().withMessage('User email is invalid.'),
        check('password').notEmpty().withMessage('Password cannot be empty.'),
        check('phoneNumber').notEmpty().isNumeric().withMessage('Phone number cannot be empty.')
    ];

    return validationMiddlewares;
};