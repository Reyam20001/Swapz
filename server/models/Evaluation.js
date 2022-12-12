const {Schema, model} = require('mongoose');

const evaluationSchema = new Schema({
    feedback:
    {
        type: String,
        trim: true,
        minlength: [3, 'Feedback should be at least 3 characters long'],
        maxLenght: [500, "Feedback can not be more than 500 characters long"]
    },
    rating:
    {
        type: Number,
        trim: true,
        required: true
    },
    replys:
    [
        {
            rep:
            {
                type: String,
                trim: true,
                minlength: [3, 'Reply should be at least 3 characters long'],
                maxLenght: [500, "Reply can not be more than 500 characters long"]
            }
        }
    
    ],
    userId:
    {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true
    }
});

const EvaluationModel = model('evaluation', evaluationSchema);

module.exports = EvaluationModel;