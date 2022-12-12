const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: true
      },
    name: {
        type: String,
        required: 'Please fill a name. It can be your real one or a username.',
        trim: true
    },
    email: {
        type: String,
        required: 'Email address is required',
        trim: true,
        lowercase: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: ['Password is required'],
        trim: true,
        minlength: [8, 'Password should be at least 8 characters long']
    },
    phoneNumber: {
        type: String,
        required: ['Phone number is required'],
        trim: true,
    },
    gender: {
        type: String,
        trim: true,
        // default: 'Not specified'
    },
    avatar: {
        type: String,
        default: 'https://res.cloudinary.com/silenceiv/image/upload/q_auto:eco/v1617358367/defaultAvatar_wnoogh.png'
    },
    address:
    {
        type: String,
        trim: true
    },
    wishedProducts:
    [
        {
            productid:
            {
                type: String
            }
        }
    ]
 
});

const UserModel = model('user', userSchema);

module.exports = UserModel;