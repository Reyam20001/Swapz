const AuthService = require('../services/authService');

module.exports.postUser = async (req, res) => {
  try {
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

    const userExists = await AuthService.doesUserExist(userInfo.username);
    if (userExists) 
    {
      return res.status(422).send(
        {
            error: 'A user with the same username already exists.'
        });
    }

    await AuthService.createUser(userInfo);

  } 
  catch (error) 
  {
    res.status(500).send(
    {
        error: error.message
    });
  }
};

module.exports.postLogin = async (req, res) => {
  // extract the username and password from the request body.
  const { username, password } = req.body;
  try {
    const user = await AuthService.checkCredentials(username, password);

    if (!user) {
      return res.status(401).send({
        error:
          'Invalid credentials, please enter the correct username and password.'
      });
    }

    const jwt = await AuthService.generateJWT(user);
    res.send({
      userId: user._id,
      username: user.username,
      jwt: jwt,
      message: 'Logged in successfully.'
    });
  } catch (err) {
    res.status(500).send({
      error: error.message
    });
  }
};
