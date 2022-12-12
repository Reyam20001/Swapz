const { Schema, model } = require('mongoose');

const ResellSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    imgURL: {
        type: String
    },
    addedAt: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true
    },
    counterOffers: [{
       userID: {
           type: String
       },
        price:{
            type: Number 
        },
        status: {
            type: String
        }
    }
    ]
});

const ResellModel = model('resell', ResellSchema);
module.exports = ResellModel;