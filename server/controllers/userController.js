const {validationResult} = require('express-validator');
const UserService = require('../services/userService');
const ProductService = require('../services/productService');
const AuthService = require('../services/authService');


module.exports.postUsers = async (req, res) =>
{
    const validationErrors = validationResult(req).array();

    if(validationErrors.length > 0)
    {
        const firstError = validationErrors[0];
        return res.status(422).send({
            error: firstError.msg
        });
    }

    const userInfo = 
    {
        username: req.body.username,
        name: req.body.name,
        email: req.body.email ,
        password: req.body.password ,
        phoneNumber:req.body.phoneNumber ,
        gender:req.body.gender ,
        // avatar: req.body.avatar,
        address: req.body.address
        // wishedProducts: req.body.wishedProducts
    };
    

    try
    {

        const userExists = await UserService.doesUserExist(userInfo.username);
        if (userExists) 
        {
          return res.status(422).send(
            {
                error: 'A user with the same username already exists.'
            });
        }
    
        await UserService.createAccount(userInfo);

        return res.status(201).send(
        {
            msg: "User added successfully!",
            userInfo: userExists._id
        });
    }
    catch(err)
    {
        console.log(err);
        return res.status(500).send({error: err.message});
    }
};

module.exports.postLogin = async (req, res) => {
    const { username, password } = req.body;

    try 
    {
      const user = await AuthService.checkCredentials(username, password);
  
      if (!user) 
      {
        return res.status(401).send
        ({
          error: 'Invalid credentials, please enter the correct username and password.'
        });
      }
  
      const jwt = await AuthService.generateJWT(user);
      res.send
      ({
        userId: user._id,
        username: user.username,
        jwt: jwt,
        message: 'Logged in successfully.'
      });
    } 
    catch (err) 
    {
      res.status(500).send
      ({
        error: error.message
      });
    }
  };

module.exports.putUser = async (req, res) =>
{

    const validationErrors = validationResult(req).array();

    if(validationErrors.length > 0)
    {
        const firstError = validationErrors[0];
        return res.status(422).send({
            error: firstError.msg
        });
    }
    
    const userInfo = 
    {
        name: req.body.name,
        email: req.body.email ,
        password: req.body.password ,
        phoneNumber:req.body.phoneNumber ,
        gender:req.body.gender ,
        avatar: req.body.avatar,
        address: req.body.address,
        wishedProducts: req.body.wishedProducts
    };

    try
    {
        const id = req.params.UserId;
        const updatedUser = await UserService.manageAccount(id, userInfo);

        return res.status(201).send(
            {
                msg: "User updated successfully!"
            });
    }
    catch(err)
    {
        console.log(err);
        return res.status(500).send({error: err.message});
    }
};


module.exports.deleteUser = async (req, res) =>
{
    try
    {
        const id = req.params.UserId;
        const user = await UserService.deleteAccount(id);

        res.send({user});
    }
    catch(err)
    {
        res.status(500);
        res.send({error: err});
    }
};


module.exports.getUsers = async (req, res) =>
{
    try
    {
        const users = await UserService.findAllUsers();

        res.send({users});
    }
    catch(err)
    {
        res.status(500);
        res.send({error: err});
    }
};


module.exports.getUserById = async (req, res) =>
{
    try
    {
        const id = req.params.UserId;
        const user = await UserService.UserId(id);

        res.send({user});
    }
    catch(err)
    {
        res.status(500);
        res.send({error: err});
    }
};


module.exports.postWishlist = async (req, res) =>
{
    try
    {
        const prodId = req.body._id;
        const userId = req.params.UserId;
        const wishlist = await UserService.addToWishlist(userId, prodId);

        return res.status(201).send(
        {
            msg: "Product added to wishlist successfully!",
            wishlist: wishlist.wishedProducts
        });
    }
    catch(err)
    {
        res.status(500);
        res.send({error: err});
    }
};


module.exports.getWishlist = async (req, res) =>
{
    try
    {
        const id = req.params.UserId;
        const wishlist = await UserService.displayWishlist(id); //returns array of wishedProduct from user
        const products = []; //holds objects of Product

        for (let i = 0; i < wishlist.length; i++) 
        {
            const p = ProductService.ProductId(wishlist[i].productid);
            const pr = Promise.resolve(p);
            const value = await pr;
            products.push(value);            
        }

        return res.status(201).send(
        {
                msg: "Getting products from wishlist successfully!",
                prods: products
        });
        
    }
    catch(err)
    {
        console.log(err);
        res.status(500);
        res.send({error: err});
    }
}