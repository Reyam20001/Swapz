const {Router} = require('express');
const usersValidator = require('../validators/usersValidator');
const userController = require('../controllers/userController');
const usersRouter = Router();

usersRouter.get('/getAllUsers', userController.getUsers);
usersRouter.get('/getUser/:UserId', userController.getUserById);
usersRouter.get('/getWishlists/:UserId', userController.getWishlist);
usersRouter.post('/createAccount', usersValidator.validatePostUser(), userController.postUsers);
usersRouter.put('/addWishlist/:UserId', userController.postWishlist);
usersRouter.put('/updateUser/:UserId', usersValidator.validatePostUser(), userController.putUser);
usersRouter.delete('/deleteItem/:UserId', userController.deleteUser);


module.exports = usersRouter;