const {check} = require('express-validator');

module.exports.validatePostFeedback = () =>
{
    const validationMiddlewares = [

        check('feedback').notEmpty().withMessage('Cannot post an empty feedback.'),
        check('rating').isInt().withMessage('Rating must be a number out of 10.'),
        check('userId').notEmpty().withMessage('User ID cannot be empty.')
    ];

    return validationMiddlewares;
};

module.exports.validatePostReply = () =>
{
    const validationMiddlewares = [

        check('replys').notEmpty().withMessage('Cannot post an empty reply.')
    ];

    return validationMiddlewares;
};