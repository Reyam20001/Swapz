const {Schema, model} = require('mongoose');
// const mongoosePaginate = require('mongoose-paginate-v2');

const productSchema = new Schema({
    title: 
    {
        type: String,
        required: ['Title is required'],
        trim: true,
        minlength: [3, 'Title should be at least 3 characters long'],
        maxLenght: [50, "Title can not be more than 50 characters long"]
    },
    category: 
    {
        type: String,
        required: ['Category is required'],
        validate: 
        {
            validator: function (v) 
            {
                return (v != 'Choose...');
            },
            message: 'Pleese choose a category'
        }
    },
    description: 
    {
        type: String,
        trim: true,
        required: ['Description is required'],
        minlength: [10, 'Description should be at least 10 characters long'],
        maxlength: [1000, 'Description should be max 500 characters long']
    },
    price: 
    {
        type: Number,
        required: true,
        trim: true,
    },
    city: 
    {
        type: String,
        required: ['City is required'],
        trim: true
    },
    image: 
    {
        type: String,
        required: true
    },
    addedAt: 
    {
        type: String,
        required: true,
    },
    // seller: 
    // {
    //     type: mongoose.Types.ObjectId,
    //     ref: 'User'
    // },
    // likes: 
    // [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: 'User'
    //     }
    // ],
    active: 
    {
        type: Boolean,
        default: true
    }
});

// productSchema.plugin(mongoosePaginate);

const ProductModel = model('product', productSchema);

module.exports = ProductModel;