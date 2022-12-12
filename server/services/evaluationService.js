const {ObjectId} = require('mongoose').Types;
const EvaluationModel = require('../models/Evaluation');
const UserModel = require('../models/User');

module.exports.addFeedback = async (fb) =>
{
    try
    {
        const feed = new EvaluationModel(
            {
                feedback: fb.feedback,
                rating: fb.rating,
                reply: fb.replys,
                userId: new ObjectId(fb.userId)
            }
        );        

        const newFeedback = await feed.save();

        return newFeedback;
    }
    catch(err)
    {
        console.log(err);
        throw new Error('Could not add feedback.');
    }
};

module.exports.FeedbackId = async (fb_ID) =>
{
    try
    {
        const feedback = await EvaluationModel.findById(fb_ID).populate('userId');
        return feedback;
    }
    catch(err)
    {
        console.log(err);
        throw new Error('Could not retrieve feedback.');
    }
};

module.exports.replyOnFeedback = async (reply, fb_ID) =>
{
    try
    {
        const addedReply = await EvaluationModel.findByIdAndUpdate(fb_ID, {$push: {replys: {"rep": reply}}});     

        return addedReply;
    }
    catch(err)
    {
        throw new Error('Could not add reply.');
    }
};

module.exports.displayReplies = async (fb_ID) =>
{
    try
    {
        const list = await EvaluationModel.findById(fb_ID);

        return list.replys
    }
    catch(err)
    {
        throw new Error('Could not retrieve replys.');
    }
};


module.exports.findAllFeedback = async () =>
{
    try
    {
        const feedbacks = await EvaluationModel.find();

        return feedbacks;
        
    }
    catch(err)
    {
        console.log(err);
        throw new Error('Could not retrieve feedback');
    }
}