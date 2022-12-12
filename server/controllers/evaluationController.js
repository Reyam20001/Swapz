const {validationResult} = require('express-validator');
const EvaluationService = require('../services/evaluationService');

module.exports.postFeedback = async (req, res) =>
{

    const validationErrors = validationResult(req).array();

    if(validationErrors.length > 0)
    {
        const firstError = validationErrors[0];
        return res.status(422).send({
            error: firstError.msg
        });
    }

    const feedbackInfo = 
    {
        feedback: req.body.feedback,
        rating: req.body.rating,
        reply: req.body.reply,
        userId: req.body.userId
    };

    try
    {
        const newFeedback = await EvaluationService.addFeedback(feedbackInfo);

        return res.status(201).send(
            {
                msg: "Feedback added successfully!",
                feedbackInfo: newFeedback._id
            });
    }
    catch(err)
    {
        console.log(err);
        return res.status(500).send({error: err.message});
    }
};

module.exports.getFeedbackByID = async (req, res) =>
{
    const id = req.params.FeedbackId;

    try
    {
        const feed = await EvaluationService.FeedbackId(id);

        if(!feed)
        {
            return res.status(404).send(
                {
                    error: 'Product not found.'
                }
            )
        }

        res.send({feedback: feed});
    }
    catch(err)
    {
        console.log(err);
        res.status(500);
        res.send({error: err});
    }
};


module.exports.putReply = async (req, res) =>
{
    const validationErrors = validationResult(req).array();

    if(validationErrors.length > 0)
    {
        const firstError = validationErrors[0];
        return res.status(422).send({
            error: firstError.msg
        });
    }

    try
    {
        const rep = req.body.reply;
        const feedId = req.params.FBID;
        const replyObj = await EvaluationService.replyOnFeedback(rep, feedId);

        return res.status(201).send(
        {
            msg: "Reply added successfully!",
            feedbackInfo: replyObj.reply
        });
    }
    catch(err)
    {
        return res.status(500).send({error: err.message});
    }
};

module.exports.getReplies = async (req, res) =>
{
    try
    {
        const id = req.params.FBID;
        const replylist = await EvaluationService.displayReplies(id); 

        return res.status(201).send(
        {
                msg: "Getting products from wishlist successfully!",
                replies: replylist
        });
        
    }
    catch(err)
    {
        console.log(err);
        res.status(500);
        res.send({error: err});
    }
}

module.exports.getFeedback = async (req, res) =>
{
    try
    {
        const feed = await EvaluationService.findAllFeedback();

        res.send({feed});
    }
    catch(err)
    {
        console.log(err);
        res.status(500);
        res.send({error: err});
    }
};