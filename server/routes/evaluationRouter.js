const {Router} = require('express');
const evaluationsValidator = require('../validators/evaluationValidator');
const evaluationController = require('../controllers/evaluationController');
const evaluationRouter = Router();

evaluationRouter.get('/AllFeedback', evaluationController.getFeedback);
evaluationRouter.get('/FeedbackById/:FeedbackId', evaluationController.getFeedbackByID);
evaluationRouter.get('/GetReplies/:FBID', evaluationController.getReplies);
evaluationRouter.post('/AddFeedback', evaluationsValidator.validatePostFeedback(), evaluationController.postFeedback);
evaluationRouter.put('/AddReply/:FBID', evaluationsValidator.validatePostReply(), evaluationController.putReply);

module.exports = evaluationRouter;