const {Schema, model} = require('mongoose');
// const mongoosePaginate = require('mongoose-paginate-v2');

const exchangeSchema = new Schema({
    title: 
    {
        type: String,
        required:true
    },
    category: 
    {
        type: String,
        required: true
    },
    description: 
    {
        type: String,
        required: true

    },
    city: 
    {
        type: String,
        required: true
    },
    image: 
    {
        type: String,
        required: true
    },
    addedAt:{
        type: String,
        required: true
    },
    comment: 
    {
        type: String
    },
    status:{
            type: String,
            required: true
       
    },
    madeOffers: 
    [
       {
           UserID:{
            type: String
           },
           ItemID:{
            type: String
           },
           comment:{
            type: String
           },
           status: {
            type: String
           }
       }
    ]
});


const exchangeModel = model('exchange', exchangeSchema);

module.exports = exchangeModel;