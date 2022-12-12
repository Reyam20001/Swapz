const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');
const UserModel = require('../models/User');

module.exports.createAccount = async (userInfo) =>
{
    try
    {
        let hashedPassword = await bcrypt.hash(userInfo.password, 12);

        const user = new UserModel(
            {
                username: userInfo.username,
                name: userInfo.name,
                email: userInfo.email,
                password: hashedPassword,
                phoneNumber: userInfo.phoneNumber,
                gender: userInfo.gender,
                avatar: userInfo.avatar,
                address: userInfo.address
                // wishedProducts: userInfo.wishedProducts
            }
        );        

        const newUser = await user.save();

        return newUser;
    }
    catch(err)
    {
        console.log(err);
        throw new Error('Could not add user.');
    }
}

module.exports.doesUserExist = async (username) => 
{
  const existingUser = await UserModel.findOne({username: username});

  if (existingUser) 
  {
    return true;
  } 
  else 
  {
    return false;
  }
};

module.exports.checkCredentials = async (username, password) => 
{
  try 
  {

    const user = await UserModel.findOne({username: username});

    let isCorrectPassword = bcrypt.compare(password, user.password);

    if (isCorrectPassword) 
    {
      return user;
    } 
    else 
    {
      return null;
    }
  } 
  catch (error) 
  {
    throw new Error('Error logging in, please try again later.');
  }
};

module.exports.generateJWT = (user) => 
{
  const jwtPayload = 
  {
    userId: user._id,
    username: user.username
  };

  const jwtSecret = process.env.JWT_SECRET;

  try 
  {
    let token = JWT.sign(jwtPayload, jwtSecret, { expiresIn: '1h' });
    return token;
  } 
  catch (error) 
  {
    throw new Error('Failure to sign in, please try again later.');
  }
};

module.exports.auth = async (token) => 
{
  try 
  {
    const tokenPayload = await JWT.verify(token, process.env.JWT_SECRET);

    return tokenPayload;
  } 
  catch (error) 
  {
    throw new Error('Unauthrozied.');
  }
};


module.exports.manageAccount = async(id, userData) =>
{
    try
    {
        const updatedUser = await UserModel.findByIdAndUpdate(id, userData);     
         
        return updatedUser;
    }
    catch(err)
    {
        console.log(err);
        throw new Error('Could not update data.');
    }
}

module.exports.deleteAccount = async(userId) => 
{
    try
    {
        const user = await UserModel.findByIdAndDelete(userId);

        return true;
    }
    catch(err)
    {
        throw new Error('Could not find user ID.');
    }
    
}

module.exports.addToWishlist = async (userId, productID) =>
{
    try
    {
        const user = await UserModel.findByIdAndUpdate(userId, {$push: {wishedProducts: {"productid": productID}}});

        return user
    }
    catch(err)
    {
        throw new Error('Could not add to wishlist.');
    }
}

module.exports.displayWishlist = async (userID) =>
{
    try
    {
        const list = await UserModel.findById(userID);

        return list.wishedProducts
        
    }
    catch(err)
    {
        throw new Error('Could not retrieve wishlist.');
    }
}

module.exports.findAllUsers = async () =>
{
    try
    {
        const users = await UserModel.find();

        return users
        
    }
    catch(err)
    {
        throw new Error('Could not retrieve users');
    }
}

module.exports.UserId = async(userId) => 
{
    try
    {
        const user = await UserModel.findById(userId);
        return user;
    }
    catch(err)
    {
        throw new Error('Could not find user ID.');
    }
    
}